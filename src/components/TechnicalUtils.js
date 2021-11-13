import '../stylesheets/technical-utils.scss';
import {ReactComponent as Side} from "../assets/images/utils/side.svg";
import {ReactComponent as Left1} from "../assets/images/utils/left-1.svg";
import {ReactComponent as Left2} from "../assets/images/utils/left-2.svg";
import {ReactComponent as Right1} from "../assets/images/utils/right-1.svg";
import {ReactComponent as Right2} from "../assets/images/utils/right-2.svg";

const TechnicalUtils = () => {
    return(
        <div id={'tech-utils'}>
            <p id={'utils-title'}>
                امکانات فنی الفبا
            </p>
            <div id={'side-utils'}>
                <Side id={'side-utils-main'}/>
            </div>
            <div style={{height: '5vh'}}/>
            <div id={'utils-wrapper'}>
                <div id={'left-utils'}>
                    <div className={'util-group'} id={'left-1'}>
                        <div className={'util-row'}>
                            <p className={'black-util-text'}>
                                دقت و سرعت
                            </p>
                            <div style={{width: '2vw'}}/>
                            <Left1 className={'util-icon'}/>
                        </div>
                        <p className={'white-util-text'}>
                            الفبا با دقت 97% نوشته‌های اسناد را می‌خواند و با سخت‌افزار مناسب میتواند 20 صفحه را در هر دقیقه تحلیل کند. البته دقت نویسه‌خوان به کیفیت اسناد ورودی هم ربط دارد.
                        </p>
                    </div>
                    <div className={'util-group'} id={'left-2'}>
                        <div className={'util-row'}>
                            <p className={'black-util-text'}>
                                پردازش موازی
                            </p>
                            <div style={{width: '2vw'}}/>
                            <Left2 className={'util-icon'}/>
                        </div>
                        <p className={'white-util-text'}>
                            الفبا می‌تواند با استفاده از پردازنده گرافیکی(کارت گرافیک)،اسناد را چند برابر سریع‌تر پردازش کند. همچنین قابلیت استفاده از چند ماشین برای پردازش توزیع‌شده اسناد را فراهم می‌کند.
                        </p>
                    </div>
                </div>
                <div id={'right-utils'}>
                    <div style={{height: '15vh'}}/>
                    <div className={'util-group'} id={'right-1'}>
                        <div className={'util-row'}>
                            <p className={'black-util-text'}>
                                پردازش زبان طبیعی
                            </p>
                            <div style={{width: '2vw'}}/>
                            <Right1 className={'util-icon'}/>
                        </div>
                        <p className={'white-util-text'}>
                            الفبا جمله‌های فارسی را می‌شناسد. یعنی گاهی وقت‌ها که میان دو شکل مختلف یک عبارت تردید دارد،هر دو را در میان دیگر کلمات خط نوشته قرار می‌دهد، تا ببیند کدام یک از جملات را بهتر کامل می‌کند.
                        </p>
                    </div>
                    <div className={'util-group'} id={'right-2'}>
                        <div className={'util-row'}>
                            <p className={'black-util-text'}>
                                یادگیری عمیق
                            </p>
                            <div style={{width: '2vw'}}/>
                            <Right2 className={'util-icon'}/>
                        </div>
                        <p className={'white-util-text'}>
                            الفبا با کمک فناوری های روز دنیا یعنی یادگیری عمیق، خواندن نویسه‌ها را با قلم‌های مختلف یادگرفته است. این فناوری علاوه بر دقت بالا،امکان خواندن قلم‌های تازه را هم برای نویسه‌خوان فراهم می‌کند.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnicalUtils;
