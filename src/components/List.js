import React, { useContext } from "react";
import Store from "../context";
import { Header } from "./Header";
import {TransitionMotion, spring, presets} from 'react-motion';

export default function List() {
  const { state, dispatch } = useContext(Store);

  const pluralize = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;


  const willEnter = ()  => {
      return {
        height: 0,
        opacity: 1,
      };
    };
  
  const willLeave = () => {
      return {
        height: spring(0),
        opacity: spring(0),
      };
    };
  

  let header =
    state.todos.length === 0 ? (
      <h4>Yay! All todos are done! Take a rest!</h4>
    ) : (
        <Header>
          <span className="float-right">{pluralize(state.todos.length)}</span>
        </Header>
      );

  const showTodos = () => {
    
      return state.todos.map(t => (
        <li key={t} className="list-group-item">
          {t}
          <button
            className="float-right btn btn-danger btn-sm"
            style={{ marginLeft: 10 }}
            onClick={() => dispatch({ type: "COMPLETE", payload: t })}
          >
            Complete
          </button>
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
              {showTodos()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
