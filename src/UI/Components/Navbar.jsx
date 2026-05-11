import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const onLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark p-2">
      <Link className="navbar-brand" to="/">
        HEROES
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/marvel">
            Marvel
          </NavLink>
          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>
          <NavLink className="nav-item nav-link" to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div className={`navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ml-auto">
          {user && (
            <span className="nav-item nav-link user-badge">
              {user.name}
            </span>
          )}
          <button className="nav-item nav-link logout-btn" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};