// 리액트 패키지를 불러옵니다.
import React, { useRef } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { db } from "./firebase";
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";
import { loadWordFB } from "./redux/modules/word";

const WordList = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(async () => {
    dispatch(loadWordFB());
  }, []);

  //리덕스에 있는 데이터 가져오기
  const my_word_list = useSelector((state) => state.word.list);

  console.log(my_word_list);

  return (
    <ListStyle>
      {my_word_list.map((list, index) => {
        return (
          <ItemStyle
            key={index}
            // onClick={() => {
            //   history.push("/detail/" + index);
            // }}
          >
            <WordText>{list.word}</WordText>
            <TextWrapper>
              <Meaning>{list.meaning}</Meaning>
              <Example>{list.example}</Example>
            </TextWrapper>
          </ItemStyle>
        );
      })}
      <DetailBtn
        onClick={() => {
          history.push("/detail");
        }}
      ></DetailBtn>
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
  display: flex;
  align-items: center;
  padding: 16px;
  margin: 8px;
  height: 5em;
  border-radius: 20px;
  background-color: #fff59d;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const WordText = styled.h3`
  width: 100%;
  margin-right: 2em;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const TextWrapper = styled.div`
  width: 100%;
`;
const Meaning = styled.h5`
  font-size: 20px;
  padding: 5px;
  margin: 0;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const Example = styled.h5`
  color: blue;
  padding: 5px;
  margin: 0;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const DetailBtn = styled(HiOutlinePlusCircle)`
  color: #cbc26d;
  font-size: 3.5em;
  position: fixed;
  right: 5%;
  bottom: 5%;
`;
export default WordList;
