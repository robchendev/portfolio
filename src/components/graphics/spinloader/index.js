import React from 'react'
import { colors } from '../../../styles/theme'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react';

const LINE_WIDTH_PX = 4;

const clockWise = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
`

const Spinner = styled.circle`
  animation: ${clockWise} 3s linear infinite;
  transform-origin: 50% 50%;
`

const SpinLoader = () => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%" // changed
        viewBox="0 0 100 100"
      >
        <defs>
          <clipPath id="spinner-clip">
            <rect x="0" y="0" width="50" height="50" />
          </clipPath>
          <clipPath id="spinner-clip2">
            <rect x="50%" y="50%" width="50" height="50" />
          </clipPath>
        </defs>

        
        <circle cx="50%" cy="50%" r="50%" fill={colors.tana} />
        <circle cx="50%" cy="50%" r="14%" fill={colors.fuscousGray} />
        <circle cx="50%" cy="50%" r="40%" fill="none" stroke={colors.fuscousGray} strokeWidth={`${LINE_WIDTH_PX}px`} />

        <Spinner
          cx="50%"
          cy="50%"
          r="26%"
          fill="none" 
          stroke={colors.fuscousGray}
          strokeWidth={`${LINE_WIDTH_PX * 3.5}px`}
          clipPath="url(#spinner-clip)"
        />
        <Spinner
          cx="50%"
          cy="50%"
          r="26%"
          fill="none" 
          stroke={colors.fuscousGray}
          strokeWidth={`${LINE_WIDTH_PX * 3.5}px`}
          clipPath="url(#spinner-clip2)"
        />
      </svg>
  )
}

export default SpinLoader