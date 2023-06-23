import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';


const TaskList = ({ tasks, onClickCallback, deleteTaskCallback }) => {

  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          onClickCallback={onClickCallback}
          deleteTaskCallback={deleteTaskCallback}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onClickCallback: PropTypes.func,
  deleteTaskCallback: PropTypes.func
};

export default TaskList;
