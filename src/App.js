import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import WordList from "./WordList";
import Detail from "./Detail";
import { db } from "./firebase";

function App() {
  const moveWordWrite = () => {
    document.location.href("/detail");
  };

  return (
    <div className="App">
      <Container>
        <Title>My Dict</Title>
        <Line />
        {/* 라우트로 보여주기 */}
        <Route path="/" exact component={WordList} />
        <Route path="/detail" component={Detail} />
      </Container>
    </div>
  );
}
const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  overflow: auto;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
