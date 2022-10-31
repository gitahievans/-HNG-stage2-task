import React from "react";

function Profile() {
  return (
    <div className="pfl-container">
      <div className="pfl_details" align="center">
        <img
          id="profile_img"
          src="https://images.pexels.com/photos/1377457/pexels-photo-1377457.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="me"
        />
        <p id="twitter">
          <span className="platorm">TWITTER: </span>
          <span className="handles">gitahievans</span>
        </p>
        <p id="slack">
          <span className="platorm">SLACK: </span>
          <span className="handles">gitahievans</span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
