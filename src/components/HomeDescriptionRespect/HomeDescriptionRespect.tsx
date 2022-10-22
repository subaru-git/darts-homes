import React, { FC } from 'react'
import { Center, Grid, GridItem, Text, useBreakpointValue } from '@chakra-ui/react'
import YouTube from 'react-youtube'
import useLocale from '@/hooks/locale'

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
        <GridItem>
          <YouTube videoId='HiNOjEYbUXc' opts={{ height: 390, width: 640 }} />
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
        <YouTube videoId='HiNOjEYbUXc' opts={{ height: 195, width: 320 }} />
      </Center>
      <Center>
        <Text fontSize={{ base: 'md', md: 'xl' }}>{t.HOME_RESPECT}</Text>
      </Center>
    </>
  )
}

export default HomeDescriptionRespect
