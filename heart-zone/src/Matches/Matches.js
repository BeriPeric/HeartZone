import './Matches.css';
import React from "react";


function Avatar({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
}

function Matches() {
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
      <style jsx>{`
        .cardContainer {
          background: linear-gradient(180deg, #f3e3d9 0%, #e6c0a9 42.72%);
          display: flex;
          max-width: 100%;
          padding-top: 46px;
          flex-direction: column;
        }
        .cardContent {
          border-radius: 100px 0px 0px 0px;
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
        }
        .avatarLarge {
          aspect-ratio: 1.22;
          object-fit: cover;
          width: fit-content;
        }
        .matchesTitle {
          color: #a81c30;
          margin-top: 17px;
          font: 400 25px/80% Inter, sans-serif;
        }
        .matchesContainer {
          align-self: stretch;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
          padding: 0 8px;
        }
        .matchAvatar {
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #d6b29e;
          display: flex;
          margin-top: 24px;
          flex-direction: column;
          justify-content: center;
          align-items: start;
          padding: 4px 60px 4px 11px;
        }
        .avatarSmall {
          aspect-ratio: 1;
          object-fit: cover;
          width: 55px;
          border-radius: 50%;
        }
        .actionsContainer {
          display: flex;
          width: 141px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
          margin: 7px 0 0 50px;
        }
        .actionIcon {
          aspect-ratio: 1;
          object-fit: cover;
          width: 55px;
        }
      `}</style>

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

            <div className="actionsContainer">
              {avatarsInfo.slice(8).map((avatar, index) => (
                <Avatar src={avatar.src} alt={avatar.alt} className="actionIcon" key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Matches;