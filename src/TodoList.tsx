// full code of TodoList.tsx
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./Todo.module.scss";

type ListProps = {
  name: string;
  items: Array<string>;
};

export function TodoList(props: ListProps) {
  const [itemList, setItemList] = useState<Array<string>>(props.items);
  const [input, setInput] = useState<string>("");

  const addItem = () => {
    setItemList([...itemList, input]);
  };

  const setText = (value: string) => {
    setInput(value);
  };

  // Step 2a
  const removeItem = (itemToRemove: string) => {
    setItemList(itemList.filter((item) => item !== itemToRemove));
  };

  return (
    <div className={styles.todoList}>
      <h2>Todo List</h2>
      <p>by {props.name}</p>

      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addItem()}>Add</button>

      {/* Step 2b */}
      {itemList.map((item, idx) => (
        <TodoItem key={idx} item={item} onRemove={() => removeItem(item)} />
      ))}
    </div>
  );
}