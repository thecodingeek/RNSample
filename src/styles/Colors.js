const StaticColors = {
    white: '#FFFFFF',
    black: '#000000',
    orange: '#f4511e',
    orangeLight: '#ff844c',
    orangeDark: '#d13302',
    introSliderOne: '#febe29',
    introSliderTwo: '#22bcb5',
    introSliderThree: '#2887C8',
    lightGrey: '#D3D3D3',
    darkGrey: '#808080',
    red: '#FF0000',
}

const LightColors = {
    backgroundColor: StaticColors.white,
    foregroundColor: StaticColors.orange,
    textColor: StaticColors.black,
    reverseTextColor: StaticColors.white,
    lightTextColor: StaticColors.lightGrey,
    darkTextColor: StaticColors.darkGrey,
}

const DarkColors = {
    backgroundColor: StaticColors.black,
    foregroundColor: StaticColors.orange,
    textColor: StaticColors.white,
    reverseTextColor: StaticColors.black,
    lightTextColor: StaticColors.lightGrey,
    darkTextColor: StaticColors.darkGrey,
}

const Colors = {
    staticColors: StaticColors,
    light: LightColors,
    dark: DarkColors,
}

export { StaticColors, LightColors, DarkColors, };
export default Colors;