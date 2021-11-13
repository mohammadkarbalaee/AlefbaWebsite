import Pattern from "../assets/images/main/main-pattern.png";
import Papers from "../assets/images/main/papers.png";
import IconTitle from "./IconTitle";
import '../stylesheets/main-section.scss';

const MainSection = () => {
    return(
        <div>
            <IconTitle/>
            <p id={'orange-text'}>
                نويسه خوان الفبـا
            </p>
            <p id={'white-text'}>
                بـرای تبدیـل تصویـر به نوشـته
            </p>
            <div id={'papers'}>
                <img src={Papers} id={'paper-image'} alt={''}/>
            </div>
            <img src={Pattern} id={'pattern'} alt={''}/>
        </div>
    )
}

export default MainSection;
