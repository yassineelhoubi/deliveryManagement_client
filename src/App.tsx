import './App.css';
import { Routes, Route } from "react-router-dom";
import { FC } from "react";
import Login from "./pages/Login"
const App: FC = () => {
  return (
    <Routes>

      <Route path="/" >

        <Route index element={<Login />} />
        <Route path="dashboard" >

        </Route>
      </Route>


      {/* <Route path="/admin">
          <Route path="/login" />
        </Route> */}
    </Routes>


  );
}

export default App;
