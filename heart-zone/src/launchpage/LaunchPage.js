import './LaunchPage.css';

function LaunchPage(props) {

  const handleSignUpClick = () => {
    // Handle sign up button click event
    // You can add your logic here
  };

  const handleLoginClick = () => {
    // Handle log in button click event
    // You can add your logic here
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
      <style jsx>{`
        .div {
          background: linear-gradient(180deg, #f3e3d9 0%, #e6c0a9 42.72%);
          display: flex;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
          font-size: 18px;
          color: #a81c30;
          font-weight: 400;
          text-align: center;
          padding: 6px 30px 80px;
        }
        .img {
          aspect-ratio: 1.18;
          object-fit: auto;
          object-position: center;
          width: 149px;
          max-width: 100%;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 230px;
          fill: url(<path-to-image>),
            lightgray -127.916px -63px / 193.405% 129.13% no-repeat;
          margin-top: 34px;
          max-width: 100%;
        }
        .div-2 {
          align-self: stretch;
          margin-top: 55px;
          font: italic 25px Inter, sans-serif;
        }
        .div-3 {
          color: #584b4d;
          font-family: Inter, sans-serif;
          font-weight: 300;
          margin-top: 15px;
        }
        .div-4 {
          align-self: stretch;
          display: flex;
          margin-top: 50px;
          justify-content: space-between;
          gap: 20px;
        }
        
        .div-5 {
          font-family: Inter, sans-serif;
          font-size: 20px;
          border-radius: 30px;
          background-color: #fff;
          justify-content: center;
          flex-grow: 1;
          padding: 7px 40px;
        }

        .div-6 {
          font-family: Inter, sans-serif;
          font-size: 20px;
          border-radius: 30px;
          border-color: #a81c30;
          background-color: #a81c30;
          justify-content: center;
          color: white;
          flex-grow: 1;
          padding: 7px 40px;
        }

      `}</style>
    </>
  );
}

export default LaunchPage;
