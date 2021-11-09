import {ReactComponent as Pattern} from "../assets/images/main-pattern.svg";
import {ReactComponent as Papers} from "../assets/images/papers.svg";
import IconTitle from "./IconTitle";
import '../stylesheets/main-page.scss';

const MainPage = () => {
    return(
        <div>
            <IconTitle/>
            <p id={'orange-text'}>
                نويسه خوان الفبا
            </p>
            <p id={'white-text'}>
                برای تبدیل عکس به نوشته
            </p>
            <div id={'papers'}>
                <Papers id={'paper-image'}/>
            </div>
            <Pattern id={'pattern'}/>
        </div>
    )
}

export default MainPage;
