import React from "react";

export default function SelectedTasks(props) {
  const { tasks } = props;

  return (
    <table className="ui selectable structured large table">
      <thead>
        <tr>
          <th colSpan="5">
            <h3>Selected tasks</h3>
          </th>
        </tr>
        <tr>
          <th className="eight wide">Description</th>
          <th>Task</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, idx) => (
          <tr key={idx} onClick={() => props.onTaskClick(idx)}>
            <td>Task: {task.name}</td>
            <td>Status: {task.status}</td>
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}
