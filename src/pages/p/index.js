import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout/Layout"
import SearchBar from "../../components/SearchBar/SearchBar"

const Projects = ({ data }) => {
  let pageName = 'Projects'
  return (
    <Layout title="Projects">
      <SearchBar 
        title={pageName}
        slug={pageName.toLowerCase().substring(0,1)}
        placeholder={`search ${pageName.toLowerCase()}...`} 
        data={data.projects.nodes} 
      >
      </SearchBar>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "project"}}}
      sort: {fields: frontmatter___order, order: DESC}
    ) {
      nodes {
        frontmatter {
          order
          title
          description
          github
          link
          stack
        }
      }
    }
  }
`

export default Projects