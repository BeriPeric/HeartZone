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
    </>
  );
}
export default ChatRoom;
