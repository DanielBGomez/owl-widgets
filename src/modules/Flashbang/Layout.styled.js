// Modules
import Styled, { keyframes } from "styled-components"

// Animations
const FlashAnimation = keyframes`
    0% {
        opacity: 0;
    }
    5%,
    60% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

// Components
export const Flash = Styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    
    ${props => props.active && css`
        animation: ${FlashAnimation} 5s linear;
    `}
`