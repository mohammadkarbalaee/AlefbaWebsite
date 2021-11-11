import MainSection from "./components/MainSection";
import AbilitiesSection from "./components/AbilitiesSection";
import './App.scss';
import UsagesSection from "./components/UsagesSection";

function App() {
  return (
    <div className={'alefba'}>
      <MainSection/>
      <AbilitiesSection/>
        <div style={{height: '40vh'}}/>
      <UsagesSection/>
    </div>
  );
}

export default App;
