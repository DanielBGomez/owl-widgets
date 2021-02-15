// Modules
import ColorScale from 'color-scale'

// Common colors
const black = '#262626'
const betterware = '#1EAEC7'
const secondary = '#004f84'

// Exports
export default {
    // Colors
    ...scaleColor('main', betterware),
    ...scaleColor('blue', betterware),
    ...scaleColor('darkBlue', '#004f84'),
    ...scaleColor('green', secondary),
    ...scaleColor('secondary', secondary),
    ...scaleColor('red', '#F03A47'),
    ...scaleColor('yellow', '#f9d057'),
    ...scaleColor('orange', '#E57A44'),
    ...scaleColor('pink', '#FA387F'),

    // Neutral
    black,
    white: "#FFFFFF",
    transparent: 'transparent',

    // Grays
    grayDark_6: black,
    grayDark_5: '#22242C',
    grayDark_4: '#2B303B',
    grayDark_3: '#363C49',
    grayDark_2: '#404653',
    grayDark: '#626C80',
    gray: '#80889C',
    grayLighten: '#A6ADBF',
    grayLighten_2: '#C4C9D4',
    grayLighten_3: '#E3E4EA',
    grayLighten_4: '#F1F2F4',
    grayLighten_5: '#FAFBFC'
}

/**
 * 
 * @param {String} name         Color name 
 * @param {String} color        Hex color
 */
function scaleColor(name, color){
    // Create color scale
    const cs = ColorScale({ color, variance: 10 })

    // Return object
    return {
        [`${name}Darken_8`]: cs(-8),
        [`${name}Darken_7`]: cs(-7),
        [`${name}Darken_6`]: cs(-6),
        [`${name}Darken_5`]: cs(-5),
        [`${name}Darken_5`]: cs(-4),
        [`${name}Darken_3`]: cs(-3),
        [`${name}Darken_2`]: cs(-2),
        [`${name}Darken`]: cs(-1),
        [name]: cs(0),
        [`${name}Lighten`]: cs(1),
        [`${name}Lighten_2`]: cs(2),
        [`${name}Lighten_3`]: cs(3),
        [`${name}Lighten_4`]: cs(4),
        [`${name}Lighten_5`]: cs(5),
        [`${name}Lighten_6`]: cs(6),
        [`${name}Lighten_7`]: cs(7),
        [`${name}Lighten_8`]: cs(8),
    }
}