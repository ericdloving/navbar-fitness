import React, { useState } from "react";

import "./TabBar.css"
const TabBar = ()=>{
    const [selectedTab, setSelectedTab] = useState("1");

    const handleTabClick = (event)=>{
        setSelectedTab(event.target.value);
        console.log(event.target.value);
        console.log(selectedTab);
    }


    return (
        <div className = "tabbar">
            <button className={selectedTab==="1" ? "tab active": "tab"} id="tab1" onClick={handleTabClick} value="1">Tab 1</button>
            <button className={selectedTab==="2" ? "tab active": "tab"} id="tab2" onClick={handleTabClick} value="2">Tab 2</button>
            <button className={selectedTab==="3" ? "tab active": "tab"} id="tab3" onClick={handleTabClick} value="3">Tab 3</button>
            <button className={selectedTab==="4" ? "tab active": "tab"} id="tab4" onClick={handleTabClick} value="4">Tab 4</button>
        </div>
    )

}

export default TabBar;