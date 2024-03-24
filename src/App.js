import logo from './logo.svg';
import './App.css';
import BBB from './components/Greet'
import Welcome from "./components/Welcome";
import Greet from "./components/Greet";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/Function";
import ParentComponent from "./components/ParentComponent";
import {Component} from "react";

import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import Form from "./components/Form";
import Lifecycle from "./components/Lifecycle";
import RefsDemo from "./components/RefsDemo";
import FrParent from "./components/FRParent";
import PortalDom from "./components/PortalDom";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounts from "./components/ClickCounts";
import HoverCounts from "./components/HoverCounts";
import User from "./components/User";
import ComponentA from "./components/ComponentA";
import PostListComponent from "./components/PostListComponent";
import PostForm from "./components/PostForm";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookThree from "./components/HookThree";
function App() {
  return (
    <div className="App">
<HookThree/>
        {/*<HookCounter2/>*/}
        {/*<HookCounter2/>*/}
        {/*<PostForm/>*/}
        {/*<PostListComponent/>*/}
        {/*<ComponentA/>*/}
        {/*<User render={(isLogin)=>isLogin?"sunshine":"Guest"}/>*/}
        {/*<ClickCounts/>*/}
        {/*<HoverCounts/>*/}
        {/*<ErrorBoundary>*/}
        {/*<Hero heroName="sunshine1"/>*/}
        {/*</ErrorBoundary>*/}


        {/*<ErrorBoundary>*/}
        {/*<Hero heroName="sunshine2"/>*/}
        {/*</ErrorBoundary>*/}

        {/*<ErrorBoundary>*/}
        {/*<Hero heroName="joker"/>*/}
        {/*</ErrorBoundary>*/}
        {/*<PortalDom/>*/}
        {/*<FrParent/>*/}
        {/*<RefsDemo/>*/}
        {/*<Lifecycle/>*/}
        {/*<Form/>*/}
        {/*<Inline/>*/}
        {/*{<StyleSheet primary={true}/>}*/}
    {/*<ParentComponent/>*/}
      {/*<Greet name="111"/>*/}
      {/*  <Greet name="22"/>*/}
      {/*  <Greet name="333"/>*/}
      {/*<Welcome name="sunshine"/>*/}
      {/*  <Message/>*/}
      {/*  <Counter/>*/}
    </div>
  );
}


export default App;
