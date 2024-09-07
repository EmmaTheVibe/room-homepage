import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Link } from "react-scroll";
import { navLinks } from "../utils/data";

export default function DrawerTab({ openDrawer, setOpenDrawer }) {
  return (
    <div>
      <SwipeableDrawer
        anchor={"top"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        PaperProps={{
          sx: {
            backgroundColor: "black",
          },
        }}
      >
        <div className="drawer" onKeyDown={() => setOpenDrawer(false)}>
          <div className="container">
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setOpenDrawer(false)}
            >
              <path
                d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
                fill="#000"
                fillRule="evenodd"
                opacity=".201"
              />
            </svg>

            <div className="drawer-tabs">
              {navLinks.map((navLink, index) => (
                <Link to={navLink.to} smooth={true} duration={500} key={index}>
                  <p onClick={() => setOpenDrawer(false)}>{navLink.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
