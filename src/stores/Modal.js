// Actions
export const NAMESPACE = 'modal/'
export const CHANGE_TYPE = `${NAMESPACE}CHANGE_TYPE`
export const CHANGE_MESSAGE = `${NAMESPACE}CHANGE_MESSAGE`
export const SETUP_CONFIRM_LISTENER = `${NAMESPACE}SETUP_CONFIRM_LISTENER`
export const SETUP_CANCEL_LISTENER = `${NAMESPACE}SETUP_CANCEL_LISTENER`
export const UPDATE = `${NAMESPACE}UPDATE`
export const RESET = `${NAMESPACE}RESET`
export const OPENED = `${NAMESPACE}OPENED`

// Consts
export const TYPES = [
    'alert',
    'choice'
]

// Initial state
export const initialState = {
    type: "alert",
    message: "",
    buttonType: "secondary",
    buttonLabel: "Close",
    confirmLabel: "Confirm",
    cancelLabel: "Cancel",
    onConfirm: e => e,
    onCancel: e => e,
    onClose: e => e,
    opened: false
}

// Methods
export function changeType(value){
    return {
        type: CHANGE_TYPE,
        value
    }
}
export function changeMessage(message){
    return {
        type: CHANGE_MESSAGE,
        message
    }
}
export function onConfirm(listener){
    return {
        type: SETUP_CONFIRM_LISTENER,
        listener
    }
}
export function onCancel(listener){
    return {
        type: SETUP_CANCEL_LISTENER,
        listener
    }
}
export function update(values){
    return {
        type: UPDATE,
        values
    }
}
export function reset(){
    return {
        type: RESET
    }
}
export function updateOpenedDate(opened){
    return {
        type: OPENED,
        opened
    }
}

// Reducer
const reducer = (state = initialState, action) => {
    // Actions
    switch(action.type){
        case CHANGE_TYPE:
            return {
                    ...state,
                    type: TYPES.includes(action.value) ? action.value : TYPES[0]
                }
        case CHANGE_MESSAGE:
            return {
                ...state,
                message: action.message
            }
        case SETUP_CONFIRM_LISTENER:
            return {
                ...state,
                onConfirm: state.listener
            }
        case SETUP_CANCEL_LISTENER:
            return {
                ...state,
                onCancel: state.listener
            }
        case UPDATE:
            return {
                ...state,
                ...action.values
            }
        case RESET:
            return initialState
        case OPENED:
            return {
                ...state,
                opened: action.opened
            }
        default:
            return state
    }
}

// Exports
export default reducer