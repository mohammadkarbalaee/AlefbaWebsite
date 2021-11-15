import Sample1 from '../assets/images/samples/sample-1.png';
import Sample1Mobile from '../assets/images/samples/sample-1-mobile.png';
import Sample2Mobile from '../assets/images/samples/sample-2-mobile.png';
import Sample3Mobile from '../assets/images/samples/sample-3-mobile.png';
import {ReactComponent as Dot} from "../assets/images/samples/dot.svg";
import '../stylesheets/sample-section.scss';

const SampleSection = () => {
    return(
        <div className={'sample'}>
            <p id={'sample-title'}>
                نمونه های الفبا
            </p>
            <div style={{height: '10vw'}}/>
            <div id={'sample-section'}>
                <img src={Sample1} id={'image-sample'} alt={''}/>
                <div style={{width: '20vw'}}/>
                <div id={'buttons'}>
                    <div className={'button'}>
                        <img src={Sample1Mobile} className={'mobile-image float-right'} id={'sample-1-mobile'} alt={''}/>
                        <div className={'sample-row'}>
                            <p className={'white-title-sample'}>
                                حفظ ساختار سند
                            </p>
                            <Dot className={'dot'}/>
                        </div>
                        <p className={'description-sample'}>
                            جدول درون سند، درست با همان قالب ردیف‌ها و ستون‌ها تحلیل می‌شود.
                        </p>
                    </div>
                    <div className={'button'}>
                        <img src={Sample2Mobile} className={'mobile-image float-left'} id={'sample-2-mobile'} alt={''}/>
                        <div className={'sample-row'}>
                            <p className={'white-title-sample text-left-title'}>
                                اصلاح تصویر
                            </p>
                            <Dot className={'dot'}/>
                        </div>
                        <p className={'description-sample text-left'}>
                            پس‌زمینه نوشته اگر تمیز هم نباشد، الفبا می‌تواند آن را بخواند.
                        </p>
                    </div>
                    <div className={'button'}>
                        <img src={Sample3Mobile} className={'mobile-image float-right'} id={'sample-3-mobile'} alt={''}/>
                        <div className={'sample-row'}>
                            <p className={'white-title-sample'}>
                                حفظ ساختار متن
                            </p>
                            <Dot className={'dot'}/>
                        </div>
                        <p className={'description-sample'}>
                            خطوط نوشته در قالب پاراگراف‌های متن به مخاطب ارائه می‌شوند.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SampleSection;
