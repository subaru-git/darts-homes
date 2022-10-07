import React, { FC } from 'react'
import { css } from '@emotion/react'

const Footer: FC = () => {
  return (
    <div css={styles}>
      <p>{'(c)2022-2022 subaru-git'}</p>
    </div>
  )
}
const styles = css({
  position: 'absolute',
  bottom: 0,
  left: 0,
  backgroundColor: 'black',
  textAlign: 'center',
  color: 'white',
  height: '32px',
  width: '100%',
  marginBottom: '-32px',
})
export default Footer
