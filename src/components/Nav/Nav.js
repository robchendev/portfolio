import React from 'react'
import styled from '@emotion/styled'
import { useLocation } from "@reach/router"
import NavItem from '../NavItem/NavItem'
import { FaCode } from 'react-icons/fa'
import { TiInfoLarge } from 'react-icons/ti'
import DoubleBarLine from '../graphics/double-bar/double-bar'

const Header = styled.header`
  padding-top: 1.5%;  
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: 1rem;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  gap: 2rem;
  width: 100%;
`

const Nav = () => {
  const location = useLocation().pathname
  const parentLocation = "/" + location.split('/')[1]
  return (
    <Header>
      <DoubleBarLine />
      {navLinks.map(({icon, title, link}) => (
        <NavItem 
          icon={icon}
          title={title}
          isActive={parentLocation === link}
          link={link}
        />
      ))}
    </Header>
  )
}

const navLinks = [
  {
    title: 'about',
    icon: <TiInfoLarge />,
    link: '/',
  },
  {
    title: 'projects',
    icon: <FaCode />,
    link: '/projects',
  },
]

export default Nav