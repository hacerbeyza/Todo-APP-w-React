// Todo.jsx
import { FaTrashCan } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import "../App.css";

function Todo({ todo, deleteTodo, toggleComplete, editTodo }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        borderRadius: "5px",
        padding: "12px",
        backgroundColor: "#fff",
        color: "#e86a6af0",
      }}
    >
      {/* Todo metni */}
      <div
        style={{
          color: "#594040f0",
        }}
        onClick={() => editTodo(todo.id)}
      >
        {todo.text}
      </div>

      {/* Tamamlandı ve Sil ikonları */}
      <div>
        <FaRegCircle
          className="todo-icons"
          style={{
            cursor: "pointer",
            marginRight: "10px",
            backgroundColor: todo.isComplete ? "#738b79ff" : "#fff",
            borderRadius: "10px",
          }}
          onClick={() => toggleComplete(todo.id)}
          title="Tamamlandı / Tamamlanmadı"
        />
        <FaTrashCan
          className="todo-icons"
          style={{ cursor: "pointer" }}
          onClick={() => deleteTodo(todo.id)}
          title="Sil"
        />
      </div>
    </div>
  );
}

export default Todo;
