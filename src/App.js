import { Route, Routes } from "react-router";
// import Welcome from "./Page/Welcome";
import VideoApp from "./Page/VideoApp";
import Main from "./Main.jsx";

function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/video-app' element={<VideoApp />} />
      </Routes>
    </>
  )
}

export default App;
