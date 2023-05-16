import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../App.css";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar
            sx={{
              justifyContent: "flex-end",
              width:'100%',
              alignSelf:'center',
              backgroundColor: "#EFEFEF",
              color: "#0B0A6A",
              mt: -2,
              fontSize: 12,
              maxHeight:'20px'
            }}
          >
            <p>ช็อปคุ้มกว่าเดิมบนแอป</p>&nbsp;&nbsp;&nbsp;&nbsp;
            <p>ขายสินค้ากับลาซาด้า</p>&nbsp;&nbsp;&nbsp;&nbsp;
            <p className="p_head">ช่วยเหลือ</p>&nbsp;&nbsp;&nbsp;&nbsp;
            <p className="p_head">ติดตามสินค้า</p>&nbsp;&nbsp;&nbsp;&nbsp;
            <p className="p_head">ลงชื่อเข้าใช้</p>&nbsp;&nbsp;&nbsp;&nbsp;
            <p className="p_head">สมัครสมาชิก</p>&nbsp;&nbsp;&nbsp;&nbsp;
            <p className="p_head">CHANGE LANGUAGE</p>
          </Toolbar>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              backgroundColor: "#FFFFFF",
              mt: -3.1,
              height: 130,
              display: "flex",
              flexWrap: "nowrap",
              width:'100%',
              alignSelf:'center',
            }}
          >
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1KB2laMFY.1VjSZFnXXcFHXXa.png"
              style={{ width: "160px", height: "50px" ,marginLeft:"100px", marginTop:"-20px"}}
            />

            <Box
              sx={{
                width: 780,
                height: 55,
                maxWidth: "100%",
                backgroundColor: "#E8EDF0",
                borderRadius: 1,
                display: "flex",
                flexWrap: "nowrap",
                mt:-5
              }}
            >
              <TextField
                sx={{
                  "& fieldset": { border: "none" },
                  width: 750,
                }}
                placeholder="ค้นหาในลาซาด้า"
              />{" "}
              <IconButton
                sx={{
                  backgroundColor: "#F67318",
                  color: "white",
                  width: "50px",
                  height: "55px",
                  borderRadius: 1,
                }}
              >
                <SearchIcon />
              </IconButton>
            </Box>

            <IconButton>
              <ShoppingCartOutlinedIcon
                sx={{
                  backgroundColor: "white",
                  color: "#001685",
                  width: "40px",
                  height: "45px",
                  borderRadius: 1,
                  mt:-3,
                
                }}
              />
            </IconButton>
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1DcZESBr0gK0jSZFnXXbRRXXa.jpg"
              style={{ width: "220px", height: "50px",marginTop:"-22px" }}
            />
            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
