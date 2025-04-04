import React from "react";
import { useState } from "react";
import { AppWrapper, Container } from "./styled";
import Root from "./pages/Root/Root";
import { HashRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SingUp/SignUp";

function App() {
  return (
    <HashRouter>
      <AppWrapper>
        <Container>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/logIn" element={<LogIn />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
          </Routes>
        </Container>
      </AppWrapper>
    </HashRouter>
  );
}

export default App;
