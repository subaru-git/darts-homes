const fs = require('fs')
const path = require('path')
const { parser } = require('html-metadata-parser')

const update = async () => {
  const respects = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'respect.json'), 'utf8'))
  const companies = await parseWebsiteData(respects.companies)
  const professionals = await parseWebsiteData(respects.professionals)
  const youtube = await parseWebsiteData(respects.youtube)
  fs.writeFileSync(
    path.resolve(__dirname, 'data.json'),
    JSON.stringify({ companies, professionals, youtube }),
  )
}

const parseWebsiteData = async (data) => {
  return await Promise.all(
    data.map(async (r) => {
      const pageMetadata = await parser(r)
      const website = parseMetadata(pageMetadata)
      if (!Object.values(website).every((v) => v !== null)) {
        const originMetadata = await parser(new URL(r).origin)
        const originWebsite = parseMetadata(originMetadata)
        return mergeWebsiteData(website, originWebsite, r)
      }
      return website
    }),
  )
}

const parseMetadata = (data) => {
  const title = data.meta.title ?? null
  const image = data.og.image ?? null
  const description = data.meta.description ?? null
  const url = data.og.url ?? null
  const type = data.og.type ?? null
  return { title, image, description, url, type }
}

const mergeWebsiteData = (targetData, originData, targetUrl) => {
  const title = targetData.title ?? originData.title
  const image = targetData.image ?? originData.image
  const description = targetData.description ?? originData.description
  const url = targetData.url ?? originData.url ?? targetUrl
  const type = targetData.type ?? originData.type
  return { title, image, description, url, type }
}

update()
