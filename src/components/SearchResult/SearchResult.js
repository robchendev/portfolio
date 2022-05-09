import React from 'react'
import { ResultLink, ResultContainer, ResultBlock, Title, Excerpt, LinkBtnContainer, MetaContainer, EmbedContainer, Stack } from './styles'
import LinkBtn from '../LinkBtn/LinkBtn'
import LastCommit from '../LastCommit/LastCommit'
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';

const SearchResult = ({ title, description, github, link, stack }) => {
  let pageName = "Project not found"
  let linkTo = ""
  console.log(link)
  if (title !== null) {
    pageName = title
  }
  if (link !== null) {
    linkTo = link
  }
  else {
    linkTo = pageName.toLowerCase().replace(/\ /g, '-')
  }

  // MAKE THIS RETURN IN NEWEST ORDER FROM GRAPHQL
  return (
    <React.Fragment key={pageName}>
      <ResultLink to={linkTo}>
        <ResultContainer>
          <ResultBlock>
            <MetaContainer>
              <Title>{pageName}</Title>
              <Excerpt>{description}</Excerpt>
              <Stack>{stack.join(", ")}</Stack>
            </MetaContainer>
            { typeof github !== 'undefined' &&
              <LinkBtnContainer>
                {github !== null && 
                  <LinkBtn github={github} />
                }
              </LinkBtnContainer>
            }
          </ResultBlock>
        </ResultContainer>
      </ResultLink>
    </React.Fragment>
  )
}

export default SearchResult