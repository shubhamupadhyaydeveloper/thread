import {Routes , Route} from "react-router-dom"
import { Container } from "@chakra-ui/react";
import Header from "../components/Header";
import Userpage from "../pages/Userpage";
import Postpage from "../components/Postpage";

function App() {

  return (
    <>
      <Container maxW="630px" mx={"auto"}>
        <Header/>
        <Routes>
          <Route path="/:username"  element={<Userpage/>}/>
          <Route path="/:username/post/:id" element={<Postpage/>} />
        </Routes>
      </Container>
    </>
  )
}

export default App;
