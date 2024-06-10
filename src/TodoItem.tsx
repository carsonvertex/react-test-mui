import React, { useState } from "react";
import styles from "./Todo.module.scss";
import Button from '@mui/material/Button';

type ItemProps = {
  item: string;
  // Step 1a
  onRemove: () => void;
};

export default function TodoItem(props: ItemProps) {
  const [count, setCount] = useState(0);

  const onComplete = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.todoItem}>
      <button onClick={onComplete}> Complete </button>
      {/* Step 1b */}
      <Button variant="contained" onClick={props.onRemove}> Remove </Button>
      <span className={styles.label}> {props.item} </span>
      <span className={styles.count}> {count} </span>
    </div>
  );
}