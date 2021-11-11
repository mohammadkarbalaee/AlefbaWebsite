import Sample1 from '../assets/images/samples/sample-1.png';
import {ReactComponent as Dot} from "../assets/images/samples/dot.svg";
import '../stylesheets/sample-section.scss';

const SampleSection = () => {
    return(
        <div id={'sample-section'}>
            <img src={Sample1} id={'image-sample'} alt={''}/>
            <div style={{width: '20vw'}}/>
            <div id={'buttons'}>
                <div className={'button'}>
                    <div className={'sample-row'}>
                        <p className={'white-title-sample'}>
                            حفظ ساختار سند
                        </p>
                        <Dot className={'dot'}/>
                    </div>
                    <p className={'description-sample'}>
                        جدول درون سند، درست با همان قالب ردیف ها و ستون ها تحلیل میشود.
                    </p>
                </div>
                <div className={'button'}>
                    <div className={'sample-row'}>
                        <p className={'white-title-sample'}>
                            اصلاح تصویر
                        </p>
                        <Dot className={'dot'}/>
                    </div>
                    <p className={'description-sample'}>
                        پس زمینه نوشته ها اگر تمیز هم نباشد، الفبا میتواند آن را بخواند.
                    </p>
                </div>
                <div className={'button'}>
                    <div className={'sample-row'}>
                        <p className={'white-title-sample'}>
                            حفظ ساختار متن
                        </p>
                        <Dot className={'dot'}/>
                    </div>
                    <p className={'description-sample'}>
                        خطوط نوشته در قالب پاراگراف های متن به مخاطب ارائه میشود.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default SampleSection;
