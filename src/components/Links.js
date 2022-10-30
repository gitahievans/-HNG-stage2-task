import React from "react";
import { ztatg, ztimg, linksCont } from "../styles/linksStyle";
import { Button, Grid, Link } from "@mui/material";

function Links() {
  return (
    <Grid style={linksCont}>
      <Grid>
        <Button
          href="https://training.zuri.team/"
          variant="contained"
          color="primary"
        >
          Zuri Training
        </Button>
        <p>Welcome to Zuri Training</p>
      </Grid>
      <Grid>
        {" "}
        <Button
          href="http://books.zuri.team"
          variant="contained"
          color="primary"
        >
          Zuri bOOKS
        </Button>
        <p>Learn all about design and coding</p>
      </Grid>
      <Grid>
        <Button
          href="https://books.zuri.team/python-for-beginners?ref_id=<gitahievans> "
          variant="contained"
          color="primary"
        >
          Python for beginners
        </Button>
      </Grid>{" "}
      <Grid>
        <Button
          href="https://background.zuri.team"
          variant="contained"
          color="primary"
        >
          Background
        </Button>
      </Grid>
      <Grid>
        <Button
          href="https://books.zuri.team/design-rules"
          variant="contained"
          color="primary"
        >
          Books designs
        </Button>
      </Grid>
    </Grid>
  );
}

export default Links;
