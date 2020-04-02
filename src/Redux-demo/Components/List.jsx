import React from "react";
import { connect } from "react-redux";
import { toggleDone } from "../actions/index";

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDone: todo => dispatch(toggleDone(todo))
  };
};

const ConnectedList = ({ tasks, toggleDone }) => {
  // tasks={[{id:0, title:"learn HTML"}]}}
  return (
    <ul>
      {tasks.map(task => {
        const style = task.done ? { textDecoration: "line-through" } : null;
        return (
          <li style={style} key={task.id} onClick={() => toggleDone(task.id)}>
            {task.title}
          </li>
        );
      })}
    </ul>
  );
};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
// const List = connect((state)=>{tasks:state:tasks})
// <ul>
// </ul>
//<List tasks={[{id:0, title:"learn HTML"}]}}>
export default List;
