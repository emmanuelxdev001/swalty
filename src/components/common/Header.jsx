function Header() {
    return (
      <header className="header">
        <div className="logo">
          {/* Replace with your logo */}
          <img src="/path-to-your-logo.png" alt="Swalty Treats Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/snacks">Snacks</Link></li>
            <li><Link to="/cakes">Cakes</Link></li>
            <li><Link to="/groceries">Groceries</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  