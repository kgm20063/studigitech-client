import styled from "styled-components";

export const Main = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
  background: #f1f1f1;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 1000px;
  margin: 0 auto;
  height: 100%;
  padding-top: 100px;
`;

export const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  text-align: center;
`;

export const InputBox = styled.div`
  width: 300px;
  position: relative;
  margin: 10px 0;
  & > input {
    background: transparent;
    width: 100%;
    padding: 20px 0 5px 0;
    border: none;
    border-bottom: 1px solid #aaa;
    font-size: 14pt;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 0 10px;
  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown + label {
    color: #aaa;
    font-size: 14pt;
    position: absolute;
    top: 15px;
    left: 0;
    transition: all 0.2s ease;
    pointer-events: none;
  }
  &:focus + label,
  label {
    color: #333;
    font-size: 10pt;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:focus,
  &:not(:placeholder-shown) {
    border-bottom: 1px solid #333;
  }
`;

export const Submit = styled.button`
  padding: 6px 15px;
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  background: #02457a;
  transition: 0.2s;
  color: #fff;
  &:hover {
    background: #42759d;
  }
`;
