import { makeStyles } from '@mui/styles'

import { Theme } from 'theme'

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    position: 'relative',
    display: 'inline-flex',
  },
  label: {
    flex: 1,
  },
  inputWrapper: {
    overflow: 'hidden',
    width: '2em',
    height: '2em',
    borderRadius: '50%',
    boxShadow: '1px 1px 3px 0px grey',
    margin: '1em',
  },
  input: {
    padding: '0',
    width: '150%',
    height: '150%',
    margin: '-25%',
  },
  inputOld: {
    '&[type=color]': {
      position: 'absolute',
      // overflow: 'hidden',
      right: '-8px',
      top: '-8px',
      width: '56px',
      height: '56px',
      border: 'none',
      borderRadius: '50%',
      '&::-webkit-color-swatch-wrapper': {
        padding: 0,
        overflow: 'hidden',
      },
      '&::-webkit-color-swatch': {
        border: 'solid 1px #000' /*change color of the swatch border here*/,
        borderRadius: '40px',
        overflow: 'hidden',
      },
    },
  },
}))

export default useStyles
