import styled from '@emotion/styled'
import React, { useState } from 'react'
import { v } from '../../../styles/variables'

const SvgWrapper = styled.div`
   display: inline-block;
   svg {
      width: 4em;
   }
   :not(:first-child) {
      margin-left: -0.5em;
   }
`
const rectangle = {
   fill:'#525046',
   stroke: 'none',
   strokeWidth: '0.0846667',
}
const circle = {
   fill:'#4e4b42',
   fillRule: 'evenodd',
   strokeWidth: '0.312071',
   fillOpacity: 1,
}
const radius = 0.32910436
const Epaulet = () => {
   return (
      <SvgWrapper>
         <svg 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            id="svg5" 
            viewBox="100.98 38.41 9.48 2.43"
         >
            <defs id="defs2"/>
            <g id="layer1">
               <path 
                  style={rectangle}
                  d="m 109.1904,38.406353 v 0.423333 h 1.27 v -0.423333 h -1.27" 
                  id="path409"
               />
               <path 
                  style={rectangle}
                  d="m 100.97773,38.406353 v 0.423333 h 1.18533 v -0.423333 h -1.18533" 
                  id="path135"
               />
               <circle 
                  style={circle} 
                  id="path177" 
                  cx="104.86485" 
                  cy="39.293739" 
                  r={radius}
               />
               <circle 
                  style={circle}  
                  id="path177-9" 
                  cx="106.5111" 
                  cy="39.294106" 
                  r={radius}
               />
               <circle 
                  style={circle}  
                  id="path177-9-1" 
                  cx="105.69411" 
                  cy="40.509106" 
                  r={radius}
               />
            </g>
         </svg>
      </SvgWrapper>
   )
}

const DividerContainer = styled.div`
   width: 100%;
   display: inline-flex;
   justify-content: center;
   flex-flow: row wrap;
   overflow: hidden;
`

const WindowWidthTest = styled.div`
   background: red;
`

// Need to generate number of Epaulets to be shown based on screen width
// Divider width is 4em + x*3.5em
// Make sure full width is longer than that
const Divider = () => {

   // returns windowWidth in em
   function checkWindowWidth() {
      // https://stackoverflow.com/a/42061290
      return (
         window.innerWidth / parseFloat(
            getComputedStyle(
            document.querySelector('body')
            )['font-size']
         )
      )
   }

   let windowWidth = null
   if (typeof window !== 'undefined') {
      windowWidth = checkWindowWidth()
   }
   const [dividerWidth, setDividerWidth] = useState(v.screenWidthNum * windowWidth)
   if (typeof window !== 'undefined') {
      window.addEventListener("resize", reportWindowWidth)
   }
   function reportWindowWidth() {
      setDividerWidth(checkWindowWidth() * v.screenWidthNum);
   }

   // 'dividerWidth > 4 + 3.5' must always be true
   let numEpaulets = Math.floor(
      (((dividerWidth-4) / 3.5) + 1)
   )

   return (
      <DividerContainer>
         {Array(numEpaulets).fill(<Epaulet />)}
      </DividerContainer>
  )
}

export default Divider

