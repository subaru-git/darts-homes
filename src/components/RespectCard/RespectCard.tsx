import React, { FC, Fragment } from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Center, Link, Image, Heading, Text } from '@chakra-ui/react'
import replace from 'react-string-replace'

type RespectCardProps = {
  data: WebsiteResult
}

const RespectCard: FC<RespectCardProps> = ({ data }) => {
  return (
    <Box borderRadius='xl' p={5} shadow='md' borderWidth='1px' maxWidth={'md'}>
      <Center>
        <Link href={data.url ?? '#'} isExternal>
          <Image
            src={data.image ?? ''}
            alt={`${data.title} image`}
            fallbackSrc='/fallback.webp'
            height='150px'
            maxWidth='400px'
          />
        </Link>
      </Center>
      <Heading as='h3' size={{ base: 'md', md: 'lg' }} py={2}>
        {data.title}
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }} wordBreak='break-word'>
        {replaceDescription(data.description ?? '')}
      </Text>
    </Box>
  )
}

const replaceDescription = (description: string) => {
  const urlReplaced = replace(
    description,
    /(https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+)/g,
    (match, i) => {
      return (
        <Fragment key={i}>
          <br />
          <Link href={match} isExternal color='teal.700' fontStyle='italic'>
            {match} <ExternalLinkIcon />
          </Link>
          <br />
        </Fragment>
      )
    },
  )
  return urlReplaced
}

export default RespectCard
