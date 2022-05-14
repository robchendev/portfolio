import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

// https://github.com/tommyquant/personal-website/blob/69fc0a790b95d9d12b793d2366a18e14245d6dda/packages/yorha/src/components/graphics/background/index.js

import Shape from './shape'

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`
const LeftShape = styled(Shape)`
  position: absolute;
  left: 0;
  top: 0;
`
const RightShape = styled(Shape)`
  position: absolute;
  right: 0;
  bottom: 0;
`

const Background = ({
    color,
    ...htmlAttributes
}) => {
    return (
        <Container aria-hidden="true" {...htmlAttributes}>
            <LeftShape color={color} />
            <RightShape color={color} viewBox="-100 -100 100 100" />
        </Container>
    );
};

Background.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default Background;