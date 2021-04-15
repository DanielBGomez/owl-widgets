// Modules
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Local modules
import { DefaultThemeGlobals } from '../../themes'
import Overwolf from '../../docs/overwolf'

// Layout
import {
    Flash
} from './Layout.styled'

/**
 * Flashbang module component
 * 
 * @version 0.1.1
 * @author DanielBGomez <contact@danielbgomez.com>
 */
class Flashbang extends React.Component {
    constructor(props){
        // Always call super first
        super(props)

        // Store appData
        this.windowId = this.props.windowId
        this.appData = this.props.appData

        // 
    }

    render(){
        return <Fragment>
            <DefaultThemeGlobals />
            <Flash />
        </Fragment>
    }

    setup(){
        // Get screens
        Overwolf.utils.getMonitorsList( monitors => {
            
        })
    }
}

// Prop types
Flashbang.propTypes = {
    // AppData
    appData: PropTypes.object.isRequired
}

// Exports
export default Flashbang
