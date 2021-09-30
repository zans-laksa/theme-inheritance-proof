/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
import ContentWrapper from 'BComponent/ContentWrapper';
import {
    Footer as SourceFooter
} from 'BComponent/Footer/Footer.component';

/** @namespace Scandipwab1Variant/Component/Footer/Component/Footer */
export class Footer extends SourceFooter {
    // TODO implement logic
    renderCopyrightContent() {
        const { copyright } = this.props;

        return (
            <ContentWrapper
              mix={ { block: 'Footer', elem: 'CopyrightContentWrapper' } }
              wrapperMix={ { block: 'Footer', elem: 'CopyrightContent' } }
              label=""
            >
                <span block="Footer" elem="Copyright">
                    { copyright }
                    { ' Powered by ' }
                    <a href="https://scandipwa.com">
                        ScandiPWA FROM B1 VARIANT!!!
                    </a>
                </span>
            </ContentWrapper>
        );
    }
}

export default Footer;
