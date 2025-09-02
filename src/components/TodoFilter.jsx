import React from "react";

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      {/* Filtreleme dropdownu */}
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Hepsi</option>
        <option value="todo">Yapılacaklar</option>
        <option value="done">Tamamlananlar</option>
      </select>
    </div>
  );
};

export default TodoFilter;
