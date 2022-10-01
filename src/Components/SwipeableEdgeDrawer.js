import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { userActions } from "../Store/user";
import { useDispatch } from "react-redux";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setMobile(event.target.value);
  };

  const saveHandler = () => {
    const user = { name: name, city: city, mobile: mobile };
    //  props.closePanel();
    setOpen(false);
    dispatch(userActions.addUser(user));
    console.log(open);
  };

  const closeHandler = () => {
    setName("");
    setCity("");
    setMobile("");
    props.closePanel();
    setOpen(false);
    console.log(open);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box sx={{ textAlign: "center", pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          {/* <Skeleton variant="rectangular" height="100%" /> */}
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",

              gridTemplateColumns: { sm: "1fr" },
              gap: 2,
            }}
          >
            <TextField
              label="Name"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "50ch" }}
              onChange={nameChangeHandler}
              value={name}
            />
            <TextField
              label="City"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "50ch" }}
              onChange={cityChangeHandler}
              value={city}
            />
            <TextField
              label="Mobile Number"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "50ch" }}
              onChange={phoneChangeHandler}
              value={mobile}
            />
          </Box>
          <Stack spacing={2} direction="row" margin="10px 10px">
            <Button variant="outlined" onClick={saveHandler}>
              Save
            </Button>
            <Button variant="outlined" onClick={closeHandler}>
              Close
            </Button>
          </Stack>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
