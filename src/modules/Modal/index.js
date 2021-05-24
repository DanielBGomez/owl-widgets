// Component
import Modal from './Modal'
import { connect } from 'react-redux'

// Stores
import { actions as StoreActions } from '../../stores'

// Data
const mapStateToProps = state => ({
    type: state.modal.type,
    message: state.modal.message,
    confirmLabel: state.modal.confirmLabel,
    cancelLabel: state.modal.cancelLabel,
    buttonLabel: state.modal.buttonLabel,
    buttonType: state.modal.buttonType,
    onConfirm: state.modal.onConfirm,
    onCancel: state.modal.onCancel
})

// Methods
const mapDispatchToProps = dispatch => ({
    reset: () => dispatch( StoreActions.modal.reset() )
})

// Container
const ModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( Modal )

// Export
export default ModalContainer