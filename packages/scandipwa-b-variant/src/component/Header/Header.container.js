import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
    HeaderContainer as SourceHeaderContainer,
    mapDispatchToProps,
    mapStateToProps
} from 'BaseComponent/Header/Header.container';

export * from 'BaseComponent/Header/Header.container';

/** @namespace ScandipwabVariant/Component/Header/Container/HeaderContainer */
export class HeaderContainer extends SourceHeaderContainer {
    render() {
        console.log('HEADER B VARIANT OVERRIDE');
        return super.render();
    }
}

// export default HeaderContainer;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
