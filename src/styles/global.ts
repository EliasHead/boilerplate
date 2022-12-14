import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    /* a cada 1rem será considera 10px */
    fontSize: '62.5%',
  },

  body: {
    // backgroundColor: '$gray900',
    height: '100vh',
    // color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
})
