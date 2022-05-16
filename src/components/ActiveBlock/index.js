import styled from '@emotion/styled'
import React from 'react'
import { colors } from '../../styles/theme'

const Active = styled.div`
  @keyframes slideRight {
    0% {
      width: 100%;
    }
    100% {
      width: calc(100% + 1em);
    }
  }
  height: 100%;
  animation: 0.15s ease slideRight;
  display: none;
  position: absolute;
  background: ${colors.fuscousGray};
  width: calc(100% + 1em);
  transition: 0.2s ease width;
  z-index: 50;
  color: white;
`
const Square = styled.div`
  display: inline-block;
  background: ${colors.tana};
  width: 1rem;
  height: 1rem;
  margin-right: 0.35em;
  transition: 0.15s ease;
`
const Title = styled.span`
  z-index: 10;
`
const Box = styled.div`
  z-index: 3;
  padding: 5px 8px;
  min-width: 8em;
  color: ${colors.tana};
  font-size: 1.5rem;
  letter-spacing: 0.05em;
`
const ActiveBlock = ({classN, title, id}) => {
  return (
    <Active
      className={classN}
      title={title}
      id={id}
    >
      <Box>
        <Square />
        <Title>{title}</Title>
      </Box>
    </Active>
  )
}

export default ActiveBlock