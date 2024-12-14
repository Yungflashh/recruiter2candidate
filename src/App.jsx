import AboutPage from "./pages/AboutPage"
import CandidateSignUp from "./pages/CandidateSignUp"
import ForRecruiter from "./pages/ForRecruiter"
import HomePage from "./pages/HomePage"
import PaymentPage from "./pages/PaymentPage"
import RecruiterSignUp from "./pages/RecruiterSignUp"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import Footer from "./static/Footer"
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
       <Route path="/CandidateSignUp" element = { <CandidateSignUp />} />
       <Route path="/signUp" element = { <SignUpPage />} />
       <Route path="/signin" element = { <SignInPage/>} />
       <Route path="/payment" element = { <PaymentPage/>} />

        </Routes>
        <Footer/>
    </BrowserRouter>
    
  )
}

export default App
