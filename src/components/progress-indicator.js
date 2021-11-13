import Lottie from "lottie-react";
import progressIndicator from "../assets/lotties/progress-indicator.json";
import '../stylesheets/progress-indicator.css'

function ProgressIndicator(){
    return(
        <div className={'wrapper'}>
            <div>
                <Lottie id={'progress-indicator'} animationData={progressIndicator}/>
            </div>
        </div>
    )
}

export default ProgressIndicator;
