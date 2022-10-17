import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'

const StyledTabs = withStyles((theme) => ({
  root: {
    '& .MuiTabScrollButton-root:first-child': {
      backgroundColor: '#1f2c3885',
    },
    '& .MuiTabScrollButton-root:last-child': {
      backgroundColor: '#1f2c3885',
    },
    '& .Mui-selected': {
      backgroundColor: theme.colors.colorSTactive,
    },
  },
  indicator: {
    display: 'none',
  },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />)

const NavTabs = ({ onChange, value, children }) => {
  return (
    <StyledTabs
      value={value}
      onChange={onChange}
      textColor='inherit'
      scrollButtons='auto'
      variant='scrollable'
      aria-label='scrollable auto tabs'
    >
      {children}
    </StyledTabs>
  )
}

export default NavTabs
