import React, { useState } from "react";

const Index = () => {
  const [todoText, setTodoText] = useState("");

  const [todos, setTodos] = useState({
    allTodos: [],
    inProgress: [],
    completed: [],
  });

  const handleAddTodos = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(0, 100),
      todoItem: todoText,
    };
    setTodos({
      ...todos,
      allTodos: [...todos.allTodos, newTodo],
    });

    setTodoText("");
  };

  const handleInProgress = (idx) => {
    const { allTodos, inProgress, completed } = todos;
    const filterAllTodos = allTodos.filter((i) => i.id !== idx);
    const findInProgressTodo = allTodos.find((i) => i.id === idx);

    setTodos({
      ...todos,
      allTodos: filterAllTodos,
      inProgress: [...inProgress, findInProgressTodo],
    });
  };

  const handleInCompleted = (idx) => {
    const { allTodos, inProgress, completed } = todos;
    const filterAllTodos = allTodos.filter((i) => i.id !== idx);
    const filterInProgressTodo = allTodos.filter((i) => i.id !== idx);
    const findCompletedTodo = inProgress.find((i) => i.id === idx);

    setTodos({
      ...todos,
      allTodos: filterAllTodos,
      inProgress: filterInProgressTodo,
      completed: [...completed, findCompletedTodo],
    });
  };

  return (
    <div>
      <h1 onClick={(_) => console.log(todos, " todosss")}>Todo</h1>

      <form onSubmit={handleAddTodos}>
        <input
          type={"text"}
          placeholder={"Add Todo"}
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      </form>

      <section>
        {/* all todos */}
        <div>
          <h1>All Todos</h1>
          <ul>
            {todos?.allTodos?.map((i) => {
              const { id, todoItem } = i;
              return (
                <li key={id} onClick={() => handleInProgress(id)}>
                  {todoItem}
                </li>
              );
            })}
          </ul>
        </div>
        {/* progress */}
        <div>
          <h1>In Progress</h1>
          <ul>
            {todos?.inProgress?.map((i) => {
              const { id, todoItem } = i;
              return (
                <li key={id} onClick={() => handleInCompleted(id)}>
                  {todoItem}
                </li>
              );
            })}
          </ul>
        </div>
        {/* completed */}
        <div>
          <h1>Completed</h1>
          <ul>
            {todos?.completed?.map((i) => {
              const { id, todoItem } = i;
              return <li key={id}>{todoItem}</li>;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Index;
