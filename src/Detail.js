// 리액트 패키지를 불러옵니다.
import React, { useRef } from "react";
import styled from "styled-components";

import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";

import { createWord, addWordFB } from "./redux/modules/word";
import { db } from "./firebase";
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";

const Detail = (props) => {
  let history = useHistory();

  let wordInput = useRef(null);
  let meaningInput = useRef(null);
  let exampleInput = useRef(null);

  const dispatch = useDispatch();

  const getData = () => {
    const word = wordInput.current.value;
    const meaning = meaningInput.current.value;
    const example = exampleInput.current.value;

    if (word === "" || meaning === "" || example === "") {
      alert("빈칸이 있어요~");
      return false;
    }

    const dataObject = {
      word: word,
      meaning: meaning,
      example: example,
    };
    dispatch(addWordFB({ word: word, meaning: meaning, example: example }));
    return dataObject;
  };

  return (
    <ListStyle>
      <ItemStyle>
        <InputContainer>
          <Text>단어</Text>
          <Input ref={wordInput}></Input>
        </InputContainer>
        <InputContainer>
          <Text>뜻</Text>
          <Input ref={meaningInput}></Input>
        </InputContainer>
        <InputContainer>
          <Text>예문</Text>
          <Input ref={exampleInput}></Input>
        </InputContainer>
        <InputContainer>
          <SaveBtn
            onClick={() => {
              const data = getData();
              data === false ? history.push("/detail") : history.push("/");
              console.log(data);
            }}
          >
            저장
          </SaveBtn>
        </InputContainer>
      </ItemStyle>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  height: 20em;
  border-radius: 20px;
  background-color: #fff59d;
`;

const InputContainer = styled.div`
  display: flex;
  width: 90%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Text = styled.h3`
  height: 20px;
  width: 50px;
`;

const Input = styled.input`
  height: 20px;
  width: 100%;
`;

const DetailBtn = styled(HiOutlinePlusCircle)`
  color: #cbc26d;
  font-size: 3.5em;
  position: fixed;
  right: 5%;
  bottom: 5%;
`;

const SaveBtn = styled.button`
  width: 40%;
  height: 1.5em;
  border-radius: 20px;
  border: 3px solid yellowgreen;
  font-size: 20px;
  background-color: white;
`;
export default Detail;
