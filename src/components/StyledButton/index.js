import styled from '@emotion/styled'
import React from 'react'
import { colors } from '../../styles/theme'
import { v } from '../../styles/variables';
import { css } from '@emotion/react';

const borderStyles = css`
  position: absolute;   
  height: 2px;
  width: 100%;
  background-color: ${colors.fuscousGray};
  transition: 0.18s ease margin;
  z-index: -1;
`
const TopBorder = styled.div`
  ${borderStyles};
  margin-top: 0;
  @keyframes pageLoadBorder {
    0% {
      margin-top: -5px;
    }
    100% {
      margin-top: 0;
    }
  }
  animation: ${({ isActive }) => (isActive ? `0.3s ease pageLoadBorder` : `none`)};
`
const BottomBorder = styled.div`
  ${borderStyles};
  margin-top: -2px;
`
const DarkSlider = styled.div`
  height: 100%;
  position: absolute;
  background: ${colors.fuscousGray};
  width: 0;
  z-index: 3;
  transition: 0.2s ease width;
`

// When IsActive, ActiveBox =
// bottom: ${v.navBarPaddingBottom};
// height: 100%;
const ActiveBox = styled.div`
  @keyframes slideInFromAbove {
    0% {
      height: calc(100% - ${v.navBarPaddingBottom});
    }
    100% {
      height: 100%;
    }
  }
  height: 100%;
  animation: 0.15s ease slideInFromAbove;
  display: ${({ isActive }) => (isActive ? `block` : `none`)};
  position: absolute;
  background: ${colors.fuscousGray};
  width: 100%;
  z-index: 3;
  transition: 0.2s ease width;
`
const Box = styled.div`
  //opacity: 0.5;
  z-index: 3;
  padding: 5px 8px;
  min-width: 8em;
  background-color: ${colors.taupeGray};
  color: ${({ isActive }) => (isActive ? `${colors.tana}` : `${colors.fuscousGray}`)};
  font-size: 1.5rem;
  letter-spacing: 0.05em;
`
const FocusText = styled.span`
  position: relative;
  z-index: 5;
  transition: 0.2s ease;
`
const Square = styled.div`
  display: inline-block;
  background: ${colors.fuscousGray};
  width: 1rem;
  height: 1rem;
  margin-right: 0.35em;
  transition: 0.15s ease;
`
const Title = styled.span`
  z-index: 10;
`
const BoxContainer = styled.span`
  min-width: 12em;
  padding-bottom: ${v.navBarPaddingBottom};
  position: relative;
  a {
    text-decoration: none;
  }
`
const HoverContainer = styled.span`
  :hover {
    ${TopBorder} {
      margin-top: ${({ isActive }) => (isActive ? `0` : `-5px`)};
      z-index: 2;
    }
    ${BottomBorder} {
      margin-top: ${({ isActive }) => (isActive ? `-2px` : `3px`)};
      z-index: 2;
    }
    ${DarkSlider} {
      width: 100%;
    }
    ${FocusText} {
      color: ${colors.tana};
    }
    ${Square} {
      background-color: ${colors.tana};
    }
  }
`

const StyledButton = ({ title, isActive }) => {
  return (
    <BoxContainer>
      <HoverContainer isActive={isActive} >
        <ActiveBox isActive={isActive} />
        <TopBorder isActive={isActive} />
        <DarkSlider />
        <Box isActive={isActive}>
          <FocusText>
            <Square isActive={isActive} />
            <Title>{title}</Title>
          </FocusText>
        </Box>
        <BottomBorder />
      </HoverContainer>
    </BoxContainer>
  )
}

export default StyledButton