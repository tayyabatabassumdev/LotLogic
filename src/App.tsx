import FeaturesSection from "./components/sections/Features/FeaturesSection"
import HeroSection from "./components/sections/Hero/HeroSection"
import PricingSection from "./components/sections/Pricing/PricingSection"
import WhyTeamsUseSection from "./components/sections/WhyTeamsUse/WhyTeamsUseSection"
import WorkFasterSection from "./components/sections/WorkFaster/WorkFasterSection"
import HowLotLogicsWorksSection from "./components/sections/HowLotLogicsWorks/HowLotLogicWorksSection"
import FAQSection from "./components/sections/FAQ/FAQSection"
import Footer from "./components/sections/Footer/Footer"

const App = () => {
  return (
    <> 
    <HeroSection/>
    <FeaturesSection></FeaturesSection>
     <WorkFasterSection></WorkFasterSection>
     <WhyTeamsUseSection></WhyTeamsUseSection>
     <PricingSection />
     <HowLotLogicsWorksSection/>
     <FAQSection></FAQSection>
     <Footer></Footer>
    </>
  )
}

export default App