import MainSection from "./components/MainSection";
import AbilitiesSection from "./components/AbilitiesSection";
import UsagesSection from "./components/UsagesSection";
import TechnicalUtils from "./components/TechnicalUtils";
import './App.scss';

function App() {
  return (
    <div className={'alefba'}>
      <MainSection/>
      <AbilitiesSection/>
      <div style={{height: '40vh'}}/>
      <UsagesSection/>
      <div style={{height: '90vh'}}/>
      <TechnicalUtils/>
    </div>
  );
}

export default App;
