import React from 'react'
import { Watch } from 'react-loader-spinner'

const spinner = () => {
  return (
    <Watch
  height="80"
  width="80"
  radius="48"
  color="#000000"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
    />
  )
}

export default spinner