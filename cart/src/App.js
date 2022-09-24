import React from "react";
import CartContainer from "./CartContainer";
import Header from "./Header";
import { useGlobalContext } from "./context";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1> Loading ...</h1>
      </div>
    );
  }
  return (
    <section>
      <Header />
      <CartContainer />
    </section>
  );
}

export default App;
