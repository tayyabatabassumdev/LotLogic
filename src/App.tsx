
import { BrowserRouter, Routes} from "react-router-dom"
import { Route } from "react-router-dom"
import PrivacyPolicy from "./components/sections/pages/PrivacyPolicy"
import LandingPage from "./components/sections/pages/LandingPage"
import TermsAndConditions from "./components/sections/pages/TermsAndConditions"
import ContactPage from "./components/sections/pages/ContactPage"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  return (
    <> 
    
      <BrowserRouter>
      <ScrollToTop/>;
      <Routes>
        <Route path="/"  element={<LandingPage/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/contact" element={<ContactPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App