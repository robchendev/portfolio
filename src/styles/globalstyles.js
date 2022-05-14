import { colors } from "./theme"
import { css } from '@emotion/react'
import { mobile } from './variables'

export const globalStyle = css`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${colors.softAmber};
    font-family: 'Roboto', sans-serif;
    overflow-y: scroll;
    //overflow-y: scroll; // Only scroll on projects
    /* font-family: 'Fredoka', sans-serif;
    letter-spacing: .6px;
    overflow-y: scroll;
    font-size: 1rem; */ 
  }
  button {
    /* font-family: 'Fredoka', sans-serif;
    font-size: 1rem; */
  }
  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 500;
    margin-bottom: 0.6em;
  }
  h1 {
    /* font-size: 1.8em;
    display: flex;
    justify-content: center;
    margin-bottom: 1em; */
  }
  h2 {
    font-size: 1.6rem;
    ${mobile} {
      font-size: 1.4rem;
    }
  }
  h3 {
    font-size: 1.4rem;
    ${mobile} {
      font-size: 1.25rem;
    }
  }
  h4 {
    font-size: 1.2rem;
    ${mobile} {
      font-size: 1.1rem;
    }
  }
  p {
    line-height: 1.5em;
    :not(:last-child) {
      margin-bottom: 1em;
    }
  }
  /* .anchorclass {
    background: black !important;
  } */
  /* .yt-lite::after {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
  } */
`