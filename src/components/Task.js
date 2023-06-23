import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  //const [complete, setComplete] = useState(true);
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : 'task__item__toggle--setComplete';

  // const toggleButton = () => {
  //   console.log("the toggle has been TOGGLED");
  //   props.updateComplete(props.id);
  // };

  const toggleButton = () => {
    console.log('the toggle has been TOGGLED');
    props.onClickCallback(props.id);
  };

  // const deleteTask = () => {
  //   console.log("Task deleted successfully");
  //   props.updateDelete(props.id);
  // };

  const deleteTask = () => {
    console.log('Task deleted successfully');
    props.deleteTaskCallback(props.id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
      
        onClick={toggleButton}>
        {props.title}
      </button>
      <button onClick={deleteTask} className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,  
  // updateComplete: PropTypes.func,
  // updateDelete: PropTypes.func,
  onClickCallback: PropTypes.func,
  deleteTaskCallback: PropTypes.func
};
// put required back after implementing
export default Task;
