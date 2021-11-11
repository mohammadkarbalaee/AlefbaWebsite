import Pattern from "../assets/images/main/main-pattern.png";
import Papers from "../assets/images/main/papers.png";
import IconTitle from "./IconTitle";
import '../stylesheets/main-section.scss';

const MainSection = () => {
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
                <img src={Papers} id={'paper-image'} alt={''}/>
            </div>
            <img src={Pattern} id={'pattern'} alt={''}/>
        </div>
    )
}

export default MainSection;
