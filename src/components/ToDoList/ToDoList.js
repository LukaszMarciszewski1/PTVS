import React, { useState } from 'react';
import { Container, Grid} from '@material-ui/core'

import AddTaskForm from './AddTaskForm.js';
import TaskList from './TaskList.js';

const ToDoList = () => {
  const [tasks, setTasks] = useState([])
  const [inputText, setInputText] = useState('')

    return ( 
      <Container>
        <Grid 
          container spacing={3}
          justify="center"
        >
          <Grid item xs={12} md={12} lg={8}>
            <AddTaskForm 
              inputText={inputText} 
              tasks={tasks} 
              setTasks={setTasks} 
              setInputText={setInputText}/>
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <TaskList tasks={tasks}/>
          </Grid>
        </Grid>
      </Container>
    );
}
 
export default ToDoList;