import './ProfileCreation.css';
//import React from "react";
import ProfileView from '../ProfileView/ProfileView';

const InputField = ({ label, type = 'text' }) => (
  <>
    <label htmlFor={label.toLowerCase()} className="input-label">{label}</label>
    <input type={type} id={label.toLowerCase()} className="input-field" />
  </>
);

const ProfileCreation = () => {

  const handleSaveClick = () => {
    window.location.href = '/ProfileView';
  };

  return (
    <>
      <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
            className="img"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
            className="img-2"
          />
        </div>
        <div className="div-3">
          <div className="div-4">Create Your Profile</div>
          <div className="div-5">PHOTO</div>
      
          <input type="file" id="fileUpload" name="fileUpload" accept=".jpg, .jpeg, .png"></input>
          <label for="fileInput">
              <img srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
          />
          </label>
        
        

        <form>
          <label for="GENDER">CHOOSE YOUR GENDER:</label>
          <select id="GENDER" name="GENDER">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label for="MAJOR">CHOOSE YOUR MAJOR:</label>
          <select id="MAJOR" name="MAJOR">
            <option value="Software Engineering">Software Engineering</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Data Science">Data Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="other">Other</option>

          </select>

          <InputField label="PROFESSION" type="profession" />
          <InputField label="SCHOOL" type="school" />
          
        <div className="save-div">
          <button className="Save-button" onClick={handleSaveClick}>Save</button>
          </div>
        </form>

        </div>
      </div>
      <style jsx>{`
        .div {
          background: linear-gradient(180deg, #f3e3d9 0%, #e6c0a9 42.72%);
          display: flex;
          max-width: 100%;
          padding-top: 6px;
          flex-direction: column;
        }
        .div-2 {
          align-self: center;
          display: flex;
          align-items: flex-start;
          gap: 17px;
        }
        .img {
          aspect-ratio: 1.18;
          object-fit: auto;
          object-position: center;
          width: 149px;
          align-self: start;
          max-width: 100%;
        }
        .img-2 {
          aspect-ratio: 1.19;
          object-fit: auto;
          object-position: center;
          width: 57px;
          align-self: end;
          margin-top: 114px;
        }
        .div-3 {
          border-radius: 100px 0px 0px 0px;
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          font-size: 15px;
          color: #ababab;
          font-weight: 400;
          padding: 34px 39px 17px;
        }
        .div-4 {
          color: #a81c30;
          text-align: center;
          font: 35px Inter, sans-serif;
        }
        .div-5 {
          font-family: Inter, sans-serif;
          margin-top: 11px;
        }
        .img-3 {
          aspect-ratio: 1.04;
          object-position: center;
          width: 55px;
          margin-top: 7px;
        }
        .div-6 {
          font-family: Inter, sans-serif;
          margin-top: 21px;
        }
        .div-7 {
          border-radius: 15px;
          background-color: #d4d4d4;
          margin-top: 8px;
          height: 53px;
        }
        .div-8 {
          font-family: Inter, sans-serif;
          margin-top: 21px;
        }
        .div-9 {
          border-radius: 15px;
          background-color: #d4d4d4;
          margin-top: 8px;
          height: 53px;
        }
        .div-10 {
          font-family: Inter, sans-serif;
          margin-top: 21px;
        }
        .div-11 {
          border-radius: 15px;
          background-color: #d4d4d4;
          margin-top: 8px;
          height: 53px;
        }
        .div-12 {
          font-family: Inter, sans-serif;
          margin-top: 21px;
        }
        .div-13 {
          border-radius: 15px;
          background-color: #d4d4d4;
          margin-top: 8px;
          height: 53px;
        }
        .Save-button {
          border-radius: 10px;
          background-color: #000;
          margin-top: 17px;
          justify-content: center;
          align-items: center;
          color: #fff;
          width: 100%;
          white-space: nowrap;
          text-align: center;
          padding: 17px 60px;
          font: 18px Inter, sans-serif;
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

        .label-field {
          display: block;
          width: 100%;
          margin-top: 8px;
          padding: 15px;
          border-radius: 15px;
          background-color: #d4d4d4;
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

      `}</style>
    </>
  );
}

export default ProfileCreation;
