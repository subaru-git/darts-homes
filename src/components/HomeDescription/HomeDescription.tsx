import React, { FC } from 'react'
import { Center, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import useLocale from '@/hooks/locale'

const HomeDescription: FC = () => {
  const { t } = useLocale()
  return (
    <Grid templateColumns='repeat(2, auto)' justifyContent='center' gap={4}>
      <GridItem>
        <Image src='/darts.jpg' alt='darts' maxWidth='700px' />
      </GridItem>
      <GridItem>
        <Center h='100%'>
          <Text fontSize='xl' whiteSpace='pre-wrap'>
            {t.HOME_DESCRIPTION}
          </Text>
        </Center>
      </GridItem>
    </Grid>
  )
}

export default HomeDescription
