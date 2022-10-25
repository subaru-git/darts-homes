interface RespectResult {
  companies: WebsiteResult[]
  professionals: WebsiteResult[]
  youtube: WebsiteResult[]
}

interface WebsiteResult {
  title: string | null
  image: string | null
  description: string | null
  url: string | null
  type: string | null
}
