import './AccountCreationPage.css';
import ProfileCreation from '../ProfileCreation/ProfileCreation';
import { useNavigate } from 'react-router-dom';

const InputField = ({ label, type = 'text' }) => (
  <>
    <label htmlFor={label.toLowerCase()} className="input-label">{label}</label>
    <input type={type} id={label.toLowerCase()} className="input-field" />
  </>
);

const AccountCreationPage = () => {

  const handleProfileCreation = () => {
    window.location.href = '/ProfileCreation';
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="signup-section">
      <header className="images-header">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1768e2983050c9c5cd8f815fcacc75eeee06121531f87c96613fde70f191d83?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="" className="icon" onClick={handleBack}/>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="" className="logo" />
      </header>
      <article className="form-container">
        <h1>Create a New Account</h1>
        <p>Already registered? <a href = '/LoginPage'>Log in here.</a></p>
        <form>
          <InputField label="NAME" />
          <InputField label="EMAIL" type="email" />
          <InputField label="PASSWORD" type="password" />
          <InputField label="DATE OF BIRTH" type="date" />
          
        <div className="signup-div">
          <button className="signup-button" onClick={handleProfileCreation}>Sign Up</button>
          </div>
        </form>
      </article>
      <style jsx>{`
        .signup-section {
          background: linear-gradient(180deg, #f3e3d9 0%, #e6c0a9 42.72%);
          display: flex;
          max-width: 100%;
          flex-direction: column;
        }

        .images-header {
          display: grid;
          width: 100%;
          justify-content: center;
          gap: 20px;
        }

        .icon, .logo {
          width: auto;
        }

        .icon {
          aspect-ratio: 0.72;
          stroke-width: 3px;
          stroke: #a81c30;
          margin-top: 10px;
          position: absolute;
        }

        .logo {
          aspect-ratio: 1.18;
        }

        .form-container {
          border-radius: 100px 0px 0px 0px;
          background-color: #fff;
          display: flex;
          margin-top: 32px;
          width: 100%;
          flex-direction: column;
          font-size: 15px;
          color: #ababab;
          padding: 10px;
        }

        h1, p, a {
          text-align: center;
          font-family: Inter, sans-serif;
        }

        h1 {
          color: #a81c30;
          font-size: 35px;
          margin-bottom: 12px;
        }

        a {
          color: #584b4d;
          font-weight: bold;
        }

        .input-label {
          display: block;
          margin-top: 21px;
        }

        .input-field {
          display: block;
          width: 100%;
          margin-top: 8px;
          padding: 15px;
          border-radius: 15px;
          background-color: #d4d4d4;
        }

        

        .signup-button {
          font-family: Inter, sans-serif;
          font-size: 20px;
          font-color: white;
          border-radius: 30px;
          border-color: #a81c30;
          justify-content: center;
          width: 100%;
          color: white;
          flex-grow: 1;
          padding: 7px 40px;
          margin-top: 26px;
          background-color: #000;
        }

      `}</style>
    </section>
  );
}


export default AccountCreationPage;
