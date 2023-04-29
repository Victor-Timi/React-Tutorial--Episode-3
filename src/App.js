import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home'
import { Profile } from './Pages/Profile'
import { Contact } from './Pages/Contact'
import { Error } from './Pages/Error'
import { Nav } from './Nav';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Profile' element={<Profile  />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
