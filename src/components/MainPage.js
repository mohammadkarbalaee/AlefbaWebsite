import {ReactComponent as Pattern} from "../assets/images/main-pattern.svg";
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
            <Pattern/>
        </div>
    )
}

export default MainPage;
