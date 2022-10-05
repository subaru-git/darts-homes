import React, { FC } from 'react'
import { Center, Grid, GridItem, Text } from '@chakra-ui/react'
import YouTube from 'react-youtube'

const HomeDescriptionRespect: FC = () => {
  return (
    <div>
      <Grid templateColumns='repeat(2, auto)' justifyContent='center' gap={4}>
        <GridItem>
          <Center h='100%'>
            <Text fontSize='xl'>
              This application respects all darts content like youtube videos, blogs, and more.
            </Text>
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
