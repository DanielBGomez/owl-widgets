// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Local modules
import { DefaultThemeGlobals } from '../../themes'

// Docs
import Overwolf from '../../docs/overwolf'

// Layout
import {
    WindowBody,
    SectionTitle
} from './Layout.styled'

// Components
import WidgetCard, { WidgetCardShape } from '../../components/WidgetCard'
import WindowHeader from '../../components/WindowHeader'

/**
 * Dashboard module component
 * 
 * @version 0.3.0
 * @author DanielBGomez <contact@danielbgomez.com>
 */
class Dashboard extends React.Component {
    constructor(props){
        // Always call super first
        super(props)

        // Store appData
        this.appData = this.props.appData


        // Update state
        this.fetchWidgets()
    }
    minimize( callback ){
        Overwolf.windows.minimize(  )
    }

    render(){
        return <React.Fragment>
            <DefaultThemeGlobals />
            <WindowHeader />
            <WindowBody>
                <SectionTitle>Widgets</SectionTitle>
                { this.props.widgets.map(widget => <WidgetCard key={ widget.uuid } {...widget} { ...this.widgetActions( widget ) } />) }
            </WindowBody>
        </React.Fragment>
    }
    /**
     * Fetch widgets from WS and register in store
     * 
     * @todo WS
     */
    fetchWidgets(){
        // Hardcoded
        const Widgets = [
            {
                uuid: "95e00420-93ff-458d-b887-587950da96e7",
                active: true,
                disabled: false,
                name: "Flashbang",
                version: "0.1.0",
                image: "/assets/icon/app/icon.png"
            }
        ]

        // Register widgets
        this.props.registerMultipleWidgets(Widgets)
    }
    widgetActions(widget){
        return {
            enableWidget: () => this.props.enableWidget( widget.uuid ),
            disableWidget: () => this.props.disableWidget( widget.uuid ),
            toggleWidget: () => this.props.toggleWidget( widget.uuid )
        }
    }
}

// Prop types
Dashboard.propTypes = {
    // AppData
    appData: PropTypes.object.isRequired,

    // Elements
    widgets: PropTypes.arrayOf( PropTypes.shape( WidgetCardShape ) ),
    activeWidgets: PropTypes.arrayOf( PropTypes.shape( WidgetCardShape ) ),
    disabledWidgets: PropTypes.arrayOf( PropTypes.shape( WidgetCardShape ) ),

    // Store functions
    registerWidget: PropTypes.func.isRequired,
    unregisterWidget: PropTypes.func.isRequired,
    registerMultipleWidgets: PropTypes.func.isRequired,
    
    enableWidget: PropTypes.func.isRequired,
    disableWidget: PropTypes.func.isRequired,
    toggleWidget: PropTypes.func.isRequired
}

// Defaults
Dashboard.defaultProprs = {
    widgets: [],
    activeWidgets: [],
    disabledWidgets: []
}

// Exports
export default Dashboard
