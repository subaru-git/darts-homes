import React, { FC } from 'react'
import { Center, Grid, GridItem, Img, Text, useBreakpointValue } from '@chakra-ui/react'
import useLocale from '@/hooks/locale'

const HomeDescription: FC = () => {
  const isMd = useBreakpointValue({ base: false, md: true })
  return <>{isMd ? <DesktopHomeDescription /> : <MobileHomeDescription />}</>
}

const DesktopHomeDescription: FC = () => {
  const { t } = useLocale()
  return (
    <Grid templateColumns='repeat(2, auto)' justifyContent='center' gap={4}>
      <GridItem>
        <Img src='/darts.png' alt='darts homes' boxSize={450} objectFit='cover' loading='lazy' />
      </GridItem>
      <GridItem>
        <Center h='100%'>
          <Text fontSize={'xl'} whiteSpace='pre-wrap'>
            {t.HOME_DESCRIPTION}
          </Text>
        </Center>
      </GridItem>
    </Grid>
  )
}

const MobileHomeDescription: FC = () => {
  const { t } = useLocale()
  return (
    <>
      <Center>
        <Img src='/darts.png' alt='darts homes' boxSize={200} objectFit='cover' loading='lazy' />
      </Center>
      <Center h='100%'>
        <Text fontSize={'md'} whiteSpace='pre-wrap'>
          {t.HOME_DESCRIPTION}
        </Text>
      </Center>
    </>
  )
}
export default HomeDescription
