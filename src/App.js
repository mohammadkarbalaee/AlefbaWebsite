import MainSection from "./components/MainSection";
import AbilitiesSection from "./components/AbilitiesSection";
import UsagesSection from "./components/UsagesSection";
import TechnicalUtils from "./components/TechnicalUtils";
import SampleSection from "./components/SampleSection";
import {Route, Switch} from 'react-router-dom';
import React, {Suspense} from 'react';
import './App.scss';
import Footer from "./components/Footer";
import ProgressIndicator from "./components/progress-indicator";

function App() {
  return (
    <div className={'alefba'}>
        <Suspense fallback={<ProgressIndicator/>}>
            <Switch>
                <Route path={'/AlefbaWebsite'} exact>
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
                </Route>
            </Switch>
        </Suspense>
    </div>
  );
}

export default App;
