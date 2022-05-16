import * as React from "react"
import styled from "@emotion/styled"
import Layout from "../components/Layout/Layout"
import Card from "../components/Card/Card"
import guitarDex from '../images/gdex.jpg'
import BarlineWrapper from "../components/BarlineWrapper"


// https://www.gameuidatabase.com/gameData.php?id=150#&gid=1&pid=5
// Idea: Have bottom section with the controls show
// icons for left click, right click and scroll

const projects = [
  {
    title: 'Guitardex',
    image: guitarDex,
    desc: 'Placeholder description'
  },
  {
    title: 'F.R.E.T.',
    image: guitarDex,
    desc: 'Placeholder description'
  },
  {
    title: 'VikeLabs',
    image: guitarDex,
    desc: 'Placeholder description'
  },
  {
    title: 'Shopify Description Generator',
    image: guitarDex,
    desc: 'Placeholder description'
  },
  {
    title: 'Leaderboard Generator',
    image: guitarDex,
    desc: 'Placeholder description'
  },
  {
    title: 'Music Sheet Search Table',
    image: guitarDex,
    desc: 'Placeholder description'
  },
  {
    title: 'Avian Guitars',
    image: guitarDex,
    desc: 'Placeholder description'
  },
  {
    title: 'Fingerstyle Transcriptions',
    image: guitarDex,
    desc: 'Placeholder description'
  },
]
const Column = styled.div`
  float: left;
  padding-right: 15px;

  // full width
  width: ${100/4}%; // use same format for 3, 5, etc
  :not(:nth-child(-n+4)) {
    padding-top: 15px;
  }
  
`
const ProjectsSpace = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin-left: -8px;
  padding-bottom: 3px;
`

const Projects = () => {
  return (
    <Layout title="Projects">
      <BarlineWrapper>
        <ProjectsSpace>
          {projects.map(({image, title, desc}) => (
            <Column>
              <Card 
                image={image}
                title={title}
                desc={desc}
              />
            </Column>
          ))}
          
        </ProjectsSpace>
      </BarlineWrapper>
    </Layout>
  )
}

export default Projects