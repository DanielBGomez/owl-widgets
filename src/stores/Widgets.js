// Actions
export const NAMESPACE = 'widgets/'
export const REGISTER_MULTIPLE = `${NAMESPACE}REGISTER_MULTIPLE`
export const REGISTER = `${NAMESPACE}REGISTER`
export const UNREGISTER = `${NAMESPACE}UNREGISTER`
export const ENABLE = `${NAMESPACE}ENABLE`
export const DISABLE = `${NAMESPACE}DISABLE`
export const TOGGLE = `${NAMESPACE}TOGGLE`

// Initial state
export const initialState = {
    elements: []
}

// Methods
export function registerMultiple(elements){
    return {
        type: REGISTER_MULTIPLE,
        elements
    }
}
export function register(widget){
    return {
        type: REGISTER,
        widget
    }
}
export function unregister(uuid){
    return {
        type: UNREGISTER,
        uuid
    }
}
export function enable(uuid){
    return {
        type: ENABLE,
        uuid
    }
}
export function disable(uuid){
    return {
        type: DISABLE,
        uuid
    }
}
export function toggle(uuid){
    return {
        type: TOGGLE,
        uuid
    }
}

// Getters
export const active = state => state.elements.filter(widget => widget.active)
export const disabled = state => state.elements.filter(widget => !widget.active)

// Reducer
const reducer = (state = initialState, action) => {
    // Widgets' uuid list
    const WIDGETS = state.elements.map(widget => widget.uuid)

    // Actions
    switch(action.type){
        case REGISTER_MULTIPLE:
            return {
                    ...state,
                    elements: [
                        ...state.elements,
                        ...action.elements.filter( widget => !WIDGETS.includes(widget.uuid) )
                    ]
                }
        case REGISTER:
            // Ignore if already exists a widget with that uuid
            if(WIDGETS.includes( action.widget.uuid )) return state

            // Append widget in state
            return {
                ...state,
                widgets: [
                    ...state.elements,
                    action.widget
                ]
            }
        case UNREGISTER:
            // Filter widgets excluding the one provided (by uuid)
            return {
                ...state,
                widgets: state.elements.filter( widget => widget.uuid != action.uuid )
            }
        case ENABLE:
            return {
                ...state,
                widgets: [
                    // Map widgets: if widget is the one provided (by uuid) set active as true
                    ...state.elements.map(widget => widget.uuid == action.uuid ? { ...widget, active: true } : widget)
                ]
            }
        case DISABLE:
            return {
                ...state,
                widgets: [
                    // Map widgets: if widget is the one provided (by uuid) set active as true
                    ...state.elements.map(widget => widget.uuid == action.uuid ? { ...widget, active: false } : widget)
                ]
            }
        case TOGGLE:
            return {
                ...state,
                widgets: [
                    // Map widgets: if widget is the one provided (by uuid) set active as true
                    ...state.elements.map(widget => widget.uuid == action.uuid ? { ...widget, active: !widget.active } : widget)
                ]
            }
        default:
            return state
    }
}

export default reducer