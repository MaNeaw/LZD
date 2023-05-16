import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import '../App.css'

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Item></Item>
      </Grid>
      <Grid item xs={3}>
        <Item></Item>
      </Grid>
      <Grid item xs={3}>
        <Item></Item>
      </Grid>
      <Grid item xs={3}>
        <Item></Item>
      </Grid>
    </React.Fragment>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"© Lazada 2023"}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <div>
      <Box
        sx={{
          
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor:'white'
        }}
      >
        <h4>วิธีการชำระเงิน</h4>
        <img 
      src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*RLWLh8RWSXEQyaBPL3NF0g.jpeg"
      alt="new"
      style={{ width: "30%", height: "30%" }} 
      />
      <h4>Delivery Services</h4>
      <img 
      src="https://media.jobthai.com/v1/images/logo-pic-map/174260_logo_20220318103239.jpeg?type=webp"
      alt="new"
      style={{ width: "100px", height: "100px" }} 
      />
      <img 
      src="https://www.khaosod.co.th/wpapp/uploads/2021/08/image1-348.jpg"
      alt="new"
      style={{ width: "100px", height: "100px" }} 
      />
      <img 
      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTW1uXo-ougo1LINNoQK3K8k3C-j_zPaV7gca2dnJH9CMYpx1Mc"
      alt="new"
      style={{ width: "100px", height: "100px" }} 
      />
      <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaa8FnldUcPV1QmBdBWdldhI_b-7uZq53oekt3fOAY54C0sTQV"
      alt="new"
      style={{ width: "100px", height: "100px" }} 
      />
      <img 
      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwTxmm9Q8cvii5VfrEffSL12dM0Swy_O8HrDQ7ZH8Q0Yjxzv8R"
      alt="new"
      style={{ width: "100px", height: "100px" }} 
      />
      <img 
      src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiBQ1rul3kwWvMm7XfEcjAdV1Sc5Q7M5Nn096we2PkfAi6wviT"
      alt="new"
      style={{ width: "100px", height: "100px" }} 
      />

      </Box>

      <Box sx={{ flexGrow: 1 ,backgroundColor:'#ECECEC',textAlign:'left'}}>
        <Grid container spacing={2}>
          <Grid xs={6} md={3}>
              {" "}
              <h4>
                ประสบการณ์การช้อปปิ้งที่ดีที่สุดที่ลาซาด้าประเทศไทย ลาซาด้า
                นิยามใหม่ของ “การช้อปที่แสนสะดวก”
              </h4>
              <p className="_p_f">
                ในขณะที่การช้อปปิ้งออนไลน์แพร่หลายมากขึ้นลาซาด้ประเทศไทยมีความมุ่งมั่นที่จะตอบโจทย์ความต้องการของผู้บริโภคอยู่เสมอ
                เราพยายามอย่างเต็มที่เพื่อให้ลูกค้าได้รับความพึงพอใจสูงสุดผ่านการทำธุรกรรมที่ราบรื่น
                ผนวกกับการกำหนดราคาสินค้าที่น่าดึงดูด เรามีการพัฒนา
                ประเภทของสินค้า ที่วางจำหน่ายใ นราคาที่ดีที่สุด
                เพื่อสร้างความพึงพอใจให้กับลูกค้าของเรา
                พร้อมกับกิจกรรมที่น่าดึงดูดใจ อาทิ ดีลเด็ด แฟลชเซลล์
                และโปรโมชั่นดีๆ ที่มีอย่างต่อเนื่อง ด้วยโลโก้ใหม่รูป “หัวใจ”
                ที่แสดงตัวอักษร “L” เป็นกล่องสามมิติ
                ลาซาด้ามุ่งมั่นที่จะมอบวิธีการที่ดีกว่าและแตกต่างจากผู้ให้บริการอื่นๆ
                เพื่อให้แน่ใจว่าการทำทุกธุรกรรมบนแพลตฟอร์มของลาซาด้านั้นเป็นไปด้วยความง่ายอย่างแท้จริง
                มากกว่าไปกว่านั้น สโลแกนใหม่ “มีทุกสิ่งที่ใจค้นหา”
                แสดงถึงวิสัยทัศน์ของบริษัทที่มุ่งมั่นที่จะพัฒนาประสบการณ์ของผู้ซื้อและผู้ขายออนไลน์ผ่านการค้าและเทคโนโลยีที่ล้ำสมัย
                โลโก้ของหัวใจที่มีสีสันแสดงให้เห็นถึงความอ่อนเยาว์และมีพลัง
                ซึ่งเป็นสัญลักษณ์ของความมีชีวิตชีวาของการช้อปปิ้งและยุคดิจิตอลในปัจจุบัน{" "}
              </p>
              <h4>การช้อปปิ้งที่ง่ายและสะดวก</h4>
              <p className="_p_f">
                “การช้อปปิ้งที่ง่ายและสะดวก”
                เป็นเป้าหมายของลาซาด้าตลอดหลายปีที่ผ่านมา
                โดยให้คำสัญญากับลูกค้าทุกคนว่าเราจะให้ประสบการณ์การช้อปปิ้งออนไลน์ที่สะดวกสบายแบบไร้ความยุ่งยากใดๆ
                เราได้ออกแบบทุกสิ่งที่อำนวยความสะดวกในการค้นหาผ่านเว็บไซต์และแอพเพื่อการใช้งานที่ง่าย
                มีการจัดสรรผลิตภัณฑ์ไว้ใต้หมวดหมู่เดียวกัน
                รวมถึงคำอธิบายที่เกี่ยวข้องและรีวิวสินค้านั้นๆอย่างเปิดเผย
              </p>
            
          </Grid>
          <Grid xs={6} md={3}>
          
              {" "}
              <p className="_p_f">
                พบกับสินค้ามากมายบน LazMall
                ด้วยความร่วมมือกับแบรนด์ชั้นนำหลายร้อยแห่งทั่วโลก
                พร้อมกับผู้ขายที่มีชื่อเสียงมากมายเพื่อให้บริการสินค้าที่ดีที่สุดสำหรับคุณ
                มากไปกว่านั้น เรายังมี LazMart
                ที่ให้บริการสินค้าของกินของใช้มากมายในราคาสุดคุ้ม{" "}
              </p>
              <h4>ตัวเลือกในการชำระเงินที่หลากหลาย</h4>
              <p className="_p_f">
                การทำธุรกรรมกับเราเป็นเรื่องง่าย ด้วยการชำระเงินที่หลากหลาย
                ในฐานะที่เป็นผู้นำอีคอมเมิร์ซแห่งตะวันออกเฉียงใต้
                เราจะทำหน้าที่เป็นแพลตฟอร์มที่ปลอดภัยในการซื้อสินค้า
                อีกทั้งยังปกป้องข้อมูลสำคัญของคุณจากผู้ใช้ที่ไม่ได้รับอนุญาตและกิจกรรมที่ฉ้อโกงต่างๆที่อาจจะเกิดขึ้นในขั้นตอนการชำระเงิน
                และคุณยังสามารถชำระเงินผ่านบัตรเดบิต เครดิต
                หรือจ่ายปลายทางด้วยเงินสด
              </p>
              <h4>
                การจัดส่งสินค้าอย่างทั่วถึงและการคืนสินค้าแบบไม่มีค่าใช้จ่าย
              </h4>
              <p className="_p_f">
                ไม่เพียงแต่มีสินค้าที่ยอดเยี่ยมให้คุณได้เลือกสรร
                แต่เรายังมีบริการจัดส่งที่บ้านทั่วประเทศ
                ลาซาด้าสามารถจัดส่งทุกอย่างไปที่บ้านของคุณ ไม่ว่าคุณจะอยู่ที่ใด
                หากคุณได้รับความเสียหายจากการจัดส่ง
                คุณสามารถส่งกลับผ่านขั้นตอนการคืนสินค้าที่ไม่ยุ่งยากและมีขั้นตอนการคืนเงินให้คุณโดยเร็วที่สุด
              </p>
              <h4>การลดราคาที่ยิ่งใหญ่ที่สุด คูปองส่วนลดและโปรโมชั่นสุดฟิน</h4>
              <p className="_p_f">
                ส่วนลดและดีลดีๆสามารถหาซื้อได้ทุกวันบนลาซาด้า
                รหัสส่วนลดและคูปองส่วนลดสามารถใช้ร่วมกันและนำไปแลกซื้อของได้อย่างสุดคุ้ม
                โดยเฉพาะในช่วงแคมเปญของลาซาด้า อาทิ แคมเปญ Birthday, แคมเปญ
                Women's Festival และ แคมเปญ Mid-Year Festival
                มหกรรมช้อปปิ้งกลางปี, 9.9
                และเทศกาลช้อปปิ้งออนไลน์ที่ยิ่งใหญ่ที่สุดแห่งปีอย่างแคมเปญ 11.11
                และ 12.12
              </p>
            
          </Grid>
          <Grid xs={6} md={3}>
            
              <h3>TOP CATEGORIES & BRANDS</h3>
              <h4>EL</h4>
              <p className="_p_f">
                Hisense , Midea , Haier , Canon , DoHome , Microsoft , LG , TCL
                , Philips ,
              </p>
              <h4>MOTHER & BABY</h4>
              <p className="_p_f">
                MamyPoko , BabyLove , Pampers , Huggies , Merries , Enfagrow ,
                S26 , Pediasure , HiQ , D-Nee , Foremost ,
              </p>
              <h4>
                MamyPoko , BabyLove , Pampers , Huggies , Merries , Enfagrow ,
                S26 , Pediasure , HiQ , D-Nee , Foremost ,
              </h4>
              <p className="_p_f"> 
                L'Oreal Paris , Unilever , Estee Lauder , Laneige , Dettol ,
                Ensure , La Roche Posay , P&G , Watsons , Eve and Boy , Bobbi
                Brown , Kiehl's , Lifree Thailand
              </p>
              <h4>HOME & LIVING</h4>
              <p className="_p_f">
                Index Livingmall , SB Design Square , Superlock , Satin ,
                Seagull , FN OUTLET , Lock&Lock , Philips Lighting Thailand ,
                Bosch , PASAYA , 3M Official Online Store , siamlatex ,
              </p>
              <h4>SPORT AND OUTDOORS</h4>
              <p className="_p_f">
                Adidas , Under Armour , New Balance , Skechers , Asics , Warrix
                , Jason , B&G , GrandSport , Yonex , LULAE , Hydro Flask ,
              </p>
              <h4>MOTORS</h4>
              <p className="_p_f">
                3M Auto , Meguiars , KENWOOD , Pioneer , Aston , Caltex , FURiO
                by Bangchak , Arctic , Super max and tyre , PLATINUM X , Audio
                Advance ,
              </p>
              <h4>FASHION</h4>
              <p className="_p_f">
                Sabina , CONVERSE , Mc Jeans , Topshop , GQ , Wacoal , CALVIN
                KLEIN , Fitflop , TOMS , Thai Designer Club , Keds , Guess ,
                Crocs , more...
              </p>
              <h4>SHOP WORLDWIDE WITH ALIEXPRESS</h4>
              <p className="_p_f">
                Russia , Spain , France , Germany , Poland , Brazil , Saudi
                Arabia
              </p>
              <h4>SHOP WORLDWIDE WITH DARAZ</h4>
              <p className="_p_f">Pakistan , Bangladesh , Sri Lanka , Myanmar , Nepal</p>
          
          </Grid>
          <Grid xs={6} md={3}>
         
              <h4>TOY & GAMES</h4>
              <p>
                hasbro , Lego , Barbie , Mattel , Fisher Price , Crayola ,
                Playmobil , KCtoys , Kiddo Pacific Co.,Ltd. , Cyberdict
                Technology , Joan Miro Thailand , more...
              </p>
              <h4>GROCERIES</h4>
              <p>
                Unilever , Pepsico , Osotspa , Nescafe Dolce Gusto , Nescafe ,
                MIlo , KAO , Lion , Cellox Zilk and Maxmo , DoiTung ,
              </p>
              <h4>MOBILES & TABLETS DEVICES</h4>
              <p>
                Xiaomi , Realme , OPPO , vivo , OnePlus , Infinix , Apple ,
                Samsung , Huawei , more...
              </p>
              <h4>PET SUPLLIES</h4>
              <p>
                Mars , Nestle Pet , PCG , Hill's , Unicharm Pet , Jerhigh ,
                Bearing , Frontguard , Hana Pet , more...
              </p>
              <h4>ACCESSORIES</h4>
              <p>
                JBL , Sandisk , WD , Sennheiser , Bose , Anker , Fitbit , Sony ,
                TP-Link , Amazfit , more...
              </p>
              <h4>WATCHES SUNGLASSES JEWELLERY</h4>
              <p>
                RayBan , Oakley Official Store , SEIKO , Casio , Citizen
                Official Store , Timex Official Thailand , Jubilee Diamond ,
                Emporio Armani , DKNY , Swatch Official Store , Tissot Official
                Store , Mido Official Store , more...
              </p>
              <h4>BAGS & TRAVEL</h4>
              <p>
                Samsonite , American Tourister , Herschel , Anello , Furla ,
                Coccinelle , Morgan , Timbuk2 , Guess , Cath Kidston , COACH ,
                Jansport , more...
              </p>
              <h4>SPECIAL PROMOTIONS</h4>
              <p>Free Shipping , Utility Bill , Mid-Month</p>
           
          </Grid>
        </Grid>
        

      </Box>
     
        <CssBaseline />
        <div className="social-container"></div>

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              <a
                href="https://www.youtube.com/c/jamesqquick"
                className="youtube social"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a
                href="https://www.facebook.com/learnbuildteach/"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.twitter.com/jamesqquick"
                className="twitter social"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/learnbuildteach"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </Typography>
            <Copyright />
          </Container>
      
      </Box>
    </div>
  );
}
