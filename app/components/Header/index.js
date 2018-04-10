import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
// import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';
import H1 from '../H1';

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {/* <A href="https://twitter.com/mxstbr">
           <Img src={Banner} alt="react-boilerplate - Logo" />
        </A> */}
        <H1>Timer Circle</H1>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
