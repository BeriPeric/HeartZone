import './Matches.css';
import React from "react";
import Chats from '../Chats/Chats';
import ProfileView from '../ProfileView/ProfileView';

function Avatar({ src, alt, className }) {
  
  return <img src={src} alt={alt} className={className} loading="lazy" />;
}

function Matches() {

  const chatButton = () => {
    window.location.href = '/Chats';
  };

  const mainMatchingButton = () => {
    window.location.href = '/MainMatching';
  };

  const matchesButton = () => {
    window.location.href = '/Matches';
  };

  const avatarsInfo = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&", alt: "Profile avatar" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a70c5ae88960138f4a485be4696a73e28601120eb275aaec5b1fad4e1f0ff601?apiKey=872a26b640bf4d309e24a74b10b52b7f&", alt: "Match avatar 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/adab31c1f754284749000d9e58b5b35f09ba174918763607c964f172e999e397?apiKey=872a26b640bf4d309e24a74b10b52b7f&", alt: "Match avatar 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb600a26c56d01684f02f192da0e325d88358c89173651ef4151559d2b6868c1?apiKey=872a26b640bf4d309e24a74b10b52b7f&", alt: "Match avatar 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f751ab6484d53d60436923d382d6141de10bcd1d0efecfa187ae0c6e7a478f1?apiKey=872a26b640bf4d309e24a74b10b52b7f&", alt: "Match avatar 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2509976262b90eccf7f789bf6283f57a7cc5053143ab1c22bddb1742aa741368?apiKey=872a26b640bf4d309e24a74b10b52b7f&", alt: "Match avatar 5" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/55078846d7e0b2f22648b8b90b50758417e028160a82af2030a42cff7a1cc1cb?apiKey=872a26b640bf4d309e24a74b10b52b7f&", alt: "Match avatar 6" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e89ea583943fd0bef851967079c03542169252b4896902b9c8e998849390116?apiKey=872a26b640bf4d309e24a74b10b52b7f&", alt: "Match avatar 7" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/66892448305cde07546a8c01f6c1394e046e9a855586368b94d2f4eec2a444da?apiKey=872a26b640bf4d309e24a74b10b52b7f&", alt: "Action icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&", alt: "Action icon 2" },
  ];

  return (
    <>
      <div className="cardContainer">
        <div className="cardContent">
          <Avatar src={avatarsInfo[0].src} alt={avatarsInfo[0].alt} className="avatarLarge" />

          <h2 className="matchesTitle">Matches</h2>
          
          <div className="matchesContainer">
            {avatarsInfo.slice(1, 8).map((avatar, index) => (
              <div className="matchAvatar" key={index}>
                <Avatar src={avatar.src} alt={avatar.alt} className="avatarSmall" />
              </div>
            ))}

            <div className="div-13-matches">
            <button onClick={chatButton}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/183a321dcaf3fe84f003ef2aa03dafe6c65abb5f4cf34a65f37b10a44eeef012?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
                className="img-4"
              />
            </button>
            <button onClick={mainMatchingButton}>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
                className="img-5" onclick="mainMatchingButton();"
              />
            </button>
            <button onClick={matchesButton}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1260858bd7f18fdb94df1b340f434ef48e79704e843537da96c4e21828fb8df6?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
                className="img-6" onclick="matchesButton();"
              />
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Matches;