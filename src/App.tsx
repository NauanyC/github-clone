import 'react-calendar-heatmap/dist/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './assets/styles/GlobalStyles';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
