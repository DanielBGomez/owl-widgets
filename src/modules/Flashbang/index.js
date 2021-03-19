
// Animations
const Flash = keyframes`
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
const FlashBang = Styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    
    ${props => props.active && css`
        animation: ${Flash} 5s linear;
    `}
`