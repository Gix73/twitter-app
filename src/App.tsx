import React from "react";
import { useState } from "react";
import { AppWrapper, Container } from "./styled";
import Root from "./pages/Root/Root";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <AppWrapper>
        <Container>
          <Routes>
            <Route path="/" element={<Root />} />
          </Routes>
        </Container>
      </AppWrapper>
    </HashRouter>
  );
}

export default App;
