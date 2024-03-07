import './Matches.css';
import React from "react";

function MatchImage({src, alt, customClass = ''}) {
  return <img loading="lazy" src={src} alt={alt} className={`match-image ${customClass}`} />;
}

function BoxSection({children, customClass}) {
  return <section className={`box-section ${customClass}`}>{children}</section>;
}

export default function MatchesOverview() {
  const matchImages = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a70c5ae88960138f4a485be4696a73e28601120eb275aaec5b1fad4e1f0ff601?apiKey=872a26b640bf4d309e24a74b10b52b7f&', alt: 'Match 1 Description' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/adab31c1f754284749000d9e58b5b35f09ba174918763607c964f172e999e397?apiKey=872a26b640bf4d309e24a74b10b52b7f&', alt: 'Match 2 Description' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb600a26c56d01684f02f192da0e325d88358c89173651ef4151559d2b6868c1?apiKey=872a26b640bf4d309e24a74b10b52b7f&', alt: 'Match 3 Description' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f751ab6484d53d60436923d382d6141de10bcd1d0efecfa187ae0c6e7a478f1?apiKey=872a26b640bf4d309e24a74b10b52b7f&', alt: 'Match 4 Description' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2509976262b90eccf7f789bf6283f57a7cc5053143ab1c22bddb1742aa741368?apiKey=872a26b640bf4d309e24a74b10b52b7f&', alt: 'Match 5 Description' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/55078846d7e0b2f22648b8b90b50758417e028160a82af2030a42cff7a1cc1cb?apiKey=872a26b640bf4d309e24a74b10b52b7f&', alt: 'Match 6 Description' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0e89ea583943fd0bef851967079c03542169252b4896902b9c8e998849390116?apiKey=872a26b640bf4d309e24a74b10b52b7f&', alt: 'Match 7 Description' }
  ];

  return (
    <>
      <header className="matches-header">
        <MatchImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="Main match" />
        <h2>Matches</h2>
        {matchImages.map((image, index) => (
          <BoxSection key={index} customClass="match-item">
            <MatchImage src={image.src} alt={image.alt} />
          </BoxSection>
        ))}
        <div className="side-images">
          <MatchImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/66892448305cde07546a8c01f6c1394e046e9a855586368b94d2f4eec2a444da?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="Side match 1" customClass="wide" />
          <MatchImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/db582ec88471777382aabb42ffa7215bd13293f5a85bab36caed37335eb93733?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="Side match 2" />
        </div>
      </header>
      <style jsx>{`
        .matches-header {
          background: linear-gradient(180deg, #f3e3d9 0%, #e6c0a9 42.72%);
          display: flex;
          flex-direction: column;
          max-width: 360px;
          padding: 46px 20px 0;
          align-items: center;
        }
        .matches-header h2 {
          color: #a81c30;
          margin-top: 17px;
          font: 400 25px/80% Inter, sans-serif;
        }
        .box-section {
          background-color: #efd8cb;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          margin-top: 24px;
          padding: 4px;
          display: flex;
          justify-content: center;
        }
        .match-image {
          width: 55px;
          aspect-ratio: 1;
          object-fit: cover;
          border-radius: 50%;
        }
        .wide {
          flex-grow: 1;
          width: auto;
          aspect-ratio: 1.19;
        }
        .side-images {
          display: flex;
          gap: 20px;
          width: 100%;
          justify-content: center;
          margin-top: 7px;
        }
      `}</style>
    </>
  );
}