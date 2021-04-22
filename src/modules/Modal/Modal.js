// Modules
import React, { Component, Fragment } from 'react'

// Theme
import { DefaultThemeGlobals, fonts, spacing } from '../../themes'
const { Text } = fonts

// Components
import WindowHeader from '../../components/WindowHeader'
import WindowBody from '../../components/WindowBody'
import Button from '../../components/Button'

// Elements
import { ButtonsWrapper } from './Layout.styled'

/**
 * Modal module component
 * 
 * @version 0.1.0
 * @author DanielBGomez <contact@danielbgomez.com>
 */
class Modal extends Component {
    constructor(props){
        // Always call super
        super(props)
    }
    /**
     * The render function
     */
    render(){
        return <Fragment>
            <DefaultThemeGlobals fitContent />
            <WindowHeader hideMinimize />
            <WindowBody fitContent>
                <Text>Sum text</Text>
                <ButtonsWrapper butotns={2} style={{ marginTop: spacing.l }}>
                    <Button type="hollow" />
                    <Button disabled />
                </ButtonsWrapper>
            </WindowBody>
        </Fragment>
    }
}

// Export
export default Modal