// Modules
import Styled from 'styled-components'
import PropTypes from 'prop-types'

// Theme
import { spacing } from '../../themes'

// Elements
const WindowBody = Styled.div`
    margin: 0;
    width: 100%;
    padding: ${ spacing.l };
    margin-top: ${ spacing.noSpace };
    
    ${ ({ fitContent }) => `
        margin-bottom: ${ fitContent ? 'auto' : '0' };
        height: ${ fitContent ? 'fit-content' : '100%' };
    ` }
`

// Prop types
WindowBody.propTypes = {
    fitContent: PropTypes.bool
}
// Defaults
WindowBody.defaultProps = {
    fitContent: false
}

// Exports
export default WindowBody