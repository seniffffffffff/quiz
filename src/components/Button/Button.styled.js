import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  margin-right: 10px;
  cursor: pointer;
  background-color: #f1f1f1;
  border: none;
  border-radius: 8px;
  color: #333;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e1e1e1;
  }
  &:disabled {
    background-color: #ccc;
    color: #888;
    cursor: not-allowed;
  }
`;
