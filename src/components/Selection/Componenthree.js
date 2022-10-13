import {
  Grid,
  Paper,Card, Stack,
Switch,Box,
  Avatar,
} from "@mui/material";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import threedata from "./Threedata";

export default function componenthree() {
  return (
    <div className="Product">
      <Grid
        container
        item
        specing={1}
        lg={12}
        sx={{
          px: { lg: 12, xs: 3 },
          mt: { lg: 10, xs: 4 },
          backgroundColor: "#fafafa",
        }}
      >
        <Grid xs={12} item lg={6} sx={{ mt: { lg: 10, xs: 5 } }}>
          <Grid item sx={{ mixWidth: "500px" }}>
            <Typography
              variant=""
              gutterBottom
              sx={{ color: "#007FFF", fontWeight: "700", fontSize: "0.875rem" }}
            >
              {threedata.headerdata.textone}
            </Typography>
            <Typography variant="h3"
              sx={{
                fontWeight: "800",maxWidth:"480px",
                mt: 1.5,
                fontSize: {
                  lg: "2.3rem",
                  xs: "1.5rem",
                  flexWrap: "wrap-reverse",
                  color: "#1A2027",
                },
              }}
            >
              {threedata.headerdata.header}
              <Typography variant=""
                sx={{
                  color: "#007FFF",
                  fontWeight: "900",
                  fontSize: { lg: "2.3rem", xs: "1.5rem" },
                }}
              >
                {" "}
                {threedata.headerdata.headertwo}
              </Typography>
            </Typography>
            <Typography
              variant="Subtitle1"
              sx={{
                fontWeight: "400",
                fontSize: "0.875rem",
                color: "#424242",
                mt: { lg: 0, xs: 3 },
              }}
            >
              {threedata.headerdata.texttwo}
            </Typography>
          </Grid>

          <Grid container specing={3}  sx={{ my: 2,display:'flex',flexDirection:"column" }}>
           
              {threedata.tabsdata.map((item,id)=>(

                 
                    <Grid container specing={1}  sx={{my:0.5,display:'flex',flexDirection:"column" }} key={id} >
                        <Stack direction="row"
                        sx={{
                          py: 1,
                          maxWidth: "500px",
                          border: "1px solid rgb(238, 238, 238)",
                          borderRadius: "10px",
                          backgroundColor: "rgb(255, 255, 255)",
                          "&:hover": {
                            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          }
                        }} 
                      >
                  <Grid item xs={4} lg={2} sx={{ p: 3,display:'flex',flexDirection:"row"  }}  >
                  <Avatar
                    src={item.image}
                    sx={{ width: "36", height: "36" }} />
                </Grid>
                <Grid item xs={12} lg={10} sx={{ lineHeight: "1.5" }} >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "700",
                        fontSize: "0.875rem",
                        color: "#1A2027",
                      }}
                    >
                     {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "0.875rem",
                        my: 1,
                        color: "#3E5060",
                      }}
                    >
                      {item.text}
                    </Typography>

                    <Link
                      href="#"
                      underline="none"
                      sx={{
                        color: "#2196f3",
                        fontWeight: "700",
                        my: 1,
                        fontSize: "0.875rem",
                      }}
                    >
                     {item.btn}
                      <ArrowForwardIosIcon
                        sx={{
                          fontSize: "small",
                          color: "#2196f3",
                          fontWeight: "500",
                        }} />
                    </Link>
                  </Grid>
                  </Stack>
                  </Grid>
       

              ))}

          </Grid>
        </Grid>

        <Grid
          xs={6}
          lg={6}
          item
          sx={{
            display: { sm: "block", xs: "none" },
            backgroundColor: "#d4d9e1",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            p: 2,
            borderRadius: "10px",
            mt: { lg: 10, xs: 0 },
          }}
        >
          <Card sx={{ maxWidth: 425, mx: 9, px: 3, py: 2 }}>
            <Box sx={{ p: 2, display: "flex" }}>
              <Avatar
                variant="rounded"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <Stack spacing={0.5} sx={{ mx: 3 }}>
                <Typography fontWeight={700}>Michael Scott</Typography>

                <Typography variant="body2" color="text.secondary">
                  <FmdGoodIcon fontSize="small" /> {threedata.netdata.text}
                </Typography>
              </Stack>
            </Box>
            <Stack  direction="row"  alignItems="center" justifyContent="space-between"  sx={{ px: 5, py: 1, bgcolor: "background.default" }} >
              <Typography>{threedata.netdata.title}</Typography>
              <Switch />
            </Stack>
          </Card>

          <Box sx={{ py: 2 }}>
            <Avatar
              src={threedata.netdata.imagetwo}
              sx={{ width: "100%", height: "460px", borderRadius: "10px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
