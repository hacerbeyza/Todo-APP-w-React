// TodoCreate.jsx
import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Todo from "./Todo";
import { setItem, getItem } from "../utils/localStorage.js";
import TodoFilter from "./TodoFilter.jsx";

function TodoCreate() {
  // Todo listesi ve input state'leri
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState(null);
  const data = useRef(); 

  // Yeni ID oluşturmak için fonksiyon
  const generateId = () => {
    return crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
  };

  // Component mount olduğunda localStorage'den verileri al
  useEffect(() => {
    const savedTodos = getItem("todos");
    if (savedTodos.length > 0) {
      setTodos(savedTodos);
    }
  }, []);

  // Todos state değiştikçe localStorage güncelle
  useEffect(() => {
    setItem("todos", todos);
  }, [todos]);

  // Yeni todo ekleme veya mevcut todo güncelleme
  const addOrUpdateTodo = () => {
    const inputText = data.current.value.trim();
    if (inputText === "") return;

    if (editId !== null) {
      // Düzenleme modunda todo güncelle
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, text: inputText } : todo
        )
      );
      setEditId(null);
    } else {
      // Yeni todo ekle
      const newTodo = {
        id: generateId(),
        text: inputText,
        isComplete: false,
      };
      setTodos((prev) => [...prev, newTodo]);
    }

    data.current.value = ""; // inputu temizle
  };

  // Todo silme fonksiyonu
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Tamamlanan görevleri sil
  const deleteDone = () => {
    setTodos((prev) => prev.filter((todo) => !todo.isComplete));
  };

  // Todo tamamlandı / tamamlanmadı toggle
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  // Todo düzenleme fonksiyonu
  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      data.current.value = todoToEdit.text; // inputa todo metnini koy
      setEditId(id);
    }
  };

  // Konsolda todos'u görmek kontrol etmek için
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  // Filtreleme işlemi
  const filteredTodos = todos.filter((todo) => {
    if (filter === "todo") return !todo.isComplete;
    if (filter === "done") return todo.isComplete;
    return true;
  });

  // Aktif görev sayısı
  const rest = todos.filter((todo) => !todo.isComplete).length;

  // Enter ve Escape tuşları ile kontrol
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addOrUpdateTodo();
    } else if (e.key === "Escape") {
      data.current.value = "";
      setText("");
      setEditId(null);
    }
  };

  return (
    <div className="todo-create">
      <h1>TO DO LİST</h1>

      {/* Input ve Ekle Butonu */}
      <div>
        <input
          ref={data}
          type="text"
          placeholder="Todo Giriniz"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addOrUpdateTodo}>Ekle</button>
      </div>

      {/* Todo Listesi */}
      <div style={{ width: "100%", marginTop: "20px" }}>
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}

        {/* Footer: filtreleme, aktif görev sayısı ve tamamlananları sil */}
        <div className="footer">
          <TodoFilter filter={filter} setFilter={setFilter} />
          <p>Aktif Görevler: {rest}</p>
          <button onClick={deleteDone}>Tamamlananları Sil</button>
        </div>
      </div>
    </div>
  );
}

export default TodoCreate;
