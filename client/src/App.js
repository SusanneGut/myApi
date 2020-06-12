import React, { Component } from "react";
import TaskSearch from "./TaskSearch";
import SelectedTasks from "./SelectedTasks";

class App extends Component {
  state = {
    selectedTasks: []
  };

  removeTask = itemIndex => {
    const filterTasks = this.state.selectedTasks.filter(
      (item, idx) => itemIndex !== idx
    );
    this.setState({ selectedTasks: filterTasks });
  };

  addTask = task => {
    const newTasks = this.state.selectedTasks.concat(task);
    this.setState({ selectedTasks: newTasks });
  };
  render() {
    const { selectedTasks } = this.state;

    return (
      <div className="ui text container">
        <SelectedTasks tasks={selectedTasks} onTaskClick={this.removeTask} />
        <TaskSearch onTaskClick={this.addTask} />
        {JSON.stringify(selectedTasks)}
      </div>
    );
  }
}
export default App;
