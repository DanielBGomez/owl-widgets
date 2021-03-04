// Modules
import React from 'react'
// import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { transparentize } from 'polished'

// Contents
import { normalize } from 'styled-normalize'

// Configs
import colors from '../colors'

// Elements
const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        padding: 0;
        margin: auto;
        text-align: center;
        box-sizing: border-box;
    }

    html {
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }
    body,
    #app {
        display: flex;
        width: inherit;
        height: inherit;
        flex-direction: column;
        background-color: ${ transparentize(0, colors.grayDark_4) };
    }

    #app {
        overflow-y: auto;
    }
`

// Components
const GlobalStyleWrapper = ({
}) => (
    <GlobalStyle />
)

// Props
// GlobalStyleWrapper.defaultProps = {
// }

// GlobalStyleWrapper.propTypes = {
// }

// Exports
export default GlobalStyleWrapper