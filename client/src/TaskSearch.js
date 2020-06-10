import React, { Component } from "react";
import Client from "./Client";

class TaskSearch extends Component {
  state = {
    tasks: [],
    showRemoveIcon: false,
    searchValue: ""
  };

  handleSearchChange = e => {
    const value = e.target.value;

    this.setState({ searchValue: value });

    if (value === "") {
      this.setState({
        tasks: [],
        showRemoveIcon: false
      });
    } else {
      this.setState({ showRemoveIcon: true });
    }

    Client.search(value, tasks => {
      this.setState({
        tasks: tasks.slice(0)
      });
    });
  };

  handleSearchCancel = () => {
    this.setState({ tasks: [], showRemoveIcon: false, searchValue: "" });
  };

  render() {
    const { showRemoveIcon, tasks } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: "hidden" };

    const taskRows = tasks.map((task, idx) => (
      <tr key={idx}>
        <td>{JSON.stringify(task.name)}</td>
      </tr>
    ));
    return (
      <div>
        Row
        {taskRows}
        <i
          className="remove icon"
          onClick={this.handleSearchCancel}
          style={removeIconStyle}
        />
      </div>
    );
  }
}
export default TaskSearch;
