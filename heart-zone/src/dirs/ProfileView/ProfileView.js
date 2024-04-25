import './ProfileView.css';
import * as React from "react";
import Chats from '../Chats/Chats';
import Matches from '../Matches/Matches';

function ProfileView(props) {

  const profileViewButton = () => {
    window.location.href = '/ProfileView';
  };

  const chatButton = () => {
    window.location.href = '/Chats';
  };

  const mainMatchingButton = () => {
    window.location.href = '/MainMatching';
  };

  const matchesButton = () => {
    window.location.href = '/Matches';
  };

  const saveButton = () => {
    //save profile changes;
  };

  return (
    <>
      <div className="div-profile">
        <button className="profile-button" onClick={profileViewButton}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b65018ac533a5cb3e7291f70c7784c84adfec74c516aa0f555ce90aa442eb3de?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
            className="img-profile"
          />
        </button>
        <div className="div-2-profile">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
            className="img-2-profile"
          />
          <div className="div-3-profile">Profile Preview</div>
          <div className="div-4-profile">
            <img
              src="../../../public/cyberpunk.jpg"
              className="img-3-profile"
            />
            <div className="div-5-profile">
              <div className="div-6-profile">
                <div className="div-7-profile">Ryan Gosling, 43</div>
                <div className="div-8-profile">
                  <div className="div-9-profile">Cyber Sec</div>
                  <div className="div-10-profile">Python</div>
                </div>
              </div>
              <div className="div-11-profile">Linux</div>
            </div>
          </div>
          <div className="div-12-profile" />
          <div className="div-13-profile">
            <button onClick={chatButton}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/183a321dcaf3fe84f003ef2aa03dafe6c65abb5f4cf34a65f37b10a44eeef012?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
                className="img-4-profile"
              />
            </button>
            <button onClick={mainMatchingButton}>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
                className="img-5-profile" onclick="mainMatchingButton();"
              />
            </button>
            <button onClick={matchesButton}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1260858bd7f18fdb94df1b340f434ef48e79704e843537da96c4e21828fb8df6?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
                className="img-6-profile" onclick="matchesButton();"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfileView;
