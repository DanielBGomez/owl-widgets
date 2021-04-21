// Modules
import { combineReducers } from 'redux'

// Stores
import NotificationsReducer, * as NotificationsActions from './Notifications'
import WidgetsReducer, * as WidgetsActions from './Widgets'

// Export
export const actions = {
    notifications: NotificationsActions,
    widgets: WidgetsActions
}

// Export
export default combineReducers({
    notifications: NotificationsReducer,
    widgets: WidgetsReducer
})