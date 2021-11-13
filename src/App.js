import MainSection from "./components/MainSection";
import AbilitiesSection from "./components/AbilitiesSection";
import UsagesSection from "./components/UsagesSection";
import TechnicalUtils from "./components/TechnicalUtils";
import SampleSection from "./components/SampleSection";
import './App.scss';
import Footer from "./components/Footer";

function App() {
  return (
    <div className={'alefba'}>
      <MainSection/>
      <div style={{height: '10vw'}}/>
      <AbilitiesSection/>
      <div style={{height: '20vw'}}/>
      <UsagesSection/>
      <div style={{height: '50vw'}}/>
      <TechnicalUtils/>
      <div style={{height: '25vw'}}/>
      <SampleSection/>
      <div style={{height: '20vw'}}/>
        <Footer/>
    </div>
  );
}

export default App;
