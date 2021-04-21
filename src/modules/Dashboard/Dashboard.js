// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Local modules
import { DefaultThemeGlobals } from '../../themes'
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
 * @version 0.5.0
 * @author DanielBGomez <contact@danielbgomez.com>
 */
class Dashboard extends React.Component {
    constructor(props){
        // Always call super first
        super(props)

        // Store appData
        this.windowId = this.props.windowId
        this.appData = this.props.appData

        // Register widgets
        this.registerWidgets(this.appData.widgets)
    }

    render(){
        return <React.Fragment>
            <DefaultThemeGlobals />
            <WindowHeader windowId={ this.windowId } />
            <WindowBody>
                <SectionTitle>Widgets</SectionTitle>
                { this.props.widgets.map(widget => <WidgetCard key={ widget.uuid } {...widget} { ...this.widgetActions( widget ) } />) }
            </WindowBody>
        </React.Fragment>
    }
    /**
     * Register widgets by restoring their windows, logging errors as notifications.
     * 
     * @param {Array<object>} widgets 
     */
    registerWidgets(widgets){
        // Loop widgets
        Promise.all( widgets.map(widget => new Promise(resolve => {
                // Widget window exists?
                const window = this.appData.windows[widget.window]
                if( !window ) {
                    // Disable widget
                    widget.disabled = true
                    // Log error
                    this.props.createNotification({
                        type: "error",
                        slug: "WIDGET_WINDOW_NOT_FOUND",
                        msg: `The window for "${widget.name}" doesn't exists`,
                        data: {
                            widget
                        }
                    })
                        
                    // Resolve updated widget
                    resolve( widget )
                } else {

                    // Open window
                    Overwolf.windows.restore( window, ({ success }) => {
                        // Window restored?
                        if(!success){
                            // Disable widget
                            widget.disabled = true 
                            // Log error
                            this.props.createNotification({
                                type: "error",
                                slug: "WIDGET_WINDOW_RESTORE_ERROR",
                                msg: `Restoring "${widget.name}" window failed`,
                                data: {
                                    window, 
                                    widget
                                }
                            })
                        }
                        // Resolve updated widget
                        resolve(widget)
                    })
                }
            }))).then(widgets => {
                // Register in store
                this.props.registerMultipleWidgets(widgets)
            })
    }
    /**
     * Create an object with the widget's actions from props functions
     * 
     * @param {object} widget   Widget data 
     * @returns Widget actions object
     */
    widgetActions(widget){
        return {
            enableWidget: () => this.props.enableWidget( widget.uuid ),
            disableWidget: () => this.props.disableWidget( widget.uuid ),
            toggleWidget: () => this.props.toggleWidget( widget.uuid ),
            action: () => ((this.appData.widgetsActions[widget.uuid] || {}).default || (e => e))()
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
    toggleWidget: PropTypes.func.isRequired,

    createNotification: PropTypes.func.isRequired
}

// Defaults
Dashboard.defaultProprs = {
    widgets: [],
    activeWidgets: [],
    disabledWidgets: []
}

// Exports
export default Dashboard
