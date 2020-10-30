import React from "react";
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
  </div>
)};

export default App;