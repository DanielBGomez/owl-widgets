// Modules
import React from 'react'
import Styled from 'styled-components'

// Theme
import {
    colors,
    spacing
} from '../../themes'

// Icons
import Checked from '@material-ui/icons/CheckBox'
import Unchecked from '@material-ui/icons/CheckBoxOutlineBlank'

// Elements
const Wrapper = Styled.div`
    width: 100%;
    display: flex;
    color: ${ colors.grayDark };
    background-color: ${ colors.grayDark_2 };
    padding: ${ spacing.s } ${ spacing.noSpace } ${ spacing.s } ${ spacing.s };

    cursor: ${ props => props.disabled ? 'not-allowed' : 'pointer' };
`

const CheckBoxComponent = ({ className, checked = false }) => (
    checked ? <Checked className={ className } fontSize="small" /> : <Unchecked className={ className } fontSize="small" />
)
const CheckBox = Styled( CheckBoxComponent )`
    margin: auto ${ spacing.xs } auto ${ spacing.noSpace };
    color: ${ props => props.checked ? colors.green : colors.grayLighten_5 };
`

const Image = Styled.div`
    width: 40px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    margin: auto ${ spacing.xs } auto ${ spacing.noSpace }; 
    background-image: url('${ props => props.image || '' }');
`

const Texts = Styled.div`
    width: 100%;
    text-align: left;
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

// Exports
export {
    Wrapper,
    CheckBox,
    Image,
    Texts
}