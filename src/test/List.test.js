import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Store from "../context";
import reducer from "../reducer";
import List from "../components/List";

Enzyme.configure({ adapter: new Adapter() });

test("<List /> #display", async () => {
  const todos = ["a", "b", "c"];
  const dispatch = () => {};
  const list = mount(
    <Store.Provider value={{ state: { todos }, dispatch }}>
      <List />
    </Store.Provider>
  );

  expect(list.find("li").length).toEqual(3);
  expect(
    list
      .find("li")
      .first()
      .html()
  ).toEqual(
    '<li class="list-group-item">a<i class="float-right fas fa-times"></i></li>'
  );
  expect(
    list
      .find("li")
      .last()
      .html()
  ).toEqual(
    '<li class="list-group-item">c<i class="float-right fas fa-times"></i></li>'
  );
});

test("<List /> #completeCalls", async () => {
  const todos = ["a", "b", "c"];
  const dispatch = jest.fn();
  const list = mount(
    <Store.Provider value={{ state: { todos }, dispatch }}>
      <List />
    </Store.Provider>
  );

  list.find("li").forEach(b => b.simulate("click"));
  expect(dispatch.mock.calls.length).toBe(3);
});

test("<List /> #completeMutates", async () => {
  let state = { todos: ["a", "b", "c"] };
  const dispatch = action => {
    state = reducer(state, action);
  };
  const list = mount(
    <Store.Provider value={{ state, dispatch }}>
      <List />
    </Store.Provider>
  );

  await list
    .find("li")
    .last()
    .simulate("click");
  expect(state.todos.length).toBe(2);
  expect(state.todos).toEqual(["a", "b"]);
});
