import './ChatRoom.css';
import * as React from "react";
import Chats from '../Chats/Chats';
import Matches from '../Matches/Matches';


function ChatRoom(props) {

  const backButton = () => {
    window.location.href = '/Chats';
  };

  return (
    <>
      <div className="div">
        <button className="back-button" onClick={backButton}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1768e2983050c9c5cd8f815fcacc75eeee06121531f87c96613fde70f191d83?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
            className="img"
          />
        </button>
        <div className="div-2">
          <div className="div-3">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a70c5ae88960138f4a485be4696a73e28601120eb275aaec5b1fad4e1f0ff601?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
              className="img-2"
            />
            <div className="div-4">Dakota, 20</div>
          </div>
          <div className="div-5">
            <div className="div-6">
            </div>
            <div className="div-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3910ef3172957411e6e899d9ef304658ece557220993e39a92480d9a1e9104ca?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3910ef3172957411e6e899d9ef304658ece557220993e39a92480d9a1e9104ca?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3910ef3172957411e6e899d9ef304658ece557220993e39a92480d9a1e9104ca?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3910ef3172957411e6e899d9ef304658ece557220993e39a92480d9a1e9104ca?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3910ef3172957411e6e899d9ef304658ece557220993e39a92480d9a1e9104ca?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3910ef3172957411e6e899d9ef304658ece557220993e39a92480d9a1e9104ca?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3910ef3172957411e6e899d9ef304658ece557220993e39a92480d9a1e9104ca?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3910ef3172957411e6e899d9ef304658ece557220993e39a92480d9a1e9104ca?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
                className="img-4"
              />
              <div className="div-11" />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7c98ce0e9024943145b61ab0db498f2b6a9e59a5ebbb44971d19ac2581e2c639?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c98ce0e9024943145b61ab0db498f2b6a9e59a5ebbb44971d19ac2581e2c639?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c98ce0e9024943145b61ab0db498f2b6a9e59a5ebbb44971d19ac2581e2c639?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c98ce0e9024943145b61ab0db498f2b6a9e59a5ebbb44971d19ac2581e2c639?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c98ce0e9024943145b61ab0db498f2b6a9e59a5ebbb44971d19ac2581e2c639?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c98ce0e9024943145b61ab0db498f2b6a9e59a5ebbb44971d19ac2581e2c639?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c98ce0e9024943145b61ab0db498f2b6a9e59a5ebbb44971d19ac2581e2c639?apiKey=872a26b640bf4d309e24a74b10b52b7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c98ce0e9024943145b61ab0db498f2b6a9e59a5ebbb44971d19ac2581e2c639?apiKey=872a26b640bf4d309e24a74b10b52b7f&"
                className="img-5"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background: linear-gradient(180deg, #f3e3d9 0%, #e6c0a9 42.72%);
          display: flex;
          max-width: 100%;
          padding-top: 16px;
          flex-direction: column;
        }
        .back-button {
          border: none;
          align-self: start;
        }
        .img {
          aspect-ratio: 0.72;
          object-fit: auto;
          width: 18px;
          stroke-width: 3px;
          stroke: #a81c30;
          border-color: rgba(168, 28, 48, 1);
          border-style: none;
          margin-left: 14px;
        }
        .div-2 {
          border-radius: 100px 0px 0px 0px;
          background-color: #fff;
          display: flex;
          margin-top: 5px;
          width: 100%;
          flex-direction: column;
          padding: 22px 8px;
        }
        .div-3 {
          align-self: start;
          display: flex;
          margin-left: 22px;
          gap: 0px;
          font-size: 25px;
          color: #a81c30;
          font-weight: 400;
          white-space: nowrap;
          line-height: 80%;
        }
        .img-2 {
          aspect-ratio: 1.33;
          object-fit: auto;
          object-position: center;
          width: 132px;
          fill: url(<path-to-image>),
            lightgray -18px -22.486px / 158.182% 148.151% no-repeat;
          max-width: 100%;
        }
        .div-4 {
          font-family: Inter, sans-serif;
          align-self: start;
          flex-grow: 1;
        }
        .div-5 {
          background-color: #efd8cb;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 80px 0 10px;
        }
        .div-6 {
          display: flex;
          margin-top: 377px;
          flex-direction: column;
          font-size: 15px;
          color: #584b4d;
          font-weight: 300;
          padding: 0 9px;
        }

        .img-3 {
          aspect-ratio: 1.19;
          object-fit: auto;
          object-position: center;
          width: 51px;
          margin-top: 6px;
        }
        .div-9 {
          font-family: Inter, sans-serif;
          border-radius: 30px;
          background-color: #fff;
          justify-content: center;
          padding: 10px 18px;
        }
        .div-10 {
          display: flex;
          margin-right: 11px;
          align-items: start;
          gap: 7px;
        }
        .img-4 {
          aspect-ratio: 1.15;
          object-fit: auto;
          object-position: center;
          width: 31px;
        }
        .div-11 {
          border-radius: 30px;
          background-color: #fff;
          width: 250px;
          height: 30px;
        }
        .img-5 {
          aspect-ratio: 0.93;
          object-fit: auto;
          object-position: center;
          width: 29px;
          align-self: stretch;
        }
      `}</style>
    </>
  );
}
export default ChatRoom;
