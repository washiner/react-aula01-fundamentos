import React from "react";

import {Container, H1, P} from "./styles"

function App() {
  const nome = "Washiner Takeuchi";

  return (
    <Container>
      <H1>{nome}</H1>
      <P>Washiner paragrafo</P>
      <P>Outro paragrafo</P>
    </Container>
  );
}

export default App
