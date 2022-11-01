import React, { FC } from 'react'
import { Box, Center, Grid, GridItem, Text, useBreakpointValue } from '@chakra-ui/react'
import LiteYoutubeEmbed from 'react-lite-youtube-embed'
import useLocale from '@/hooks/locale'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const HomeDescriptionRespect: FC = () => {
  const isMd = useBreakpointValue({ base: false, md: true })
  return <>{isMd ? <DesktopHomeDescriptionRespect /> : <MobileHomeDescriptionRespect />}</>
}

const DesktopHomeDescriptionRespect: FC = () => {
  const { t } = useLocale()
  return (
    <div>
      <Grid templateColumns='repeat(2, auto)' justifyContent='center' gap={4}>
        <GridItem>
          <Center h='100%'>
            <Text fontSize={{ base: 'md', md: 'xl' }}>{t.HOME_RESPECT}</Text>
          </Center>
        </GridItem>
        <GridItem height='390px' width='640px'>
          <LiteYoutubeEmbed
            id='HiNOjEYbUXc'
            title='【ダーツ】友達にダーツをさせる方法【菊地山口】'
            webp
          />
        </GridItem>
      </Grid>
    </div>
  )
}

const MobileHomeDescriptionRespect: FC = () => {
  const { t } = useLocale()
  return (
    <>
      <Center>
        <Box width='320px' height='195px'>
          <LiteYoutubeEmbed
            id='HiNOjEYbUXc'
            title='【ダーツ】友達にダーツをさせる方法【菊地山口】'
            webp
          />
        </Box>
      </Center>
      <Center>
        <Text fontSize={{ base: 'md', md: 'xl' }}>{t.HOME_RESPECT}</Text>
      </Center>
    </>
  )
}

export default HomeDescriptionRespect
