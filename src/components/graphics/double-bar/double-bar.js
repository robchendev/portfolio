import styled from '@emotion/styled';
import React from 'react'
import { colors } from '../../../styles/theme'
import { v } from '../../../styles/variables'

const DoubleBar = styled.span`
  border: 3px solid ${colors.taupeGray};
  border-width: 0 0.25em 0 0.9em;
  box-sizing: border-box;
  padding: 0 6px 20px 0;
  height: calc(100% - ${v.navBarPaddingBottom});
`

const DoubleBarLine = () => {
  return (
    <DoubleBar></DoubleBar>
  )
}

export default DoubleBarLine