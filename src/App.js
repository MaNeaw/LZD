import "./App.css";
import Topbar2 from "./comp/topbar_2";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Footer from "./comp/footer";
import Body1 from "./comp/body_1";
import Flashsale from "./comp/flashsale";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Topbar2 />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        ></Grid>
      </Box>

      <Body1 />
      <Flashsale />
      <Footer />
    </div>
  );
}

export default App;
