import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { VisibleElementList } from "../containers/VisibleElementList";
import { SortElements } from "../containers/SortElements";
import '../styles/main.scss';


const App = () => {
  return (
  <div>
    <Header />
    <SortElements />
    <VisibleElementList />
    <Footer />
  </div>
)};

export default App;