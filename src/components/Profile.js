import React from "react";
import { Grid, Paper } from "@mui/material";
import imageStyle from "../styles/imageStyle";
import paperStyle from "../styles/paperStyle";
import mainGridStyle from "../styles/mainGrid";
import { platform, handles } from "../styles/socialsStyle";

function Profile() {
  return (
    <Grid style={mainGridStyle}>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <img
            id="profile_img"
            src="https://images.pexels.com/photos/904332/pexels-photo-904332.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="me"
            style={imageStyle}
          />
          <p id="twitter">
            <span style={platform}>Twitter: </span>
            <span style={handles}>gitahievans</span>
          </p>
          <p id="slack">
            <span style={platform}>Slack: </span>
            <span style={handles}>gitahievans</span>
          </p>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Profile;
