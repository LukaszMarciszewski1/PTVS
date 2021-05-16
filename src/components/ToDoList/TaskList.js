import React from 'react';
import { makeStyles, Paper, Avatar, Card, CardHeader, CardContent} from '@material-ui/core'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Task from './Task.js';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: '#2196f3',
    width: 50,
    height: 50,
  },
  containerTasks: {
    padding: 20,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300
  }
})

const TaskList = ({tasks}) => {
    const classes = useStyles();
    return(
      <Card>
        <CardContent>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar} variant='square'>
                <PlaylistAddIcon/>
              </Avatar>
            }
            title="TO-DO LIST"
          />
          <Paper variant="outlined" className={classes.containerTasks}>
             {tasks.map(task => <Task key={task.id} text={task.text} completed={task.completed}/>)}
          </Paper>
        </CardContent>
      </Card>
    )
  }

export default TaskList  