import '../stylesheets/usages-section.scss';
import {ReactComponent as InBusinesses} from "../assets/images/usages/1.svg";
import {ReactComponent as InOrganizations} from "../assets/images/usages/2.svg";
import {ReactComponent as InLibraries} from "../assets/images/usages/3.svg";

const UsagesSection = () => {
    return(
        <div id={'usages-section'}>
            <p id={'usages-title'}>
                کاربرد های الفبا
            </p>
            <div style={{height: '15vh'}}/>
            <div id={'in-businesses'}>
                <InBusinesses/>
                <p className={'orange-text'}>
                    در کسب و کار ها
                </p>
                <p className={'white-text'}>
                    کاغذ و نوشته ها همه جا پیدا میشوند
                </p>
            </div>
            <div>
                <div style={{height: '20vh'}}/>
                <div id={'in-organizations'}>
                    <InOrganizations/>
                    <p className={'orange-text'}>
                        در سازمان ها
                    </p>
                    <p className={'white-text'}>
                        پرونذه ها و داده ها روی هم انباشته شده و در بایگانی ها خاک میخورند. مسیر &lt;&lt;  دولت الکترونیک&gt;&gt; از ورود این اسناد به دنیای دیجیتال میگذرد:
                    </p>
                </div>
            </div>
            <div>
                <div style={{height: '70vh'}}/>
                <div id={'in-libraries'}>
                    <InLibraries/>
                    <p className={'orange-text'}>
                        در کتابخانه
                    </p>
                    <p className={'white-text'}>
                        صفحه های لا به لای قفسه های کتابخانه منتظر ورود به دنیای نو هستند.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UsagesSection;
