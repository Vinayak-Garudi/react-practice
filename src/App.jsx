import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';

// redux
import { actions } from './store/store';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.allSlice.isLogin)
  const userName = useSelector(state => state.allSlice.userName)

  const [authText, setAuthText] = useState("Log In")

  useEffect(() => {
    if (isLogin) {
      setAuthText("Log Out")
    }
    else {
      setAuthText("Log In")
    }
  }, [isLogin])

  function handleAuth() {
    if (isLogin) {
      dispatch(actions.handleLogout())
      dispatch(actions.updateUserName(""))
    }
    else {
      dispatch(actions.handleLogin())
      dispatch(actions.updateUserName("Vinayak"))
    }
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <h3>{userName}</h3>
        <button onClick={() => handleAuth()}>{authText}</button>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
