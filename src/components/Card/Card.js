import React from 'react'
import Spinner from '../Spinner/Spinner'
import { v } from '../../styles/variables'
import styled from '@emotion/styled'
import { colors } from '../../styles/theme'


const ImageBox = styled.div`
  margin-bottom: -5px;
  img {
    width: 100%;
    filter: sepia(1);
    transition: 0.1s ease;
  }
`
const SpinnerPosition = styled.div`
  position: absolute;
  height: 2em;
  width: 2em;
  margin-left: -1em;
  margin-top: -1em;
  z-index: 5;
`

const TitleBox = styled.div`
  margin-bottom: -1px;
  padding: ${v.mdPadding};
  background: ${colors.taupeGray};
  letter-spacing: 0.025em;
  font-size: 1.2em;
  transition: 0.2s ease;
`
const DescriptionBox = styled.div`
  padding: ${v.mdPadding};
`
const CardBox = styled.div`
  height: 100%;
  background: ${colors.tana};
  transition: 0.15s ease;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.25);
  :hover {
    
    ${ImageBox} {
      img {
        filter: sepia(0);
      }
    }
    ${TitleBox} {
      background: ${colors.fuscousGray};
      color: ${colors.softAmber}
    }
  }
`
const Card = ({image, title, desc}) => {
        {/* <SpinnerPosition>
        <Spinner />
      </SpinnerPosition> */}
  return (


      <CardBox>
        
        <ImageBox>
          <img src={image} />
        </ImageBox>
        <TitleBox>{title}</TitleBox>
        <DescriptionBox>{desc}</DescriptionBox>
      </CardBox>
      

  )
}

export default Card