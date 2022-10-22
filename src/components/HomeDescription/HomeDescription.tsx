import React, { FC } from 'react'
import { Center, Grid, GridItem, Image, Text, useBreakpointValue } from '@chakra-ui/react'
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
        <Image src='/darts.png' alt='darts' boxSize={450} objectFit='cover' />
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
        <Image src='/darts.png' alt='darts' boxSize={200} objectFit='cover' />
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
