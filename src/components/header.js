import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <div>
          <Link className="nav-logo" to="/">
            <h3>Math Magicians</h3>
          </Link>
        </div>
        <nav>
          <ul className="nav-links-list">
            <li key="home"><Link to="/" className="nav-link" activeClassName="active-link">Home</Link></li>
            <li key="calculator"><Link to="/calculator" className="nav-link">Calculator</Link></li>
            <li key="quotes"><Link to="/quotes" className="nav-link">Quotes</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
