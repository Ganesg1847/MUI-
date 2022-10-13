import { Typography, Button, Paper,Link, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import * as React from "react";
import ninedata from "./Ninedata";

export default function Blocknine() {
  return (
    <div className="Blocknine">
      <Grid  container item spacing={1} lg={12} sx={{p:{lg:8,xs:-1},ml:{xs:-2},mt:{lg:7,xs:3},backgroundColor:"#fafafa"}}>
        <Grid item  xs={12} md={6} lg={6} sx={{mt:{lg:1,xs:4}}}>
          <Stack spacing={1} direction="column" sx={{ml:5}} >
              <Typography variant='subtitle2' sx={{color:"#007FFF",fontSize:"0.875rem",fontWeight:"800"}}>{ninedata.header.title}</Typography>
              <Typography variant='h3' sx={{fontWeight:"800",fontSize:{lg:"35px",xs:"1.6rem" },color:"#1A2027"}}>{ninedata.header.header}<br/><Typography  variant='' sx={{fontWeight:"800",color:"#007FFF",fontSize:{lg:"35px",xs:"1.8rem"}}}>{ninedata.header.header2}</Typography> </Typography>
              <Typography variant='' sx={{fontSize:{lg:"1rem",xs:"1rem"},color:"#757575",maxWidth:"450px"}}>Find out why MUI's tools are trusted by thousands of open source developers and teams around the world.</Typography>
              <Stack specing={1}  direction="row" sx={{py:5}}>
              <Grid item container spacing={2} lg={12}  sx={{display:{xs:"12",md:"6"},px:{lg:1,xs:2}}} >
              <Button variant="contained" size="large" sx={{p:1.5,borderRadius:"10px",width:{xs:"100%",lg:"140px"},backgroundColor:"#1976d2"}} >{ninedata.header.btn}<ChevronRightIcon  sx={{fontSize:"large"}}/></Button>
              <Button variant="outlined" sx={{width:{xs:"100%",borderRadius:"10px ",lg:"330px"},backgroundColor:"#ebedf0",mt:{lg:0,xs:2.5},ml:{lg:2,xs:-0.4}}}><Typography variant='body2' sx={{fontSize:{xs:"12px",lg:"12px"},color:"#0A1929",p:{lg:0,xs:1.5},width:{xs:"100%",lg:"none"},ml:{lg:0,xs:-2}}}>{ninedata.header.btn2}</Typography><ContentCopyIcon sx={{fontSize:{lg:"medium",xs:"small"},mx:1,mt:{lg:0,xs:0}}} /></Button>
                </Grid>
               </Stack>


            </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={6} sx={{p:{lg:7,xs:2},mt:{lg:0,xs:-3}}}>

          <Grid container item spacing={2} lg={12} sx={{mx:{lg:3,xs:1},my:{lg:7,xs:0}}}>

            {
              ninedata.netdata.map((item,id)=>(
                <Grid item xs={12} lg={6} md={6}  sx={{px:{xs:2}}} key={id}>
                <Paper elevation={0} sx={{px:{lg:3,xs:3},py:{lg:2,xs:2},border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}}>
                 <Stack specing={3} direction="column" >
                 <Typography variant="subtitle2" sx={{fontSize:"0.855rem"}}>{item.title}</Typography>
                  <Typography variant="caption" sx={{color:"rgb(62, 80, 96)",mt:1,fontWeight:"400",fontSize:"0.875rem"}}>{item.text}</Typography>
                  <Link href="#" underline="none" sx={{color:"#2196f3", fontWeight:"700",my:1,fontSize: "0.875rem"}}>{item.btn} <ArrowForwardIosIcon sx={{fontSize:"small" ,color:"#2196f3", fontWeight:"500"}} /></Link>
                 </Stack>
                </Paper>
              </Grid>
              ))
            }
{/* 
              <Grid item xs={12} lg={6} md={6}  sx={{px:{xs:2}}}>
                <Paper elevation={0} sx={{px:{lg:3,xs:3},py:{lg:2,xs:2},border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}}>
                 <Stack specing={3} direction="column" >
                 <Typography variant="subtitle2" sx={{fontSize:"0.855rem"}}>Showcase</Typography>
                  <Typography variant="caption" sx={{color:"rgb(62, 80, 96)",mt:1,fontWeight:"400",fontSize:"0.875rem"}}>Check out some great example of MUI producrt  in action</Typography>
                  <Link href="#" underline="none" sx={{color:"#2196f3", fontWeight:"700",my:1,fontSize: "0.875rem"}}>Learn more <ArrowForwardIosIcon sx={{fontSize:"small" ,color:"#2196f3", fontWeight:"500"}} /></Link>
                 </Stack>
                </Paper>
              </Grid>
              
              <Grid item xs={12} lg={6} md={6} sx={{px:{xs:2}}}>

              <Paper elevation={0} sx={{px:{lg:3,xs:3},py:{lg:2,xs:2},border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}}>
                 <Stack specing={3} direction="column" >
                 <Typography variant="subtitle2" sx={{fontSize:"0.855rem"}}>Blog</Typography>
                  <Typography variant="caption" sx={{color:"rgb(62, 80, 96)",mt:1,fontWeight:"400",fontSize:"0.875rem"}}>Check out some great example of MUI producrt  in action</Typography>
                  <Link href="#" underline="none" sx={{color:"#2196f3", fontWeight:"700",my:1,fontSize: "0.875rem"}}>Learn more <ArrowForwardIosIcon sx={{fontSize:"small" ,color:"#2196f3", fontWeight:"500"}} /></Link>
                 </Stack>
                </Paper>
           
              </Grid> */}

          </Grid>


        </Grid>
      </Grid>
    </div>
  );
}
