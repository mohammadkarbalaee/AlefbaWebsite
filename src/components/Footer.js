import '../stylesheets/footer.scss';
import {ReactComponent as Icon} from "../assets/images/main/logo.svg";
import AbilitiesSection from "./AbilitiesSection";

const Footer = () => {
    return(
        <div id={'footer'}>
            <div id={'icon-group'}>
                <p id={'title-footer'}>
                    الفبا
                </p>
                <div>
                    <Icon id={'icon-footer'}/>
                </div>
            </div>
            <div id={'left'}>
                <div id={'email-name'}>
                    <p>
                        شرکت دانش بنیان راهکار پردازش ژرف
                    </p>
                    <a href={'www.roshan-ai.ir'}>
                        salam@roshan-ai.ir
                    </a>
                </div>
                <div id={'contact-join'}>
                    <a href={'www.roshan-ai.ir'}>
                        تماس با ما
                    </a>
                    <a href={'www.roshan-ai.ir'}>
                        همکاری با ما
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Footer;
