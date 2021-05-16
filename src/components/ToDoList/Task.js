import React from 'react';
import { makeStyles, Paper, Typography} from '@material-ui/core'
import IconButton from "@material-ui/core/IconButton";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles({
   paper: {
     margin: "auto",
     padding: 10,
     display: "flex",
     alignItems: "center",
     justifyContent: "space-between",
     backgroundColor: '#fafafa',
     marginTop: 15,
   },
 })

const Task = ({text}) => {
    const classes = useStyles();
    return(
      <div>
        <Paper variant="outlined" className={classes.paper}>
            <Typography color="textSecondary">
              {text}
            </Typography>
            <IconButton
                color="secondary"
                aria-label="Delete"
              >
                <Delete fontSize="small" />
              </IconButton>
        </Paper>
      </div>
    )
  }

export default Task