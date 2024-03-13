import './LoginPage.css';
import React from "react";

const Button = ({ text, onClick, className }) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
);

export default function LoginPage() {
  return (
    <>
      <style jsx>{`
        .login-container {
          background: linear-gradient(180deg, #f3e3d9 0%, #e6c0a9 42.72%);
          display: flex;
          flex-direction: column;
        }
        .icons-container {
          display: flex;
          margin-left: 14px;
          width: 240px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
        }
        .login-icon,
        .decorative-icon {
          width: 18px;
          stroke-width: 3px;
          stroke: #a81c30;
          border: 3px solid rgba(168, 28, 48, 1);
          margin-top: 10px;
        }
        .login-banner {
          width: 149px;
          max-width: 100%;
        }
        .form-section {
          border-radius: 100px 0px 0px 0px;
          background-color: #fff;
          display: flex;
          margin-top: 32px;
          width: 100%;
          flex-direction: column;
          font-size: 15px;
          font-weight: 400;
          padding: 34px 0 16px;
        }
        .content-container {
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 0 41px;
        }
        .title {
          color: #a81c30;
          text-align: center;
          align-self: center;
          font: 35px Inter, sans-serif;
        }
        .subtitle {
          color: #584b4d;
          text-align: center;
          font-family: Inter, sans-serif;
          font-weight: 300;
          align-self: center;
        }
        .input-label {
          color: #ababab;
          font-family: Inter, sans-serif;
          margin-top: 4px;
        }
        .input-field {
          border-radius: 15px;
          background-color: #d4d4d4;
          margin-top: 7px;
          height: 53px;
        }
        .signup-button,
        .forgot-password {
          margin-top: 28px;
          color: #fff;
          text-align: center;
          padding: 15px 60px;
          font: 18px Inter, sans-serif;
        }
        .signup-button {
          background-color: #000;
          border-radius: 10px;
          justify-content: center;
          align-items: center;
        }
        .forgot-password {
          background-color: transparent;
          color: #584b4d;
          font-weight: 300;
          margin-top: 43px;
        }
        .footer-image {
          width: 151px;
          max-width: 100%;
          margin: 94px 0 0 21px;
        }
      `}</style>

      <section className="login-container">
        <header className="icons-container">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1768e2983050c9c5cd8f815fcacc75eeee06121531f87c96613fde70f191d83?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="" className="login-icon" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="Login Banner" className="login-banner" />
        </header>
        <section className="form-section">
          <div className="content-container">
            <h1 className="title">Login</h1>
            <p className="subtitle">Sign in to continue</p>
            <label htmlFor="nameInput" className="input-label visually-hidden">NAME</label>
            <input id="nameInput" className="input-field" type="text" aria-label="Enter your name" placeholder="Name" />
            <label htmlFor="passwordInput" className="input-label visually-hidden">PASSWORD</label>
            <input id="passwordInput" className="input-field" type="password" aria-label="Enter your password" placeholder="Password" />
            <Button text="Sign Up" className="signup-button" />
            <Button text="Forgot password? click here" className="forgot-password" />
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3ce8744aa54d8eb63f151402128b4a98faf98991df1f24b64ab22fde0dbfd1b?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="Footer Decorative" className="footer-image" />
        </section>
      </section>
    </>
  );
}