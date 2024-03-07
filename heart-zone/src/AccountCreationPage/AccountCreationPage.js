import './AccountCreationPage.css';
import * as React from "react";


const InputField = ({ label, type = 'text' }) => (
  <>
    <label htmlFor={label.toLowerCase()} className="input-label">{label}</label>
    <input type={type} id={label.toLowerCase()} className="input-field" />
  </>
);

const AccountCreationPage = () => {
  return (
    <section className="signup-section">
      <header className="images-header">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1768e2983050c9c5cd8f815fcacc75eeee06121531f87c96613fde70f191d83?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="" className="icon" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="" className="logo" />
      </header>
      <article className="form-container">
        <h1>Create a New Account</h1>
        <p>Already registered? <a href="/login">Log in here.</a></p>
        <form>
          <InputField label="NAME" />
          <InputField label="EMAIL" type="email" />
          <InputField label="PASSWORD" type="password" />
          <InputField label="DATE OF BIRTH" type="date" />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </article>
      <style jsx>{`
        .signup-section {
          background: linear-gradient(180deg, #f3e3d9 0%, #e6c0a9 42.72%);
          display: flex;
          max-width: 360px;
          padding: 6px;
          flex-direction: column;
        }

        .images-header {
          display: flex;
          margin-left: 14px;
          width: 240px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
        }

        .icon, .logo {
          object-fit: cover;
          width: auto;
        }

        .icon {
          aspect-ratio: 0.72;
          stroke-width: 3px;
          stroke: #a81c30;
          border: 3px solid rgba(168, 28, 48, 1);
          margin-top: 10px;
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
          padding: 34px 39px 60px;
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
          display: block;
          width: 100%;
          margin-top: 26px;
          padding: 15px;
          background-color: #000;
          color: #fff;
          border-radius: 10px;
          font-size: 18px;
          font-family: Inter, sans-serif;
        }
      `}</style>
    </section>
  );
}


export default AccountCreationPage;
