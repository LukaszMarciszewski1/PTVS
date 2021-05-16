import React, { useState } from 'react';
import { makeStyles, Avatar, Card, TextField, CardHeader, CardContent, Button} from '@material-ui/core'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  form: {
       display: 'flex',
  },
  field: {
     marginRight: 20
  },
  avatar: {
    backgroundColor: '#2196f3',
    width: 50,
    height: 50,
  },

})

const AddTaskForm = ({ inputText, setInputText, tasks, setTasks }) => {
    const classes = useStyles();
    const [inputTextError, setTaskInputError] = useState(false)

    const handleInputText = (e) => {
      setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if(inputText === ''){
        setTaskInputError(true)
      }
      else{
        setTaskInputError(false)
        const task = {
          text:inputText, 
          completed: false, 
          id: Math.floor(Math.random() * 1000)}
  
        setTasks([...tasks, task])
        setInputText('')
      }
    }

     return (
      <Card>
        <CardContent>
          <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar} variant='square'>
              <PlaylistAddIcon/>
            </Avatar>
          }
          title="ADD ITEM"
        />
        <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.form}>
          <TextField 
            className={classes.field}
            variant="outlined"
            label="What do you want to do ?" 
            color='primary'
            value={inputText}
            fullWidth
            required
            onChange={handleInputText}
            error={inputTextError}
          />
          <Button
            variant="contained" 
            color="primary" 
            type='submit'
          > 
            <AddIcon />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default AddTaskForm