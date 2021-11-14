import {Route, Switch} from 'react-router-dom';
import React, {lazy, Suspense} from 'react';
import './App.scss';
import ProgressIndicator from "./components/progress-indicator";

const MainSection = lazy(() => import("./components/MainSection"));
const AbilitiesSection = lazy(() => import("./components/AbilitiesSection"));
const UsagesSection = lazy(() => import("./components/UsagesSection"));
const TechnicalUtils = lazy(() => import("./components/TechnicalUtils"));
const SampleSection = lazy(() => import("./components/SampleSection"));
const Footer = lazy(() => import("./components/Footer"));

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
