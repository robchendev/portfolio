import * as React from "react"
import Layout from "../components/Layout/Layout"
import ListSelector from "../components/ListSelector/ListSelector"

// https://www.gameuidatabase.com/gameData.php?id=150#&gid=1&pid=5
// Idea: Have bottom section with the controls show
// icons for left click, right click and scroll



const About = () => {
  return (
    <Layout title="About">
      <ListSelector />
    </Layout>
  )
}

export default About