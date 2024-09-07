import { useState } from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import DrawerTab from "./DrawerTab";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const matches = useMediaQuery("(min-width: 1024px)");
  const lg = useMediaQuery("(min-width: 700px)");
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (event) => {
    if (
      lg ||
      (event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift"))
    ) {
      return;
    }

    setOpenDrawer(!openDrawer);
  };

  return (
    <div className="app">
      {!lg && (
        <DrawerTab
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          toggleDrawer={toggleDrawer}
        />
      )}
      <NavBar lg={lg} toggleDrawer={toggleDrawer} />
      <Home matches={matches} />
      <About />
    </div>
  );
}

export default App;
