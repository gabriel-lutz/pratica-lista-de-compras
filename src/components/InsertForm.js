import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function InsertForm({ onAddItem }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { text };
    const promisse = axios.post(`http://localhost:4000/items`, newItem)
    promisse.then(()=>{
      setText("");
      onAddItem();
    })
    promisse.catch(()=>{
      alert("Tente novamente mais tarde.")
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Insert a new item..."
      />
    </form>
  );
}

const Input = styled.input`
  width: 400px;
  line-height: 40px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  outline: none;
`;
