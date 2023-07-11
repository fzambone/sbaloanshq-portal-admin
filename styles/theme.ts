interface ISpacing {
    [key: number]: string;
}

interface IColors {
    dark_grey: string;
    gradient_green: string;
    light_grey: string;
    white: string;
    dark_green: string;
    off_white: string;
}

interface ITypography {
    fontFamily: string;
    body: string;
    h1: string;
    h2: string;
    h3: string;
}

interface IShadows {
    i: string;
}

interface ITheme {
    colors: IColors;
    typography: ITypography;
    spacing: ISpacing;
    shadows: IShadows;
}

const theme: ITheme = {
    colors: {
        dark_grey: "#4C4B4B",
        gradient_green: "",
        light_grey: "",
        white: "#FFFFFF",
        dark_green: "",
        off_white: ""
    },
    typography: {
        fontFamily: '"General Sans", sans-serif',
        body: '48px',
        h1: '32px',
        h2: '20px',
        h3: '18px'
    },
    spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px'
    },
    shadows: {
        i: '0px 1px 3px rgba(0, 0, 0, 0.2)'
    }

}

export default theme;