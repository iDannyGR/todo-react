import React, {useState} from 'react';
 
import './TodoForm.css';
import { useNavigate } from 'react-router-dom';

const TodoForm = ({ submitEvent, typeButton, title, defaultText }) => {
  const [newTodoValue, setNewTodoValue] = useState(defaultText || "");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTodoValue === "") {
      alert("valor incorrecto");
    } else {
      submitEvent(newTodoValue);
      navigate("/");
    }
  };
  const onCancel = () => {
    navigate("/");
  };
  const onAdd = () => {
    console.log("Añadida");
  };
  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">{title}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        name=""
        id=""
        cols="35"
        rows="8"
        className="todoForm__textArea"
        placeholder="Ingresa tarea"
      />
      <div className="todoForm">
        <button onClick={onCancel} className="btn todoForm__btn-cancel">
          Cancelar
        </button>
        <button onClick={onAdd} className="btn todoForm__btn-add">
          {typeButton}
        </button>
      </div>
    </form>
  );
};

export  {TodoForm}