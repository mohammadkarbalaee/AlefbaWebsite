import Lottie from "lottie-react";
import progressIndicator from "../assets/lotties/progress-indicator.json";
import '../stylesheets/progress-indicator.scss'

function ProgressIndicator(){
    return(
        <div className={'wrapper'}>
            <Lottie id={'progress-indicator'} animationData={progressIndicator}/>
        </div>
    )
}

export default ProgressIndicator;
