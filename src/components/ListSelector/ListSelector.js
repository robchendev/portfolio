import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import { colors } from '../../styles/theme'
import { v } from '../../styles/variables';
import BarlineWrapper from '../BarlineWrapper';
import StyledButton from '../StyledButton';
import ActiveBlock from '../ActiveBlock';

const SelectorMenu = styled.div`
  margin-right: 1em;
`
const Selectable = styled.div`
  position: relative;
  :not(:last-child) {
    margin-bottom: 1em;
  }
`
const SplitMenu = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  position: relative;
`
const InfoMenu = styled.div`
  width: 50%;
  max-width: 100%;
  background: ${colors.tana};
  margin-right: 2em;
`
const Title = styled.div`
  padding: ${v.mdPadding};
  background: ${colors.fuscousGray};
  color: ${colors.tana};
  font-size: 1.2em;
  letter-spacing: 0.05em;
`
const Content = styled.div`
  padding: ${v.mdPadding};
`
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80em;
  max-height: 100%;
`
const GenericContent = styled.div`
  min-height: 15em;
`
const OverflowWrapper = styled.div`
  overflow-y: scroll;
  max-height: 100%;
`

const selectors = [
  {
    title: "Experience",
    id: 1,
    content: <div>Experience HTML</div>
  },
  {
    title: "Education",
    id: 2,
    content: <div>Education HTML</div>
  },
  {
    title: "Skills",
    id: 3,
    content: <div>Skills HTML</div>
  },
  {
    title: "Hobbies",
    id: 4,
    content: <div>Hobbies HTML</div>
  },
]

const ListSelector = () => {

  const [selected, setSelected] = useState(1) // id 1 default
  function handleSelect(id) {
    setSelected(id)
  } 
  useEffect(() => {
    const allInfoMenus = document.getElementsByClassName('infoMenu')
    const allActiveBlocks = document.getElementsByClassName('activeBlock')
    for (let i = 0; i < allInfoMenus.length; i++) {
      allInfoMenus[i].style.display = "none"
      allActiveBlocks[i].style.display = "none"
    }
    document.getElementById(`info${selected}`).style.display = "block"
    document.getElementById(`active${selected}`).style.display = "block"
    document.getElementById(`${selected}`).focus()
  }, [selected])

  // call a ActiveBox with an id of 'active${id}'

  return (
    <SplitMenu>
      <SelectorMenu>
        <BarlineWrapper>
          {selectors.map(({title, id}) => (
            <Selectable id={id} onClick={() => handleSelect(id)}>
              <ActiveBlock 
                classN='activeBlock' 
                title={title}
                id={`active${id}`}
              />
              <StyledButton title={title} />
            </Selectable>
          ))}
        </BarlineWrapper>
      </SelectorMenu>
      <BarlineWrapper>
        <OverflowWrapper>
        <InfoWrapper>
          {selectors.map(({title, id, content}) => (
            <InfoMenu className='infoMenu' id={`info${id}`}>
              <Title>{title}</Title>
              <Content>
                {content}
              </Content>
            </InfoMenu>
          ))}
          <InfoMenu>
            <Title>Hello</Title>
            <Content>
              <GenericContent>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
                <div>sup</div>
              </GenericContent>
            </Content>
          </InfoMenu>
        </InfoWrapper>
        </OverflowWrapper>
      </BarlineWrapper>
    </SplitMenu>
  )
}

export default ListSelector