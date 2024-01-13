import React from 'react';
import NavbarJs from "./pages/navbar/navbar";
import  './App.css'
import Block from "./pages/black/block";
import Statistics from "./pages/statistics/statistics";
import Computerimg from "./pages/computerimg/computerimg";
import Question from "./pages/question/question";
import Rules from "./pages/rules/rules";
import Call from "./pages/call/call";

const App = () => {
    return (
        <div className='container'>
            <NavbarJs/>
            <Block/>
            <Statistics/>
            <Computerimg/>
            <Question/>
            <Rules/>
            <Call/>
        </div>
    );
};

export default App;