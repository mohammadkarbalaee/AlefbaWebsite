import Pattern from "../assets/images/main/main-pattern.png";
import Papers from "../assets/images/main/papers.png";
import IconTitle from "./IconTitle";
import '../stylesheets/main-section.scss';
import { Cross as Hamburger } from 'hamburger-react'
import {useState} from "react";

const MainSection = () => {

    const [isOpen, setOpen] = useState<boolean>(false);

    let height: number = (window.innerWidth / 50);

    return(
        <div>
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
            <div id={'hamburger-icon-group'}>
                <div id={'hamburger-button'}>
                    <Hamburger
                        toggled={isOpen}
                        color="white"
                        toggle={setOpen}
                        size={height}
                        direction="right"
                        duration={0.6}
                    />
                </div>
                <IconTitle/>
            </div>
        </div>
    )
}

export default MainSection;
