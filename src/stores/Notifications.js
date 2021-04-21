// Modules
import { v4 as uuidv4 } from 'uuid'

// Actions
export const NAMESPACE = 'notifications/'
export const CREATE = `${NAMESPACE}CREATE`
export const MARK_AS_READ = `${NAMESPACE}MARK_AS_READ`
export const MARK_ALL_AS_READ = `${NAMESPACE}MARK_ALL_AS_READ`

// Initial state
export const initialState = {
    elements: [],
    TYPES: [
        'verbose',
        'info',
        'warning',
        'error',
        'success'
    ]
}

// Actions
export function create(notification){
    return {
        type: CREATE,
        notification
    }
}
export function markAsRead(uuid){
    return {
        type: MARK_AS_READ,
        uuid
    }
}
export function markAllAsRead(){
    return {
        type: MARK_ALL_AS_READ,
    }
}

// Getters
export const unreadNotifications = state => state.elements.filter(notification => !notification.read)

// Reducer
const reducer = (state = initialState, action) => {
    // Actions
    switch(action.type){
        case CREATE:
            // Spread notification
            const {
                uuid = uuidv4(),
                slug = 'NOTIFICATION',
                type = 'verbose',
                msg = '',
                data = {}, 
                read = false
            } = action.notification

            // Append notification in state, validating type
            return {
                ...state,
                elements: [
                    ...state.elements,
                    {
                        uuid,
                        slug,
                        type: state.TYPES.includes(type) ? type : 'verbose',
                        msg,
                        data,
                        read
                    }
                ]
            }
        case MARK_AS_READ:
            return {
                ...state,
                elements: [
                    // Map notifications: if notification is the one provided (by uuid) set read as true
                    ...state.elements.map(notification => notification.uuid == action.uuid ? { ...notification, read: true } : notification)
                ]
            }
        case MARK_ALL_AS_READ:
            return {
                ...state,
                elements: [
                    // Map notifications, setting read as true
                    ...state.elements.map(notification => {
                        notification.read = true
                        return notification
                    })
                ]
            }
        default:
            return state
    }
}

export default reducer