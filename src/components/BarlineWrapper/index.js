import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../../styles/theme'

const BarLine = styled.div`
  border: 3px solid ${colors.taupeGray};
  border-width: 0 0.25em 0 0.9em;
  box-sizing: border-box;
  padding: 0 6px 20px 0;
  @keyframes expandDoubleBar {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
  animation: 0.3s ease expandDoubleBar;
  margin-right: 2rem;
`
const Resizable = styled.div`
  max-height: 100%;
  display: flex;
  width: 100%;
`
const FullWidthDisplay = styled.div`
  width: 100%;
`

const BarlineWrapper = ({children}) => {
  return (
    <Resizable>
      <BarLine />
      <FullWidthDisplay>
        {children}
      </FullWidthDisplay>
    </Resizable>
  )
}

export default BarlineWrapper