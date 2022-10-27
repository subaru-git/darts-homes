import React, { FC } from 'react'
import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import RespectCardView from '@/components/RespectCardView'

type RespectMainProps = {
  data: RespectResult
}

const RespectMain: FC<RespectMainProps> = ({ data }) => {
  return (
    <div data-cy='respect-main'>
      <NavigationBar />
      <RespectCardView data={data} />
      <Footer />
    </div>
  )
}

export default RespectMain
