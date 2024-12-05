import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import Header from "./static/Header"
import {BrowserRouter,Routes, Route} from "react-router-dom"



function App() {
  

  return (
    
    <BrowserRouter>
        <Header/>

        <Routes>
       <Route path="/" element = { <HomePage />} />
       <Route path="/aboutUs" element = { <AboutPage />} />

        </Routes>

    </BrowserRouter>
    
  )
}

export default App
