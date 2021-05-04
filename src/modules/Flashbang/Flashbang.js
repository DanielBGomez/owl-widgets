// Modules
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Local modules
import Configurations from '../../methods/Configurations'
import { DefaultThemeGlobals } from '../../themes'
import Overwolf from '../../docs/overwolf'

// Layout
import {
    Flash
} from './Layout.styled'

// Configs
import CONFIG from './config.default'

/**
 * Flashbang module component
 * 
 * @version 0.2.2
 * @author DanielBGomez <contact@danielbgomez.com>
 */
class Flashbang extends React.Component {
    constructor(props){
        // Always call super first
        super(props)

        // State
        this.state = {
            active: false,

            ...CONFIG.values
        }

        // Store appData
        this.windowId = this.props.windowId
        this.appData = this.props.appData

        // Init config
        this._configs = Configurations( 'widget_' + CONFIG.uuid, CONFIG )
        this._configs.sync()
            .then(() => {
                // Init widget actions object in appData
                this.appData.widgetsActions[ CONFIG.uuid ] = {}

                // Update state and setup
                this.setState(this._configs.values, () => this.setup())
            })
    }

    render(){
        return <Fragment>
            <DefaultThemeGlobals transparent={true} />
            <Flash duration={this.state.duration} active={this.state.active} />
        </Fragment>
    }
    activate(){
        // Exit if already active
        if(this.state.active) return;
        
        // Update state
        this.setState({ active: true }, () => {
            // Remove active state on end
            setTimeout(() => this.setState({ active: false }), parseInt( this.state.duration.replace('ms', '').replace('s', '000') ))
        })
    }
    setup(){
        return new Promise(async (resolve, reject) => {
            try {
                // Move to the main screen
                await new Promise((resolve, reject) => Overwolf.windows.changePosition( this.windowId, 0, 0, ({ success, error }) => success ? resolve() : reject(error)))
                // Maximize windows
                await new Promise((resolve, reject) => Overwolf.windows.maximize( this.windowId, ({ success }) => success ? resolve() : reject()))
                // Set top most
                await new Promise((resolve, reject) => Overwolf.windows.setTopmost( this.windowId, true, ({ success, error }) => success ? resolve() : reject(error) ))
                // Register widget actions to AppData
                this.appData.widgetsActions[ CONFIG.uuid ].default = () => this.activate()
                return resolve()

            } catch(err){
                // Exit if failed
                reject(err)
            }
        })
    }
}

// Prop types
Flashbang.propTypes = {
    // AppData
    appData: PropTypes.object.isRequired,
    windowId: PropTypes.string.isRequired
}

// Exports
export default Flashbang
