import React from 'react';
import { Routes ,Route } from 'react-router-dom'
import Header from "../header/Header";
function Routing(props) {
    return (
        <Routes>
            <Route path="/cms" element={
                <Header />
            }/>
        </Routes>
    );
}

export default Routing;