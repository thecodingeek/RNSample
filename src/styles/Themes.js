import { StaticColors, } from "./Colors"

const LightTheme = {
    dark: false,
    colors: {
        primary: StaticColors.orange,
        background: StaticColors.white,
        card: StaticColors.white,
        text: StaticColors.black,
        border: StaticColors.black,
        notification: StaticColors.black,
    },
}

const DarkTheme = {
    dark: true,
    colors: {
        primary: StaticColors.orange,
        background: StaticColors.black,
        card: StaticColors.black,
        text: StaticColors.white,
        border: StaticColors.white,
        notification: StaticColors.white,
    },
}

export { LightTheme, DarkTheme };