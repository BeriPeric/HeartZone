import './ProfileCreation.css';
import ProfileView from '../ProfileView/ProfileView';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, onClick, className }) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
);

const InputField = ({ label, type = 'text' }) => (
  <>
    <label htmlFor={label.toLowerCase()} className="input-label">{label}</label>
    <input type={type} id={label.toLowerCase()} className="input-field" />
  </>
);

const ProfileCreation = () => {

  const navigate = useNavigate();

  const handleSaveClick = () => {
    navigate('/ProfileView');
  };

  return (
    <>
      <div className="div-creation">
        <div className="div-2-creation">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
            className="img-creation"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1eee2ddca401cf32ddb22a135089de6e9e48ea256846ab1227af55ed610599?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
            className="img-2-creation"
          />
        </div>
        <div className="div-3-creation">
          <div className="div-4-creation">Create Your Profile</div>
          <div className="div-5-creation">PHOTO</div>
          <label htmlFor="fileUpload" className="file-upload-button">
            <img srcSet="
            https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, 
            https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, 
            https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, 
            https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, 
            https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, 
            https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, 
            https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, 
            https://cdn.builder.io/api/v1/image/assets/TEMP/ef74faa8-aca0-4292-95eb-693493cf1f1f?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
          alt="Choose File"
          className="file-upload-image"
        />
        </label>
        <input type="file" id="fileUpload" name="fileUpload" accept=".jpg, .jpeg, .png" style={{ display: 'none' }} />

    
        <form className="form-profileChoices">
          <label for="GENDER">CHOOSE YOUR GENDER:</label>
          <select id="GENDER" name="GENDER">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label for="GENDER">WHO ARE YOU INTERESTED IN?:</label>
          <select id="GENDER" name="GENDER">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <InputField label="PROFESSION" type="profession" />

          <label for="MAJOR">CHOOSE YOUR MAJOR:</label>
          <select id="MAJOR" name="MAJOR">
            <option value="Software Engineering">Software Engineering</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Data Science">Data Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="other">Other</option>
          </select>

          <InputField label="SCHOOL" type="school" />

          <label for="COMPUTER OPERATING SYSTEM">CHOOSE YOUR FAVORITE COMPUTER OS:</label>
          <select id="OS" name="OS">
            <option value="Windows">Windows</option>
            <option value="macOS">macOS</option>
            <option value="Linux">Linux</option>
            <option value="Lindows">Lindows</option>
            <option value="Other">Other</option>
          </select>

          <label for="CODING LANGUAGE">CHOOSE YOUR FAVORITE CODING LANGUAGE:</label>
          <select id="OS" name="OS">
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
            <option value="C#">C#</option>
            <option value="Php">PHP</option>
            <option value="Ruby">Ruby</option>
            <option value="Kotlin">Kotlin</option>
            <option value="GO">GO</option>
          </select>

          <button text="Save" className="Save-button" onClick={handleSaveClick}>Save</button>

          </form>

        </div>
      </div>
    </>
  );
}

export default ProfileCreation;
