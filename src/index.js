import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // here we import bootstrap
// From here i will import my files like above line

import Sample from './practice/Export/Sample';                                 //This is for Defalut Export

import { Sample1 } from './practice/Export/Sample1';                           //This is for Named Export

import Tables from './practice/Css Table/Tables';                                 // This is for importing Tables (Task)

import Home from './practice/Components/homeComp';

import Amazon from './practice/Amazon';

import Product from './practice/product';

import Functioncomp from './practice/Functioncomp';

import Props from './practice/Props/Props';                                   // Properly importing Props component

import Propsclass from './practice/Props/Prposclass';                         //This is for Class Props

import Prop from './practice/Props/Prop'                                      //This for props

import Butto from './practice/Bootstrap';

import Profilecart from './practice/Profilecart'

import Accordian from './practice/Accordion';

import CondRend from './practice/CondRend';                            // This is for Condition Rendering
import CondRendTask from './practice/CondRendTask';                    // This is task on CondRendTask

import Parent from './practice/Parent-Child/ParentComp';                            // This is for Parent Component

import Swiggy from './practice/Swiggy/Swiggy';                                // This is for parent and nested child example

import Counter from './practice/Counter';                              // This is for counting numbers

import Switch from './practice/Switch';                                // This is for switch

import Form from './practice/Form';                                    // This is for forms

import Todo from './practice/Todo';                                    // This is for Todo

import Spinners from './practice/Spinner';                             // This is for Spinners

import Mainpage from './practice/Fire Base/mainpage';

import MountingState from './practice/Life Cycle/Mounting_State';
import UpdatingState from './practice/Life Cycle/Updating_State'; 
import UnmountingState from './practice/Life Cycle/Unmounting_State';                // These are for life cycle

import FuncLifeCycle from './practice/FunctionCom';

import CountFc from './practice/CounterFunction';

// import Calculator from './practice/Calculator';

import FormComp from './practice/FormComp';

import Buttoncount from './practice/ButtonCount';

// import LoginComp from './practice/LoginComp';

import UseEffect from './practice/UseEffect';

import Rout from './practice/RoutingComp/Router';

import DynMov from './practice/DynamicRouting/DynMov';

import MemoHook from './practice/Hooks/memohook';
import CallBackHook from './practice/Hooks/callbackhook';

import ParentComp from './practice/Hooks/Context Hook/parentComp';

// import FormValid from './practice/Hooks/custom hooks/formValid';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* From here i will import my files like above line */}

    {/* <Sample />        */}
    {/* This is for default export */}

    {/* <Sample1 />      */}
    {/* This is for Named Export */}

    {/* <Tables/> */}
    {/* This is for Tables (Task) */}

    {/* <Home/> */}

    {/* <Amazon/> */}
    {/* This is task for gallary */}

    {/* <Product/> */}

    {/* <Functioncomp/> */}
    {/* This is for Cart */}

    {/* <Props name="Manikanta" city="HYD"/>
    <Props name="Mohan" city="Chennai"/> */}
    {/* This is for normal props */}

    {/* <Propsclass name="Balu"/>
    <Propsclass name="Mahesh"/> */}
    {/* This is for Class props */}

    {/* <Prop>
      <h1>IPHONE</h1>
      <h3>79,999/-</h3>
    </Prop> */}

    {/* <Butto/> */}

    {/* <Profilecart/> */}

    {/* <Accordian/> */}
    {/* This is for Accordian */}

    {/* <CondRend/> */}
    {/* This is for Condition Rendering  without props*/}

    {/* <CondRend login={true}/> */}
    {/* This is for Condition Rendering  without props*/}

    {/* <CondRendTask/> */}

    {/* <Parent/> */}
    {/* This is for Parent Component Component */}

    {/* <Swiggy login="Admin"/> */}
    {/* In above example i created the Swiggy app */}

    {/* <Counter/> */}
    {/* This isfor adding numbers count */}

    {/* <Switch/> */}
    {/* This is for switch */}

    {/* <Form/> */}
    {/* This is for Forms */}

    {/* <Todo/> */}
    {/* This is for Todo */}

    {/* <Spinners/> */}
    {/* This is for spinners */}

    {/* Life cycle */}
    {/* <MountingState/>
    <UpdatingState/>
    <UnmountingState/> */}

    {/* <FuncLifeCycle/> */}

    {/* <CountFc/> */}

    {/* <Calculator/> */}

    {/* <FormComp/>     */}

    {/* <Buttoncount/> */}

    {/* <LoginComp/> */}

    {/* <UseEffect/> */}
    
    {/* <Rout/> */}

    {/* <DynMov/> */}
    {/* For Dynamic routing */}

    {/* Hooks */}
    {/* <MemoHook/>
    <CallBackHook/> */}

    {/* Context Api */}
    {/* <ParentComp/> */}

    {/* <FormValid/> */}

     {/* Fire Base */}
    <Mainpage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();