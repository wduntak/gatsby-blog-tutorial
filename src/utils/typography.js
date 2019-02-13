import Typography from "typography"
// import twinPeaksTheme from "typography-theme-twin-peaks"

// const typography = new Typography(twinPeaksTheme)

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.666,
    headerFontFamily: [
        "Avenir Next",
        "Helvetica Neue"
    ],
    bodyFontFamily: [
        "Georgia",
        "serif"
    ]
})
export default typography