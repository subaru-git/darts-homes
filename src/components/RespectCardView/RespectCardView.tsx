import React, { FC } from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import RespectCard from '@/components/RespectCard'

type RespectCardViewProps = {
  data: RespectResult
}

const RespectCardView: FC<RespectCardViewProps> = ({ data }) => {
  return (
    <Flex direction='column' p={4}>
      <Box>
        <Heading as='h2' pb={4}>
          Companies
        </Heading>
        <Flex wrap={'wrap'} gap={2}>
          {data.companies.map((item) => (
            <div key={item.title}>
              <RespectCard data={item} />
            </div>
          ))}
        </Flex>
      </Box>
      <Box pt={4}>
        <Heading as='h2' pb={4}>
          Professional
        </Heading>
        <Flex wrap={'wrap'} gap={2}>
          {data.professionals.map((item) => (
            <div key={item.title}>
              <RespectCard data={item} />
            </div>
          ))}
        </Flex>
      </Box>
      <Box pt={4}>
        <Heading as='h2' pb={4}>
          Youtube
        </Heading>
        <Flex wrap={'wrap'} gap={2}>
          {data.youtube.map((item) => (
            <div key={item.title}>
              <RespectCard data={item} />
            </div>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}

export default RespectCardView
