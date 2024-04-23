import './LaunchPage.css';
import LoginPage from '../LoginPage/LoginPage';
import AccountCreationPage from '../AccountCreationPage/AccountCreationPage';

function LaunchPage(props) {

  const handleSignUpClick = () => {
    window.location.href = '/AccountCreationPage';
  };

  const handleLoginClick = () => {
    window.location.href = '/LoginPage';
  };

  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
          className="img"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/527d45c23393dae08a2c1a3137d595693f7f74359d05b9273efa69001971eceb?"
          className="img-2"
        />
        <div className="div-2">
          The dating app specifically fine tuned for users with similar interest
          in the amazing world of computer science
        </div>
        <div className="div-3">cout&lt;&lt;”Looking for Love”;</div>
        <div className="div-4">
          <button className="div-6" onClick={handleLoginClick}>Log In</button>
          <button className="div-5" onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default LaunchPage;
