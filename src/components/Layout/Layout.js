import React from 'react'
import { Helmet } from 'react-helmet'
import { globalStyle } from '../../styles/globalstyles'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import Background from '../graphics/background'
import { colors } from '../../styles/theme'
import Overlay from '../graphics/overlay'
import Divider from '../graphics/divider/divider'
import Nav from '../Nav/Nav'
import { css } from '@emotion/react'
import { v } from '../../styles/variables'

const screenWidthStyles = css`
  max-width: ${v.screenWidth};
  margin: 0 auto;
`
const Container = styled.div`
  height: 100vh;
`
const ScreenWidth = styled.div`
  ${screenWidthStyles}
`
const Body = styled.div`
  padding-top: 0.5%;
  width: 100%;
  height: 100%;
`
const wrapperCSS = css`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
`
const BackgroundWrapper = styled.div`
  ${wrapperCSS}
  z-index: -1;
`
const OverlayWrapper = styled.div`
  ${wrapperCSS}
  z-index: 99;
`
const LineDivider = styled.div`
  height: 2px;
  background-color: ${colors.fuscousGray};
`
const Footer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 1em;
`
const PageTitle = styled.h1`

  @keyframes slideRightText {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  white-space: nowrap;
  overflow: hidden;
  animation: 1.2s ease slideRightText;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2.8rem;
  letter-spacing: 0.1em;
  text-shadow: rgba(78, 75, 66, 0.3) 0.14em 0.12em 0px;
`

const Content = styled.div`
  display: flex;
  height: calc(100% - 2.5em);
`
const ChildrenComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //overflow-y: scroll;
`
const Main = styled.div`
  height: calc(100% - 30px - 0.5% - (2*4*16px*(77/300)) - 16px - 44.8px - (5*16px) - 8px) ;
  ${screenWidthStyles}
`
// Just use overflow y with a custom scrollbar 
// instead of worrying about footer
const Layout = ({title, children}) => {
  return (
    <React.Fragment>
      <Global styles={globalStyle} />
      <Helmet>
        <title>Robert Chen</title>
      </Helmet>
      <BackgroundWrapper>
        <Background color={colors.taupeGray} />
      </BackgroundWrapper>
      <OverlayWrapper>
        <Overlay color="#000" />
      </OverlayWrapper>
      <Container>
        <ScreenWidth>
          <Nav />
        </ScreenWidth>
        <LineDivider />
        <ScreenWidth>
          <Divider />
        </ScreenWidth>

        <Main>
          <Body>
            <PageTitle>{title}</PageTitle>
            <Content>
              <ChildrenComponent>
                
                  
                    {children}
                  
                
              </ChildrenComponent>
            </Content>
          </Body>
        </Main>
        
        <Footer>
          <LineDivider />
          <ScreenWidth>
            <Divider />
          </ScreenWidth>
        </Footer>
      </Container>
    </React.Fragment>
  )
}

export default Layout