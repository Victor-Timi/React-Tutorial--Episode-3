import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home'
import { Profile } from './Pages/Profile'
import { Contact } from './Pages/Contact'
import { Error } from './Pages/Error'
import { Nav } from './Nav';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Victor Timi")


  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Home username={username}/>} />
            <Route path='/Profile' element={<Profile username={username} setUsername={setUsername}/>} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
