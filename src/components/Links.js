import React from "react";
import { Button } from "@mui/material";

function Links() {
  return (
    <div className="links-container">
      <div className="training">
        <Button
          href="https://training.zuri.team/"
          variant="contained"
          color="primary"
        >
          Zuri Training
        </Button>
        <p>Welcome to Zuri Training</p>
      </div>
      <div className="books">
        {" "}
        <Button
          href="http://books.zuri.team"
          variant="contained"
          color="primary"
        >
          Zuri bOOKS
        </Button>
        <p>Learn all about design and coding</p>
      </div>
      <div className="python">
        <Button
          href="https://books.zuri.team/python-for-beginners?ref_id=<gitahievans> "
          variant="contained"
          color="primary"
        >
          Python for beginners
        </Button>
      </div>{" "}
      <div className="background">
        <Button
          href="https://background.zuri.team"
          variant="contained"
          color="primary"
        >
          Background
        </Button>
      </div>
      <div className="bk-design">
        <Button
          href="https://books.zuri.team/design-rules"
          variant="contained"
          color="primary"
        >
          Books designs
        </Button>
      </div>
    </div>
  );
}

export default Links;
