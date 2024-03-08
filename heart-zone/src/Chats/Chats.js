import './Chats.css';

import React from 'react';


function Chats(props) {
  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
          className="img"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3abecbac-a665-4c6a-865d-b3e06d7fabec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3abecbac-a665-4c6a-865d-b3e06d7fabec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3abecbac-a665-4c6a-865d-b3e06d7fabec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3abecbac-a665-4c6a-865d-b3e06d7fabec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3abecbac-a665-4c6a-865d-b3e06d7fabec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3abecbac-a665-4c6a-865d-b3e06d7fabec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3abecbac-a665-4c6a-865d-b3e06d7fabec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3abecbac-a665-4c6a-865d-b3e06d7fabec?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
          className="img-2"
        />
      </div>
      <style jsx>{`
        .div {
          background: linear-gradient(180deg, #f3e3d9 0%, #e6c0a9 42.72%);
          display: flex;
          max-width: 100%;
          flex-direction: column;
        }
        .img {
          aspect-ratio: 1.22;
          object-fit: auto;
          object-position: center;
          width: 72px;
          align-self: center;
        }
        .img-2 {
          aspect-ratio: 0.5;
          object-fit: auto;
          object-position: center;
          width: 100%;
          margin-top: 17px;
        }
      `}</style>
    </>
  );
}
export default Chats;
