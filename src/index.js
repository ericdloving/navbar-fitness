import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { getUsers } from "./api";
import Header from "./components/header";
const App = ()=>{
    const [userList, setUserList] = useState([]);
    
    useEffect(() => {
        getUsers()
          .then(users => {
            setUserList(users)
          })
          .catch(error => {
            // something something errors
          });
      }, []);

    return (
        <div id="App">
            <Header userList={ userList } />
        </div>
    );
}

ReactDOM.render(
    <App />, document.getElementById('root')
);