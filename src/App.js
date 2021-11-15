import {Route, Switch} from 'react-router-dom';
import React, {lazy, Suspense} from 'react';
import './App.scss';
import ProgressIndicator from "./components/ProgressIndicator";

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
                    <div id={'main-abilities-space'}/>
                    <AbilitiesSection/>
                    <div id={'abilities-usage-space'}/>
                    <UsagesSection/>
                    <div id={'usage-utils-space'}/>
                    <TechnicalUtils/>
                    <div id={'utils-sample-space'}/>
                    <SampleSection/>
                    <div id={'sample-footer-space'}/>
                    <Footer/>
                </Route>
            </Switch>
        </Suspense>
    </div>
  );
}

export default App;
