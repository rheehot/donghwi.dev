import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Noto Sans KR", "sans-serif"],
  bodyFontFamily: ["Noto Sans KR", "sans-serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

console.log(typography.toString())

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
