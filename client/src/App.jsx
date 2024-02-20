import {Routes , Route, Navigate} from "react-router-dom"
import { Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Auth from "./auth/Auth";
import Update from "./auth/Update";
import Userpage from "./pages/Userpage";
import Postpage from "./components/Postpage";
import CreatePost from "./global/CreatePost";


function App() {
  const user =  useSelector(state => state.user.isUser)

  return (
    <>
      <Container maxW="730px" mx={"auto"}>
        <Header />
        <Routes>
          <Route path="/" element={user ? <Homepage/> : <Navigate to="/auth" />} />
          <Route path="/auth" element={user ? <Navigate to="/"/> : <Auth/>} />
          <Route path="/update" element={user ? <Update/> : <Navigate to="/auth" />} />
          <Route path="/:username"  element={ user ? <Userpage/> : <Navigate to='/auth' /> }  />
          <Route path="/:username/post/:id" element={<Postpage/>} />
        </Routes>
        <CreatePost/>
      </Container>
    </>
  )
}

export default App;
