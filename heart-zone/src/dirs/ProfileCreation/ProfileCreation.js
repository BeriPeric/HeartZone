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
    </>
  );
}

export default ProfileCreation;
