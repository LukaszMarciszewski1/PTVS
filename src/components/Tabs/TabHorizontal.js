import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'

const StyledTab = withStyles((theme) => ({
  root: {
    padding: '20px 8px',
    textTransform: 'none',
    letterSpacing: 1,
    fontWeight: theme.typography.fontWeightLight,
    fontSize: theme.typography.pxToRem(16),
    color: theme.colors.lightGrey,
    transition: '.2s',
    '@media (max-width: 550px)': {
      padding: 16,
    },
    '&:hover': {
      color: theme.colors.white,
      backgroundColor: theme.colors.colorSTactive,
    },
  },
}))((props) => <Tab disableRipple {...props} />)

export default StyledTab
