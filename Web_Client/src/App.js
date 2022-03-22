import Home from './pages/Home'
import Landing from './pages/Landing'
import SignForm from './pages/SignForm'
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" caseSensitive={false} element={<Landing/>} />
          <Route path="/Home" caseSensitive={false} element={<Home/>} />
          <Route path="/SignForm" caseSensitive={false} element={<SignForm/>} />
          <Route path="/Profile" caseSensitive={false} element={<Profile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
