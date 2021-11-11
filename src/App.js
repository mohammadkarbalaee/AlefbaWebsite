import MainSection from "./components/MainSection";
import AbilitiesSection from "./components/AbilitiesSection";
import UsagesSection from "./components/UsagesSection";
import TechnicalUtils from "./components/TechnicalUtils";
import './App.scss';
import SampleSection from "./components/SampleSection";

function App() {
  return (
    <div className={'alefba'}>
      <MainSection/>
      <div style={{height: '10vw'}}/>
      <AbilitiesSection/>
      <div style={{height: '40vh'}}/>
      <UsagesSection/>
      <div style={{height: '90vh'}}/>
      <TechnicalUtils/>
      <div style={{height: '50vh'}}/>
      <SampleSection/>
    </div>
  );
}

export default App;
