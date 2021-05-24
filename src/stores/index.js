// Modules
import { combineReducers } from 'redux'

// Stores
import NotificationsReducer, * as NotificationsActions from './Notifications'
import WidgetsReducer, * as WidgetsActions from './Widgets'
import ModalReducer, * as ModalActions from './Modal'

// Export
export const actions = {
    notifications: NotificationsActions,
    widgets: WidgetsActions,
    modal: ModalActions
}

// Export
export default combineReducers({
    notifications: NotificationsReducer,
    widgets: WidgetsReducer,
    modal: ModalReducer
})