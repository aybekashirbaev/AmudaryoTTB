import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Header'
import Home from './components/pages/Home'
import Management from './components/pages/Management'
import News from './components/pages/News'
import './sass/global.scss'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/managements' element={<Management />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
