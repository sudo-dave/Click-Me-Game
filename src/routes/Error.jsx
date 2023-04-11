import React from 'react'

const Error = ({errorCode,msg}) => {
  return (
    <div>Error: {errorCode} | msg: {msg}
    </div>
  )
}

export default Error
