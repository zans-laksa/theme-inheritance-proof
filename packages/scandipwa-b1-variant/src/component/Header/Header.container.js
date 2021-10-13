import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
    HeaderContainer as SourceHeaderContainer,
    mapDispatchToProps,
    mapStateToProps
} from 'BComponent/Header/Header.container';

/** @namespace Scandipwab1Variant/Component/Header/Container/HeaderContainer */
export class HeaderContainer extends SourceHeaderContainer {
    render() {
        console.log('HEADER B1 VARIANT OVERRIDE');
        return super.render();
    }
}

// export default HeaderContainer;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
