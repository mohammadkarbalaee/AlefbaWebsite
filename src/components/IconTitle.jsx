import {ReactComponent as Icon} from "../assets/images/main/logo.svg";
import '../stylesheets/main-section.scss';

const IconTitle = () => {
    return(
        <div id={'icon-title-group'}>
            <p id={'title'}>
                الفبا
            </p>
            <div>
                <Icon id={'icon'}/>
            </div>
        </div>
    )
}

export default IconTitle;
