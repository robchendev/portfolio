import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from '../../styles/theme'
import { v } from '../../styles/variables'
import { Link } from 'gatsby'

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
`
const BottomBorder = styled.div`
  ${borderStyles};
  margin-top: -2px;
`
const DarkSlider = styled.div`
  height: calc(100% - ${v.navBarPaddingBottom});
  position: absolute;
  background: ${colors.fuscousGray};
  width: 0;
  z-index: 3;
  transition: 0.2s ease width;
  bottom: ${v.navBarPaddingBottom};
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
  text-transform: uppercase;
  letter-spacing: 0.05em;
`
const FocusText = styled.span`
  position: relative;
  z-index: 5;
  transition: 0.2s ease;
`
const IconWrapper = styled.span`
  svg {
    font-size: 1.5rem;
    border-radius: 2px;
    background-color: ${({ isActive }) => (isActive ? `${colors.tana}` : `${colors.fuscousGray}`)};
    padding: 2px;
    color: ${({ isActive }) => (isActive ? `${colors.fuscousGray}` : `${colors.taupeGray}`)};
    margin-bottom: -0.15em;
    margin-right: 0.25em;
    transition: 0.1s ease;
  }
`
const Title = styled.span`
  
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
    ${IconWrapper} {
      svg {
        color: ${colors.fuscousGray};
        background-color: ${colors.tana};
      }
    }
  }
`
const NavItem = ({ icon, title, isActive, link }) => {
  return (
    <BoxContainer>
      <Link to={link}>
        <HoverContainer isActive={isActive}>
          <ActiveBox isActive={isActive}/>
          <TopBorder />
          <DarkSlider />
          <Box isActive={isActive}>
            <FocusText>
              <IconWrapper isActive={isActive}>{icon}</IconWrapper>
              <Title>{title}</Title>
            </FocusText>
          </Box>
          <BottomBorder />
        </HoverContainer>
      </Link>
    </BoxContainer>
  )
}

export default NavItem