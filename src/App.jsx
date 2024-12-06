import AboutPage from "./pages/AboutPage"
import ForRecruiter from "./pages/ForRecruiter"
import HomePage from "./pages/HomePage"
import RecruiterSignUp from "./pages/RecruiterSignUp"
import Header from "./static/Header"
import {BrowserRouter,Routes, Route} from "react-router-dom"



function App() {
  

  return (
    
    <BrowserRouter>
        <Header/>

        <Routes>
       <Route path="/" element = { <HomePage />} />
       <Route path="/aboutUs" element = { <AboutPage />} />
       <Route path="/recruiter" element = { <ForRecruiter />} />
       <Route path="/RecruiterSignUp" element = { <RecruiterSignUp />} />

        </Routes>

    </BrowserRouter>
    
  )
}

export default App
