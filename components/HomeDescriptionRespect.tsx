import React, { FC } from 'react'
import { Center, Grid, GridItem, Text } from '@chakra-ui/react'
import YouTube from 'react-youtube'
import useLocale from '../hooks/locale'

const HomeDescriptionRespect: FC = () => {
  const { t } = useLocale()
  return (
    <div>
      <Grid templateColumns='repeat(2, auto)' justifyContent='center' gap={4}>
        <GridItem>
          <Center h='100%'>
            <Text fontSize='xl'>{t.HOME_RESPECT}</Text>
          </Center>
        </GridItem>
        <GridItem>
          <YouTube videoId='HiNOjEYbUXc' />
        </GridItem>
      </Grid>
    </div>
  )
}

export default HomeDescriptionRespect
