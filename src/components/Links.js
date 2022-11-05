import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="links-container">
      <div className="training">
        <Button
          id="btn__zuri"
          href="https://training.zuri.team/"
          variant="contained"
          color="primary"
        >
          Zuri Training
        </Button>
        <p className="info">Welcome to Zuri Training</p>
      </div>
      <div className="books">
        {" "}
        <Button
          id="books"
          href="http://books.zuri.team"
          variant="contained"
          color="primary"
        >
          Zuri bOOKS
        </Button>
        <p className="info">Learn all about design and coding</p>
      </div>
      <div className="python">
        <Button
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=<gitahievans> "
          variant="contained"
          color="primary"
        >
          Python for beginners
        </Button>

        <p className="info">
          I am an experienced programmer with over 10 years of software
          development. Learn python fundamentals from one of the best
        </p>
      </div>{" "}
      <div className="background">
        <Button
          id="pitch"
          href="https://background.zuri.team"
          variant="contained"
          color="primary"
        >
          Background checks
        </Button>
        <p className="info">
          I do quality background checks on coders and help you select the best
          of the best
        </p>
      </div>
      <div className="bk-design">
        <Button
          id="book__design"
          href="https://books.zuri.team/design-rules"
          variant="contained"
          color="primary"
        >
          Design books
        </Button>
        <p className="info">
          Get a free design book today and become a pro designer
        </p>
      </div>
      <div>
        <Button id="contact" href="/contact" variant="contained">
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default Links;
