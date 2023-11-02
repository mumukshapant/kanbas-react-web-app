import Add from "./add";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import ReduxExamples from "./ReduxExamples";
import TodoList from "./ReduxExamples/todos/TodoList";


function Assignment4() {
  const sayHello = () => {
    alert("Hello World!");
  };
  return (
    <div className="container-fluid">
      <h1>Assignment 4</h1>
      <TodoList/>
      <ReduxExamples/>
      <ParentStateComponent />
      <ArrayStateVariable />
      <ObjectStateVariable />
      <DateStateVariable />
      <StringStateVariables />
      <BooleanStateVariables />
      <Counter />
      <EventObject />
      <PassingFunctions
        theFunction={() => {
          alert("Life is Good!");
          sayHello();
        }}
      />
      <PassingDataOnEvent />
      <ClickEvent />
      <Add a={1} b={2} />
      {Add({ a: 1, b: 2 })}
    </div>
  );
}

export default Assignment4;