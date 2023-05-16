import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import '../App.css'

export default function App() {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
      url: "https://icms-image.slatic.net/images/ims-web/e935d74e-ae1a-4c07-a040-1f1feaa27d09.jpg",
    },
    {
      url: "https://lzd-img-global.slatic.net/g/icms/images/ims-web/98944be4-248e-420b-b5f2-6951a0506ae9.jpg_2200x2200q90.jpg_.webp",
    },
    {
      url: "https://lzd-img-global.slatic.net/g/icms/images/ims-web/800a8c29-497c-4cbc-8c54-ba0b3c966a9e.jpg_2200x2200q90.jpg_.webp",
    },
    {
      url: "https://lzd-img-global.slatic.net/g/icms/images/ims-web/a29ac7fc-dfd6-4db5-a9ea-b0bd8c3b64bc.jpg_2200x2200q90.jpg_.webp",
    },
    {
      url: "https://lzd-img-global.slatic.net/g/icms/images/ims-web/883cfd54-19fa-44d6-aaac-7095b6f2ae9a.jpg_2200x2200q90.jpg_.webp",
    },
    {
      url: "https://lzd-img-global.slatic.net/g/icms/images/ims-web/cd6633ad-5265-470b-902c-6a38eef932b7.jpg_2200x2200q90.jpg_.webp",
    },
    {
      url: "https://lzd-img-global.slatic.net/g/icms/images/ims-web/6b274b31-16d0-46cc-89d7-64deaf1d7d86.jpg_2200x2200q90.jpg_.webp",
    },
    {
      url: "https://lzd-img-global.slatic.net/g/icms/images/ims-web/7ec46a61-5a81-4a83-9f89-1abcac88baf8.jpg_2200x2200q90.jpg_.webp",
    },
  ];
  return (
    <div className="BD1">
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="xl">
        <SimpleImageSlider
          width={"100%"}
          height={400}
          images={sliderImages}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          onStartSlide={(index, length) => {
            setImageNum(index);
          }}
          autoPlayDelay={3}
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          
        >
          <Box component="div" sx={{ display: "inline",padding:1 }}>
            <Button
              variant="contained"
              sx={{
                ":hover": {
                  bgcolor: "white", // theme.palette.primary.main
                  color: "black",
                  boxShadow: 2,
                },
                backgroundColor: "white",
                color: "black",
                borderRadius: 20,
                width: 250,
                height: 50,
                fontSize: 15,
              }}
              style={{ justifyContent: "flex-start" }}
              disableElevation
              href="https://pages.lazada.co.th/wow/i/th/LandingPage/lazmall?spm=a2o4m.home.feature_nav.1.4ccd2a802hocWo&scm=1003.4.icms-zebra-5000381-2586275.OTHER_6501017900_7654419"
            >
              <img
                src={
                  "https://icms-image.slatic.net/images/ims-web/9d78cd14-05ee-43ba-a360-61f895a70aef.png"
                }
                alt="my"
                width={"40px"}
              />
              <p>&nbsp;&nbsp;LazMall</p>
            </Button>
          </Box>
          <Box component="div" sx={{ display: "inline",padding:1 }}>
            <Button
              variant="contained"
              sx={{
                ":hover": {
                  bgcolor: "white", // theme.palette.primary.main
                  color: "black",
                  boxShadow: 2,
                },
                backgroundColor: "white",
                color: "black",
                borderRadius: 20,
                width: 250,
                height: 50,
                fontSize: 15,
              }}
              style={{ justifyContent: "flex-start" }}
              disableElevation
              href="https://pages.lazada.co.th/wow/gcp/route/lazada/th/upr_1000345_lazada/channel/th/upr-router/th?spm=a2o4m.home.feature_nav.2.4ccd2a802hocWo&hybrid=1&data_prefetch=true&at_iframe=1&wh_pid=/lazada/channel/th/voucher/claimvoucher&scm=1003.4.icms-zebra-5000381-2586275.OTHER_6501017912_7654419&prefetch_replace=1"
            >
              <img
                src={
                  "https://laz-img-cdn.alicdn.com/images/ims-web/TB12wVshUT1gK0jSZFhXXaAtVXa.png"
                }
                alt="my"
                width={"40px"}
              />
              <p>&nbsp;&nbsp;คูปองลดเพิ่ม</p>
            </Button>
          </Box>
          <Box component="div" sx={{ display: "inline" ,padding:1}}>
            <Button
              variant="contained"
              sx={{
                ":hover": {
                  bgcolor: "white", // theme.palette.primary.main
                  color: "black",
                  boxShadow: 2,
                },
                backgroundColor: "white",
                color: "black",
                borderRadius: 20,
                width: 250,
                height: 50,
                fontSize: 15,
              }}
              style={{ justifyContent: "flex-start" }}
              disableElevation
              href="https://pages.lazada.co.th/wow/i/th/digitalgoods/homepage?spm=a2o4m.home.feature_nav.3.4ccd2a802hocWo&scm=1003.4.icms-zebra-5000381-2586275.OTHER_6501017913_7654419"
            >
              <img
                src={
                  "https://laz-img-cdn.alicdn.com/images/ims-web/TB11DFthO_1gK0jSZFqXXcpaXXa.png"
                }
                alt="my"
                width={"40px"}
              />
              <p>&nbsp;&nbsp;เติม&ดีลอาหาร</p>
            </Button>
          </Box>
          <Box component="div" sx={{ display: "inline",padding:1 }}>
            <Button
              variant="contained"
              sx={{
                ":hover": {
                  bgcolor: "white", // theme.palette.primary.main
                  color: "black",
                  boxShadow: 2,
                },
                backgroundColor: "white",
                color: "black",
                borderRadius: 20,
                width: 250,
                height: 50,
                fontSize: 15,
              }}
              style={{ justifyContent: "flex-start" }}
              disableElevation
              href="https://www.lazada.co.th/blog/?spm=a2o4m.home.feature_nav.4.4ccd2a802hocWo&scm=1003.4.icms-zebra-5000381-2586275.OTHER_6501017904_7654419"
            >
              <img
                src={
                  "https://icms-image.slatic.net/images/ims-web/a13d12e1-91d1-4240-b22f-46233a012e89.png"
                }
                alt="my"
                width={"40px"}
              />
              <p>&nbsp;&nbsp;LazBlog</p>
            </Button>
          </Box>
          <Box component="div" sx={{ display: "inline",padding:1 }}>
            {" "}
            <Button
              variant="contained"
              sx={{
                ":hover": {
                  bgcolor: "white", // theme.palette.primary.main
                  color: "black",
                  boxShadow: 2,
                },
                backgroundColor: "white",
                color: "black",
                borderRadius: 20,
                width: 250,
                height: 50,
                fontSize: 15,
              }}
              style={{ justifyContent: "flex-start" }}
              disableElevation
              href="https://pages.lazada.co.th/wow/gcp/route/lazada/th/upr_1000345_lazada/channel/th/upr-router/th?spm=a2o4m.home.feature_nav.5.4ccd2a802hocWo&hybrid=1&data_prefetch=true&at_iframe=1&wh_pid=/lazada/channel/th/search/LazPick2&scm=1003.4.icms-zebra-5000381-2586275.OTHER_6501017915_7654419&prefetch_replace=1"
            >
              <img
                src={
                  "https://img.alicdn.com/imgextra/i1/O1CN01yvjCS71LsB10MJoJt_!!6000000001354-2-tps-150-150.png"
                }
                alt="my"
                width={"40px"}
              />
              <p>&nbsp;&nbsp;ร้านค้าแนะนำ</p>
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
