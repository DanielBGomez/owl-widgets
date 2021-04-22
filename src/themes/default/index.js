// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

// Contents
import { normalize } from 'styled-normalize'

// Configs
import colors from '../colors'
import { values as FontValues } from '../fonts'

// Global style
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
        font-size: ${FontValues.em};
        font-family: ${FontValues.family.main};
    }
    body,
    #app {
        display: flex;
        width: inherit;
        flex-direction: column;
        height: ${props => props.fitContent ? 'fit-content' : 'inherit'};
    }

    #app {
        overflow-y: auto;
        ${ props => !props.transparent && `
            background-color: ${ colors.grayDark_4 };
        `}
    }
`

// Components
const GlobalStyleWrapper = props => <GlobalStyle {...props} />

// Props
GlobalStyleWrapper.defaultProps = {
    transparent: false,
    fitContent: false
}
GlobalStyleWrapper.propTypes = {
    transparent: PropTypes.bool,
    fitContent: PropTypes.bool
}

// Exports
export default GlobalStyleWrapper