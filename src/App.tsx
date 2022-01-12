import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Repo from "./pages/Repo";

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Profile/>}/>
      <Route path="/:username/:reponame" element={<Profile/>}/>
      <Route path="/:username/:reponame" element={<Repo/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;

 