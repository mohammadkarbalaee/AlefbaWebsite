import '../stylesheets/abilities-section.scss';
import {ReactComponent as Side} from "../assets/images/abilities/side.svg";

const AbilitiesSection = () => {
    return(
        <div id={'abilities'}>
            <p id={'abilities-title'}>
                قابلیت های الفبا
            </p>
            <div id={'side'}>
                <Side id={'side-main'}/>
            </div>
            <div style={{height: '5vh'}}/>
            <div id={'right'}>
                <div id={'right-1'}>
                    <p>

                    </p>
                    <p>

                    </p>
                </div>
                <div id={'right-2'}>
                    <p>

                    </p>
                    <p>

                    </p>
                </div>
                <div id={'right-3'}>
                    <p>

                    </p>
                    <p>

                    </p>
                </div>
            </div>
            <div id={'left'}>
                <div id={'left-1'}>
                    <p>

                    </p>
                    <p>

                    </p>
                </div>
                <div id={'left-2'}>
                    <p>

                    </p>
                    <p>

                    </p>
                </div>
                <div id={'left-3'}>
                    <p>

                    </p>
                    <p>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default AbilitiesSection;
