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
        <p>
          <span className="platorm">TWITTER: </span>
          <span id="twitter" className="handles">
            gitahievans
          </span>
        </p>
        <p>
          <span className="platorm">SLACK: </span>
          <span id="slack" className="handles">
            gitahievans
          </span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
