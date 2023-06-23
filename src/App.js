import React from 'react';
import { useState, useEffect} from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

function App() {
  const [tasks, setTasks] = useState([]);

  // Getting api calls from axios
  const loadTask = () => {
    axios
    .get('https://task-list-api-c17.onrender.com/tasks')
    .then((response) => {
      const initialTaskData = [];
      response.data.forEach((task) => {
        initialTaskData.push(task);
      });
      setTasks(initialTaskData);
    })
    .catch((error) => {
      console.log('le error', error);
    });
  };

  useEffect(() => {
    loadTask();
  }, []);

const toggleCompleteTask = (taskId) => {
  const newTasks = [];
  let completionStatus = 'mark_complete';
  for (const task of tasks) {
  // tasks.forEach((task) => {
    if (task.id === taskId) {
      task.isComplete = !task.isComplete;
      if (task.isComplete) {
        completionStatus = 'mark_complete';
      } else {
        completionStatus = 'mark_incomplete';
      }
    }
    newTasks.push(taskId);
  }
  axios
    .patch(`https://task-list-api-c17.onrender.com/tasks/${taskId}/${completionStatus}`)
    .then (() => {
      setTasks(newTasks);
    })
    .catch((error) => {
      console.log('le task is not posting properly', error);
    });
  };

  const deleteTask = (taskId) => {
    axios
      .delete(`https://task-list-api-c17.onrender.com/tasks/${taskId}`)
      .then(() => {
        const newTasks = [];
        for (const t of tasks) {
          const task = { ...t };
          if (taskId !== task.id) {
            newTasks.push(task);
          }
        }
        setTasks(newTasks);
      })
      .catch((error) => {
        console.log('le task is not deleting properly', error);
      });
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList 
            tasks={tasks} 
            onClickCallback={toggleCompleteTask}
            deleteTaskCallback={deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
