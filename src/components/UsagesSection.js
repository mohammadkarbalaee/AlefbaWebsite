import '../stylesheets/usages-section.scss';
import {ReactComponent as InBusinesses} from "../assets/images/usages/businesses.svg";
import {ReactComponent as InOrganizations} from "../assets/images/usages/organizations.svg";
import {ReactComponent as InLibraries} from "../assets/images/usages/libraries.svg";

const UsagesSection = () => {
    return(
        <div id={'usages-section'}>
            <p id={'usages-title'}>
                کاربرد های الفبا
            </p>
            <div style={{height: '15vh'}}/>
            <div id={'in-businesses'}>
                <InBusinesses id={'business-image'}/>
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
                    <InOrganizations id={'organization-image'}/>
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
                    <InLibraries id={'library-image'}/>
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
