import React, { useEffect} from 'react';
import { useState } from 'react';
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
  }

  useEffect(() => {
    loadTask();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={tasks} /></div>
      </main>
    </div>
  );
}

export default App;
