// Modules
import { createStore } from 'redux'
import { connect } from 'react-redux'

// Module
import Dashboard from './Dashboard'

// Stores
import WidgetsReducer, * as Widgets from '../../stores/Widgets'
export const reducer = WidgetsReducer

// Data
const mapStateToProps = state => {
    const {
        activeWidgets,
        disabledWidgets
    } = Widgets

    // Props
    return {
        activeWidgets: activeWidgets(state),
        disabledWidgets: disabledWidgets(state),
        widgets: state.widgets
    }
}
// Methods
const mapDispatchToProps = dispatch => ({
    registerMultipleWidgets: widgets => dispatch( Widgets.registerMultipleWidgets(widgets) ),
    registerWidget: widget => dispatch( Widgets.registerWidget(widget) ),
    unregisterWidget: widget => dispatch( Widgets.unregisterWidget(widget) ),
    enableWidget: uuid => dispatch( Widgets.enableWidget(uuid) ),
    disableWidget: uuid => dispatch( Widgets.disableWidget(uuid) ),
    toggleWidget: uuid => dispatch( Widgets.toggleWidget(uuid) ),
})

// Container
const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( Dashboard )

// Export
export default DashboardContainer
