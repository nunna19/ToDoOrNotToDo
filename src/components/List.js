import React, { useContext } from "react";
import Store from "../context";
import { Header } from "./Header";
import { Motion, spring } from 'react-motion';
import { CSSTransitionGroup } from 'react-transition-group' // ES6


export default function List() {
  const { state, dispatch } = useContext(Store);

  const format = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

  const handleTouchStart = (key, pressLocation, e) => {
    this.handleMouseDown(key, pressLocation, e.touches[0]);
  };
  let header =
    state.todos.length === 0 ? (
      <h4>Yay! All todos are done! Take a rest!</h4>
    ) : (
        <Header>
          <span className="float-right">{format(state.todos.length)}</span>
        </Header>
      );

  const showTodos = () => {
    return state.todos.map(t => (
      <li key={t} className="list-group-item"  onClick={() => dispatch({ type: "COMPLETE", payload: t })}>
        {t}
        <i className="float-right fas fa-times"></i>
      </li>
    ))

  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {header}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>

                {showTodos()}
              </CSSTransitionGroup>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
