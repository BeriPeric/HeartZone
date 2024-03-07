import './ProfileView.css';
import * as React from "react";

function ProfileView(props) {
  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b65018ac533a5cb3e7291f70c7784c84adfec74c516aa0f555ce90aa442eb3de?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
          className="img"
        />
        <div className="div-2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f787569b1bf44c4805215a438a664f49df5881ea4656463c0c60debf40a15710?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
            className="img-2"
          />
          <div className="div-3">Profile Preview</div>
          <div className="div-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/88a79b937da8cf249598ea4d60a0aa5e403334a452969f157323ec1a67050c76?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
              className="img-3"
            />
            <div className="div-5">
              <div className="div-6">
                <div className="div-7">Peyton, 21</div>
                <div className="div-8">
                  <div className="div-9">Comp Sci</div>
                  <div className="div-10">C++</div>
                </div>
              </div>
              <div className="div-11">Linux</div>
            </div>
          </div>
          <div className="div-12" />
        </div>
      </div>
      <style jsx>{`
        .div {
          background: linear-gradient(180deg, #f3e3d9 0%, #e6c0a9 42.72%);
          display: flex;
          max-width: 360px;
          padding-top: 14px;
          flex-direction: column;
        }
        .img {
          aspect-ratio: 1.35;
          object-fit: auto;
          object-position: center;
          width: 34px;
          fill: #a81c30;
          margin-left: 13px;
        }
        .div-2 {
          border-radius: 100px 0px 0px 0px;
          background-color: #fff;
          display: flex;
          margin-top: 7px;
          width: 100%;
          flex-direction: column;
          padding: 9px 20px 0;
        }
        .img-2 {
          aspect-ratio: 1.22;
          object-fit: auto;
          object-position: center;
          width: 72px;
          align-self: center;
        }
        .div-3 {
          color: #a81c30;
          align-self: center;
          margin-top: 16px;
          white-space: nowrap;
          font: 400 25px/80% Inter, sans-serif;
        }
        .div-4 {
          disply: flex;
          flex-direction: column;
          fill: url(<path-to-image>), lightgray 50% / cover no-repeat;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 0.74;
          margin-top: 18px;
          width: 100%;
          padding-bottom: 23px;
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
          gap: 13px;
          padding: 80px 77px 0 11px;
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
        }
        .div-8 {
          display: flex;
          margin-top: 12px;
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
          padding: 7px 22px 1px;
        }
        .div-10 {
          font-family: Inter, sans-serif;
          border-radius: 55px 55px 0px 0px;
          background-color: #e9be23;
          justify-content: center;
          flex-grow: 1;
          padding: 6px 12px;
        }
        .div-11 {
          border-radius: 55px 55px 0px 0px;
          background-color: #6b37ff;
          margin-top: 341px;
          justify-content: center;
          color: #fbf6ff;
          white-space: nowrap;
          padding: 6px 15px;
          font: 400 15px Inter, sans-serif;
        }
        .div-12 {
          background-color: #efd8cb;
          height: 190px;
        }
      `}</style>
    </>
  );
}
export default ProfileView;
