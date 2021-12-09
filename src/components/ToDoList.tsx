import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);

  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {
          toDos.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          )) /* toDo가 같은 prop을 가지고 있어서 이렇게 사용가능*/
        }
      </ul>
    </div>
  );
}

export default ToDoList;
