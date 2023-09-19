import { Route, Routes } from "react-router";
// import Welcome from "./Page/Welcome";
import VideoApp from "./Page/VideoApp";
import Main from "./Main.jsx";
import Login from "./components/Login";
import Private from "./Page/PrivateRoute";

function App() {

  // console.clear()

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />


        <Route path='/video-app' element={
          <Private>
            <VideoApp />
          </Private>
        } />

        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App;
