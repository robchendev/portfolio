import React from 'react'
import SpinLoader from "../graphics/spinloader"
import styled from '@emotion/styled'

const Loader = styled(SpinLoader)`
  height: 100%;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`

const Spinner = () => {
  return (
    <Wrapper>
      <Loader aria-hidden="false" aria-label="Loading" />
    </Wrapper>
  )
}

export default Spinner