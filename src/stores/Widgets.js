// Initial state
export const initialState = {
    widgets: []
}

// Actions
export function registerMultipleWidgets(widgets){
    return {
        type: "REGISTER_MULTIPLE_WIDGETS",
        widgets
    }
}
export function registerWidget(widget){
    return {
        type: "REGISTER_WIDGET",
        widget
    }
}
export function unregisterWidget(uuid){
    return {
        type: "UNREGISTER_WIDGET",
        uuid
    }
}
export function enableWidget(uuid){
    return {
        type: "ENABLE_WIDGET",
        uuid
    }
}
export function disableWidget(uuid){
    return {
        type: "DISABLE_WIDGET",
        uuid
    }
}
export function toggleWidget(uuid){
    return {
        type: "TOGGLE_WIDGET",
        uuid
    }
}

// Getters
export const activeWidgets = state => state.widgets.filter(widget => widget.active)
export const disabledWidgets = state => state.widgets.filter(widget => !widget.active)

// Reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'REGISTER_MULTIPLE_WIDGETS':
            return {
                    ...state,
                    widgets: [
                        ...state.widgets,
                        ...action.widgets
                    ]
                }
        case 'REGISTER_WIDGET':
            // Append widget in state
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case 'UNREGISTER_WIDGET':
            // Filter widgets excluding the one provided (by uuid)
            return {
                ...state,
                widgets: state.widgets.filter( widget => widget.uuid != action.uuid )
            }
        case 'ENABLE_WIDGET':
            return {
                ...state,
                widgets: [
                    // Map widgets: if widget is the one provided (by uuid) set active as true
                    ...state.widgets.map(widget => widget.uuid == action.uuid ? { ...widget, active: true } : widget)
                ]
            }
        case 'DISABLE_WIDGET':
            return {
                ...state,
                widgets: [
                    // Map widgets: if widget is the one provided (by uuid) set active as true
                    ...state.widgets.map(widget => widget.uuid == action.uuid ? { ...widget, active: false } : widget)
                ]
            }
        case 'TOGGLE_WIDGET':
            return {
                ...state,
                widgets: [
                    // Map widgets: if widget is the one provided (by uuid) set active as true
                    ...state.widgets.map(widget => widget.uuid == action.uuid ? { ...widget, active: !widget.active } : widget)
                ]
            }
        default:
            return state
    }
}

export default reducer