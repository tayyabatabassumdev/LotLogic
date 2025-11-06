
import { BrowserRouter, Routes} from "react-router-dom"
import { Route } from "react-router-dom"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import LandingPage from "./pages/LandingPage"
import TermsAndConditions from "./pages/TermsAndConditions"
import ContactPage from "./pages/ContactPage"
import ScrollToTop from "./components/ScrollToTop"
import AboutPage from "./pages/AboutPage"

const App = () => {
  return (
    <> 
    
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/"  element={<LandingPage/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/contact" element={<ContactPage/>}></Route>
         <Route path="/about" element={<AboutPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App