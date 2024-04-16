import './MainMatching.css';
import * as React from "react";
import Chats from '../Chats/Chats';
import Matches from '../Matches/Matches';
import ProfileView from '../ProfileView/ProfileView';


function MainMatching(props) {

  const chatButton = () => {
    window.location.href = '/Chats';
  };

  const mainMatchingButton = () => {
    window.location.href = '/MainMatching';
  };

  const matchesButton = () => {
    window.location.href = '/Matches';
  };

  const profileViewButton = () => {
    window.location.href = '/ProfileView';
  };

  return (
    <>
      <div className="div">
        <button className="profile-button" onClick={profileViewButton}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b65018ac533a5cb3e7291f70c7784c84adfec74c516aa0f555ce90aa442eb3de?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
            className="img"
          />
        </button>
        <div className="div-2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
            className="img-2"
          />
          <div className="div-3">Everyone</div>
          <div className="div-4">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b01892248bead1e5710d226ec699587a01f987c4e136db5a08664fc6dc781dec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01892248bead1e5710d226ec699587a01f987c4e136db5a08664fc6dc781dec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01892248bead1e5710d226ec699587a01f987c4e136db5a08664fc6dc781dec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01892248bead1e5710d226ec699587a01f987c4e136db5a08664fc6dc781dec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01892248bead1e5710d226ec699587a01f987c4e136db5a08664fc6dc781dec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01892248bead1e5710d226ec699587a01f987c4e136db5a08664fc6dc781dec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01892248bead1e5710d226ec699587a01f987c4e136db5a08664fc6dc781dec?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01892248bead1e5710d226ec699587a01f987c4e136db5a08664fc6dc781dec?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
              className="img-3"
            />
            <div className="div-5">
              <div className="div-6">
                <div className="div-7">
                  Dakota, 20
                </div>
                <div className="div-8">
                  <div className="div-9">CyberSec</div>
                  <div className="div-10">Java</div>
                </div>
              </div>
              <div className="div-11">Mac</div>
            </div>
          </div>
          <div className="div-12" />
          <div className="div-13">
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
      <style jsx>{`
        .div {
          background: linear-gradient(180deg, #f3e3d9 0%, #e6c0a9 42.72%);
          display: flex;
          max-width: 360px;
          padding-top: 14px;
          flex-direction: column;
          align-items: center;
        }
        .profile-button {
          width: 60px;
          border: none;
          align-self: start;
        }
        .img {
          aspect-ratio: 1.35;
          object-position: center;
          fill: #a81c30;
        }
        .div-2 {
          border-radius: 100px 0px 0px 0px;
          background-color: #fff;
          display: flex;
          margin-top: 7px;
          width: 100%;
          flex-direction: column;
          align-items: center;
          padding: 9px 20px;
        }
        .img-2 {
          aspect-ratio: 1.22;
          object-fit: auto;
          object-position: center;
          width: 72px;
        }
        .div-3 {
          color: #a81c30;
          margin-top: 17px;
          font: 400 25px/80% Inter, sans-serif;
        }
        .div-4 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: stretch;
          position: relative;
          display: flex;
          margin-top: 10px;
          width: 100%;
          text-align: center;
        }
        .img-3 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-5 {
          position: relative;
          background: linear-gradient(
            180deg,
            rgba(33, 33, 33, 0) 0%,
            rgba(33, 33, 33, 0.58) 91%,
            #212121 100%
          );
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          padding: 80px 66px 0 11px;
        }
        .div-6 {
          display: flex;
          margin-top: 306px;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: 0%;
        }
        .div-7 {
          color: #fff;
          font: 500 25px Inter, sans-serif;
          text-align: left;
          padding: 5px;
        }
        .div-8 {
          display: flex;
          margin-top: 13px;
          gap: 13px;
          font-size: 15px;
          color: #fbf6ff;
          font-weight: 400;
          white-space: nowrap;
        }
        .div-9 {
          font-family: Inter, sans-serif;
          border-radius: 55px 55px 0px 0px;
          background-color: #4d91f6;
          flex-grow: 1;
          padding: 7px 21px 1px;
        }
        .div-10 {
          font-family: Inter, sans-serif;
          border-radius: 55px 55px 0px 0px;
          background-color: #e9be23;
          justify-content: center;
          flex-grow: 1;
          padding: 6px 11px;
        }
        .div-11 {
          border-radius: 55px 55px 0px 0px;
          background-color: #6b37ff;
          margin-top: 341px;
          justify-content: center;
          color: #fbf6ff;
          white-space: nowrap;
          padding: 6px 19px;
          font: 400 15px Inter, sans-serif;
        }
        .div-12 {
          background-color: #efd8cb;
          align-self: stretch;
          height: 126px;
        }
        .div-13 {
          display: flex;
          margin-top: 10px;
          width: 100%;
          max-width: 255px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .img-4 {
          aspect-ratio: 1.14;
          object-fit: auto;
          object-position: center;
          width: 100%;
          fill: #d9d9d9;
          stroke-width: 1px;
          stroke: #d9d9d9;
          border-color: rgba(217, 217, 217, 1);
          border-style: solid;
          border-width: 1px;
          flex: 1;
          margin: auto 0;
        }
        .img-5 {
          aspect-ratio: 0.79;
          object-fit: auto;
          object-position: center;
          width: 100%;
          flex: 1;
        }
        .img-6 {
          aspect-ratio: 1.23;
          object-fit: auto;
          object-position: center;
          width: 100%;
          fill: #fff;
          flex: 1;
          margin: auto 0;
        }
      `}</style>
    </>
  );
}
export default MainMatching;
