
import React from "react";
import { Routes, Route } from "react-router-dom";
import TestA from "../pages/TestA";
import TestB from "../pages/TestB";

function TestRouter(){
    return(
        <Routes>
            <Route path="/test/a" element={<TestA />} />
            <Route path="/test/b" element={<TestB />} />
        </Routes>
    )
}

export default TestRouter;