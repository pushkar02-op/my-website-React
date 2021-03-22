import React from "react";
import makeStyles from "@material-ui/core";
const useStyles = makeStyles(() => ({
  Navbar: {
    display: "flex",
  },
}));
export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.Navbar}>
      <h3>This is Navbar</h3>
      <ul>
        <li>About</li>
        <li>Resume</li>
        <li>Projects</li>
        <li>Blogs</li>
      </ul>
    </div>
  );
}
