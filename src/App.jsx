import React from "react";
import { Footer } from "./Components/Footer/Footer";
import InputForm from "./Components/InputForm/InputForm";
import AgeOutput from "./Components/AgeOutput/AgeOutput";

const App = () => {
  return (
    <>
      <main>
        <InputForm />
        <AgeOutput />
      </main>
      <Footer />
    </>
  );
};

export default App;
