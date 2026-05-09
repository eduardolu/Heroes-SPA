import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export const LoginPage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { login } = useUser();

  const onLogin = () => {
    if (name.trim()) {
      login(name.trim());
      navigate('/marvel', { replace: true });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card animate__animated animate__fadeIn">
        <h1 className="login-title">HEROES</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="form-control search-input mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onLogin()}
        />
        <button className="btn-login" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
};