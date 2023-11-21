import { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);
    const API = "https://kanbas-node-server-app-ds-527a75a57960.herokuapp.com/a5/todos";


    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
      });

      const [todos, setTodos] = useState([]);
      const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
      };
      useEffect(() => {
        fetchTodos();
      }, []);

      const removeTodo = async (todo) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
      };
    
      const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
      };
      const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
      };
      const updateTitle = async () => {
    const response = await axios.get(
      `${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
 const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };
  const deleteTodo = async (todo) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const updateTodo = async () => {
    try{
    const response = await axios.put(
      `${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (
      t.id === todo.id ? todo : t)));
    setTodo({}); } catch (error) {
    console.log(error);
    setErrorMessage(error.response.data.message);
  }

  };




    
    return (
      <div className="container-fluid" style={{width:"80%"}}>
        {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}

     <br/>     <br/>     <br/>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>
<br></br>
<br></br>


        <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo,
          id: e.target.value })}/>
      <a href={`${API}/${todo.id}`}
         className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      <br></br>
      <br></br>


      <h3>Filtering Array Items</h3>
  <a href={`${API}?completed=true`}
     className="btn btn-primary me-2" >
    Get Completed Todos
  </a>
  <br></br>
  <br></br>

  <h4>Creating new Items in an Array</h4>

  <a href={`${API}/create`}
     className="btn btn-primary me-2">
    Create Todo
  </a>
  <br></br>
  <br></br>




  <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      /><br></br>
<br></br>

      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}
         className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>
<br/><br/><br/><br></br>

<h3>Updating an Item in the Todo</h3>
      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      /><br/>
      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
        className="form-control mb-2"
        type="text"
      />

      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2" >
        Update Title
      </a>

      <br/>
      <br/>
      <input
        value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
<br/>
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2" >
        Update Description
      </a>

<br/><br/>

<ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
              className="list-group-item">
            {todo.title}
          </li>
        ))}
      </ul>




<br>
</br>
<br>
</br>

    
      
      <label>
      <input
  onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
  checked={todo.completed}
  className="form-check-input mb-2 w-75"
  type="checkbox"
/>

        Completion Status
      </label>
<br/><br/><br/>
      <a
  href={`${API}/${todo.id}/completed/${todo.completed}`}
  className="btn btn-primary me-2 float-end"
>
  Update Todo Completion Status
</a>
<br/><br/>
<h3>Axios calls to create todo Items</h3>
<div className="btn-group" style={{border:"white"}}>
<button onClick={createTodo}
              className="btn btn-primary mb-2 w-50">
        Create Todo
      </button>
      <button onClick={updateTitle}
              className="btn btn-success mb-2 w-50">
        Update Title
      </button></div>
      


<h3>Axios calls to delete todo Items</h3>
<ul className="list-group" style={{width:"50%"}}>
    {todos.map((todo) => (
      <li key={todo.id}
          className="list-group-item">
            <button
          onClick={() => fetchTodoById(todo.id)}
          className="btn btn-warning me-2 float-end" >
          Edit
        </button>

        <button
          onClick={() => removeTodo(todo)}
          className="btn btn-danger float-end" >
          Delete
        </button>
        {todo.title}
      </li>
    ))}
  </ul>

<br/>
<h3>Post Calls </h3>
<textarea
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })}
        value={todo.description} type="text"
      />
      <br/>
      <input
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })}
        value={todo.due} type="date"
      />      <br/>
      <label>
        <input
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}
          value={todo.completed} type="checkbox"
          className="form-check-input mb-2 w-75"
        />
        Completed
      </label>

<br></br>
<br></br>

      <div className="btn-group" style={{width:"30%"}}>
      <button onClick={postTodo}  
      className="btn btn-primary mb-2 w-100">
        Post Todo
      </button>
      <button onClick={updateTodo}
       className="btn btn-secondary mb-2 w-100">
        Update Todo
      </button>
      </div>

      <ul className="list-group" style={{width:"50%"}}>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button onClick={() => fetchTodoById(todo.id)}
             className="btn btn-warning float-end ms-2"> 
              Edit
            </button>
         
            <button
    onClick={() => deleteTodo(todo)}
    className="btn btn-danger float-end ms-2">
    Delete
  </button>
            <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>

      </div>

    );
  }
  export default WorkingWithArrays;