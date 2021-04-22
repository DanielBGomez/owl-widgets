// Modules
import React from 'react'
import Styled from 'styled-components'
import { transparentize } from 'polished'

// Theme
import {
    colors,
    spacing
} from '../../themes'

// Icons
import RemoveIcon from '@material-ui/icons/Remove'
import CloseIcon from '@material-ui/icons/Close'

// Elements
const Wrapper = Styled.div`
    width: 100%;
    display: flex;
    height: ${ spacing.xl };
    color: ${ colors.white };
    background-color: ${ colors.grayDark_5 };
`

const Icon = Styled.div`
    width: 20px;
    height: 20px;
    background-size: contain;
    margin: auto ${ spacing.s };
    background-repeat: no-repeat;
    background-image: url('/assets/icon/favicon.png');
`

const Title = Styled.div`
    text-align: left;
    user-select: none;
    font-size: 0.75rem;
    color: ${ colors.grayLighten_3 };
    margin: auto auto auto ${ spacing.noSpace };
`

const Controls = Styled.div`
    height: 100%;
    margin-left: auto;
    display: inline-flex;
    margin-right: ${ spacing.noSpace };
`

const Button = `
    margin: 0;
    height: 100%;
    cursor: pointer;
    align-items: center;
    display: inline-flex;
    width: ${ spacing.xxl };
    justify-contents: center;
    transition: all 100ms linear;

    &:hover {
        background-color: ${transparentize(0.9, colors.white)};
    }
`
const Minimize = Styled( props => <div { ...props }><RemoveIcon fontSize="small" /></div> )`
    ${ Button }
`
const Close = Styled( props => <div { ...props }><CloseIcon fontSize="small" /></div> )`
    ${ Button }

    &:hover {
        background-color: ${ colors.red }
    }
`


// Exports
export {
    Wrapper,
    Icon,
    Title,
    Controls,
    Button,
    Minimize,
    Close
}