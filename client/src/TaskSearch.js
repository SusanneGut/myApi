import React, { Component } from "react";
import Client from "./Client";

const MATCHING_ITEM_LIMIT = 25;

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
        tasks: tasks.slice(0, MATCHING_ITEM_LIMIT)
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
      <tr key={idx} onClick={() => this.props.onTaskClick(task)}>
        <td>{task.name}</td>
        <td className="right aligned">{task.status}</td>
        <td className="right aligned">{task.id}</td>
      </tr>
    ));
    return (
      <div>
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th colSpan="5">
                <div className="ui fluid search">
                  <div className="ui icon input">
                    <input
                      className="prompt"
                      type="text"
                      placeholder="Search task..."
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className="search icon" />
                  </div>
                  <i
                    className="remove icon"
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className="eight wide">Description</th>
              <th>Status</th>
              <th>Id</th>
            </tr>
          </thead>
          <tbody>{taskRows}</tbody>
        </table>
      </div>
    );
  }
}
export default TaskSearch;
