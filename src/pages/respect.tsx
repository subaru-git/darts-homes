import { readFileSync } from 'fs'
import { Box } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import RespectMain from '@/containers/RespectMain'

type Props = {
  data: RespectResult
}

const Respect: NextPage<Props> = ({ data }) => {
  return (
    <Box>
      <RespectMain data={data} />
    </Box>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { data: JSON.parse(readFileSync('data/data.json', 'utf8')) } }
}

export default Respect
