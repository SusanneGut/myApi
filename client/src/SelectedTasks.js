import React from "react";

export default function SelectedTasks(props) {
  const { tasks } = props;

  const rows = tasks.map((task, idx) => (
    <tr key={idx}>
      <td>Task: {task.name}</td>
    </tr>
  ));

  return <div>{rows}</div>;
}
