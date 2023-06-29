import React from "react";
import "../assets/index.css";
import Lottie from "lottie-react";
import { useTodos } from "../hooks/useTodos";
import todoAni from "../assets/Lottie/56-document-outline.json";
import notFount from "../assets/Lottie/96247-notfound.json";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { TodoCounter } from "../components/TodoCounter";
import { HeaderTodo } from "../components/HeaderTodo";
import { TodoLoading } from "../components/TodoLoading";
import { TodoError } from "../components/TodoError";
import { ChangeAlert } from "../components/ChangeAlert";
import { useNavigate, useSearchParams } from "react-router-dom";

const HomePage = () => {
  const { states, updater } = useTodos();
  const navigate = useNavigate()
  const [params, setParams]= useSearchParams()
  return (
    <>
      <HeaderTodo loading={states.loading}>
        <TodoCounter
          completedTodos={states.completedTodos}
          totalTodos={states.totalTodos}
        />
        <TodoSearch
          searchValue={states.search}
          setsearch={updater.setsearch}
          params={params}
        />
      </HeaderTodo>

      <TodoList
        error={states.error}
        loading={states.loading}
        searchTodo={states.searchTodo}
        totalTodos={states.totalTodos}
        search={states.search}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => (
          <Lottie
            animationData={todoAni}
            loop={true}
            style={{ height: "300px", width: "300px", margin: "25% auto" }}
          />
        )}
        onEmptySearchResults={(searchText) =>
          <p>not result to {searchText}</p> && (
            <Lottie animationData={notFount} loop={true} speed={3} />
          )
        }
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            completed={todo.completed}
            text={todo.text}
            onComplete={() => updater.finishedTodo(todo.id)}
            onEdit={() =>
              navigate(`/edit/${todo.id}`, {
                state: { todo },
              })
            }
            onDelete={() => updater.deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      <CreateTodoButton onclick={() => navigate("/new")} />
      <ChangeAlert sincronize={updater.sincronizeTodos} />
    </>
  );
};
export { HomePage };
