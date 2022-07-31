import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Route, Routes } from "react-router-dom";
import {Header,Tab1,Tab2,Login} from "./";
const App = ()=>{
    const [userList, setUserList] = useState([]);


    // useEffect(() => {
    //     getUsers()
    //       .then(users => {
    //         setUserList(users)
    //       })
    //       .catch(error => {
    //         // something something errors
    //       });
    //   }, []);

    return (
        <div id="App">
            <Header userList={ userList } />
            <Routes>
                <Route path="/Tab1" element={<Tab1 />}/>
                <Route path="/Tab2" element={<Tab2 />}/>
                {/* <Route path="/Tab3" element={<Tab3 />}/> */}
                <Route path="/" element={<Login />}/>
            </Routes>
        </div>
    );
}

export default App;