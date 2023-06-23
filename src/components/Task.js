import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const [complete, setComplete] = useState(isComplete);
  const buttonClass = complete ? 'tasks__item__toggle--completed' : 'task__item__toggle--setComplete';

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
      <button>
        className={`tasks__item__toggle ${buttonClass}`}
        {/* onClick={() => setComplete(!complete)} */}
        onClick={toggleButton}
        {props.title}
      </button>
      <button className="tasks__item__remove button" onClick={deleteTask}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,  
  // updateComplete: PropTypes.func,
  // updateDelete: PropTypes.func,
  onClickCallback: PropTypes.func.isRequired,
  deleteTaskCallback: PropTypes.func.isRequired
};

export default Task;
