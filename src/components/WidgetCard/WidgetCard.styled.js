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
import Checked from '@material-ui/icons/CheckBox'
import Unchecked from '@material-ui/icons/CheckBoxOutlineBlank'
import Wallpaper from '@material-ui/icons/Wallpaper'
import Settings from '@material-ui/icons/Settings'
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline'

// Elements
const Wrapper = Styled.div`
    width: 100%;
    display: flex;
    color: ${ colors.grayDark };
    background-color: ${ colors.grayDark_2 };
    padding: ${ spacing.noSpace } ${ spacing.noSpace } ${ spacing.noSpace } ${ spacing.s };

    cursor: ${ props => props.disabled ? 'not-allowed' : 'pointer' };
`

const CheckBoxComponent = ({ className, checked = false }) => (
    checked ? <Checked className={ className } fontSize="small" /> : <Unchecked className={ className } fontSize="small" />
)
const CheckBox = Styled( CheckBoxComponent )`
    flex-shrink: 0;
    margin: auto ${ spacing.xs } auto ${ spacing.noSpace };
    color: ${ props => props.checked ? colors.green : colors.grayLighten_5 };
`

const Image = Styled( ({ className, image }) => image ? <div className={ className } /> : <Wallpaper className={ className } style={{ fontSize: 40 }} /> )`
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    background-size: contain;
    background-repeat: no-repeat;
    color: ${ colors.grayLighten };
    background-image: url('${ props => props.image || '' }');
    margin: ${ spacing.xs } ${ spacing.xs } ${ spacing.xs } ${ spacing.noSpace }; 
`

const Texts = Styled.div`
    width: 100%;
    text-align: left;
    user-select: none;
    color: ${ colors.grayLighten_4 };
    margin: auto ${ spacing.noSpace };

    > * {
        margin: 0;
        width: 100%;
        text-align: inherit;
    }
    .name {
        font-size: 1rem;
        margin-bottom: ${ spacing.xxs };
    }
    .version {
        font-weight: 300;
        font-size: 0.75rem;
    }
`

const Button = `
    margin: 0;
    flex-shrink: 0;
    display: inline-flex;
    color: ${ colors.grayLighten_4 };
    padding: ${ spacing.noSpace } ${ spacing.m };
    cursor: ${ props => props.disabled ? 'not-allowed' : 'pointer' };
    transition: all 100ms linear;
`

const SettingsBtn = ({ className, onClick }) => <div onClick={ onClick } className={className}><Settings /></div>
const TestBtn = ({ className, onClick }) => <div onClick={ onClick } className={ className }><PlayCircleOutline /></div>

const SettingsButton = Styled( SettingsBtn )`
    ${ Button }
    margin-left: auto;

    ${ props => `
        ${ props.disabled ? `
            opacity: 0.2;
        ` : `
            &:hover,
            &:focus {
                background-color: ${ transparentize( 0.9, colors.white ) };
            }
        ` }
    `}
`
const TestButton = Styled( TestBtn )`
    ${ Button }
    color: ${ colors.white };
    background-color: ${ colors.main };

    ${ props => `
        ${ props.disabled ? `
            background-color: ${ colors.gray };
        ` : `
            &:hover,
            &:focus {
                background-color: ${ colors.mainLighten };
            }
        ` }
    ` }
`


// Exports
export {
    Wrapper,
    CheckBox,
    Image,
    Texts,
    SettingsButton,
    TestButton
}