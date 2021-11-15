import '../stylesheets/abilities-section.scss';
import {ReactComponent as Side} from "../assets/images/abilities/side.svg";
import {ReactComponent as Right1} from "../assets/images/abilities/right-1.svg";
import {ReactComponent as Right2} from "../assets/images/abilities/right-2.svg";
import {ReactComponent as Right3} from "../assets/images/abilities/right-3.svg";
import {ReactComponent as Left1} from "../assets/images/abilities/left-1.svg";
import {ReactComponent as Left2} from "../assets/images/abilities/left-2.svg";
import {ReactComponent as Left3} from "../assets/images/abilities/left-3.svg";

const AbilitiesSection = () => {
    return(
        <div id={'abilities'}>
            <p id={'abilities-title'}>
                قابلیت های الفبا
            </p>
            <div id={'side'}>
                <Side id={'side-main'}/>
            </div>
            <div id={'abilities-title-space'}/>
            <div id={'abilities-wrapper'}>
                <div id={'left'}>
                    <div style={{height: '8vw'}}/>
                    <div className={'ability-group'} id={'left-1'}>
                        <Left1 className={'ability-icon'}/>
                        <p className={'black-text'}>
                            خواندن متون فارسی و انگلیسی
                        </p>
                        <p className={'white-text'}>
                            خواندن نویسه های فارسی، انگلیسی و البته زبان های مشابه مثل عربی و دری، همه در کنار هم در یک تصویر
                        </p>
                    </div>
                    <div className={'ability-group'} id={'left-2'}>
                        <Left2 className={'ability-icon'}/>
                        <p className={'black-text'}>
                            اصلاح تصویر
                        </p>
                        <p className={'white-text'}>
                            اصلاح نویز، چرخش و سایه تصویر برای دقیق‌تر خواندن متن
                        </p>
                    </div>
                    <div className={'ability-group'} id={'left-3'}>
                        <Left3 className={'ability-icon'}/>
                        <p className={'black-text'}>
                            خواندن حرکت های حروف
                        </p>
                        <p className={'white-text'}>
                            خواندن نوشته‌ها و حذف حرکت‌ها از عبارت های فارسی یا عربی مثل آیات قرآن کریم
                        </p>
                    </div>
                </div>
                <div id={'right'}>
                    <div className={'ability-group'} id={'right-1'}>
                        <Right1 className={'ability-icon'}/>
                        <p className={'black-text'}>
                            خواندن قلم های گوناگون
                        </p>
                        <p className={'white-text'}>
                            خواندن متون نوشته‌شده با قلم‌های مختلف، در اندازه‌های متفاوت، مثل عنوان، متن یا پاورقی‌ها
                        </p>
                    </div>
                    <div className={'ability-group'} id={'right-2'}>
                        <Right2 className={'ability-icon'}/>
                        <p className={'black-text'}>
                            حفظ ساختار سند
                        </p>
                        <p className={'white-text'}>
                            چیدن عنوان، متن، تصویر و جدول در صفحه نتیجه، برای حفظ ساختار سند مورد تحلیل
                        </p>
                    </div>
                    <div className={'ability-group'} id={'right-3'}>
                        <Right3 className={'ability-icon'}/>
                        <p className={'black-text'}>
                            اطمینان از درستی
                        </p>
                        <p className={'white-text'}>
                            مشخص کردن بخش‌هایی از نوشته که با تردید خوانده شده‌اند برای بازنگری توسط انسان
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbilitiesSection;
