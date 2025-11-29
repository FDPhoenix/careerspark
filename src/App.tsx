import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </>
  )
}

export default App
