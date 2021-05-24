// Modules
import { connect } from 'react-redux'

// Component
import Dashboard from './Dashboard'

// Stores
import { actions as StoreActions } from '../../stores'

// Data
const mapStateToProps = state => ({
    activeWidgets: StoreActions.widgets.active( state.widgets ),
    disabledWidgets: StoreActions.widgets.disabled( state.widgets ),
    widgets: state.widgets.elements
})

// Methods
const mapDispatchToProps = dispatch => ({
    // Widgets
    registerMultipleWidgets: widgets => dispatch( StoreActions.widgets.registerMultiple(widgets) ),
    registerWidget: widget => dispatch( StoreActions.widgets.register(widget) ),
    unregisterWidget: widget => dispatch( StoreActions.widgets.unregister(widget) ),
    enableWidget: uuid => dispatch( StoreActions.widgets.enable(uuid) ),
    disableWidget: uuid => dispatch( StoreActions.widgets.disable(uuid) ),
    toggleWidget: uuid => dispatch( StoreActions.widgets.toggle(uuid) ),

    // Notifications
    createNotification: notification => dispatch( StoreActions.notifications.create(notification) ),

    // Modal
    setupModal: values => dispatch( StoreActions.modal.update(values) )
})

// Container
const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( Dashboard )

// Export
export default DashboardContainer
