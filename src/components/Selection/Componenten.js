import { Stack} from "@mui/system";

import * as React from "react";
import { Typography, Grid, TextField, Link , Avatar } from "@mui/material";
import logo from "../Selection/logo.png"
import tendata from "./Tendata";

export default function Componenten() {





  return (
      <Grid container item spacing={2}  lg={12}  justifyContent="space-evenly" sx={{ px:{lg:13,xs:3},py:4}}>
        <Grid xs={12} item  lg={6} md={6} >
          <Stack spacing={2} direction="column" >
          <Avatar  src={logo} sx={{ width: 40, height: 40,backgroundColor:"white",mt:1}} variant="square"/>
            <Typography variant="" sx={{fontSize:{lg:"14px",xs:"13px"},fontWeight:"600"}}>{tendata.header.header}
     <Typography variant="body2" sx={{fontSize:"0.875rem",color:"#3E5060"}}>{tendata.header.text}</Typography></Typography>
            <Stack spacing={0}>
              <Typography  sx={{fontSize:"13px"}}>
              {tendata.header.emiltext}
              </Typography>
              <Stack spacing={2} direction="row" sx={{  width:"300px",borderRadius:"20px"}} >
                <TextField
                  required
                  id="outlined-required"
                  placeholder="enter the Email"
                  
                  sx={{py:1,borderRadius:"20px",'& label.Mui-focused': {
                    color: 'green',
                  }}}
                />
                <Link href="#" underline="none" sx={{fontWeight:"800",borderRadius:"20px",py:3,color:"#0072E5" }}>
                {tendata.header.btn}
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid xs={12} item  lg={6} md={5}  justifyContent="space-evenly" alignItems="center">
          <Grid container item spacing={2} direction="row" lg={12} sx={{p:3}}>
           

          
                <Grid xs={6} item  lg={3} md={6}>
                <Stack spacing={2} direction="column">
                  <Typography variant="subtitle2" sx={{fontWeight:"700"}}>{tendata.netone.title}</Typography>

                      {
                        tendata.netone.Products.map((item,id)=>(
                  
                        <Grid item  key={id}>
                        <Typography variant="body2" sx={{color:"#757575"}}>{item}</Typography>
                        </Grid>
                        ))
                      }
                </Stack>
              </Grid>
              
              <Grid xs={6} item  lg={3} md={6}>
                <Stack spacing={2} direction="column">
                  <Typography variant="subtitle2" sx={{fontWeight:"700"}}>{tendata.nettwo.title}</Typography>
                      {
                        tendata.nettwo.Resource.map((item,id)=>(
                    
                        <Grid item  key={id}>
                          
                          <Typography variant="body2" sx={{color:"#757575"}} >{item}</Typography>
                          </Grid>
                        ))
                      }
                </Stack>
              </Grid>
              <Grid xs={6} item  lg={3} md={6}>
                <Stack spacing={2} direction="column">
                  <Typography variant="subtitle2" sx={{fontWeight:"700"}}>{tendata.netthree.title}</Typography>
                      {
                        tendata.netthree.Explore.map((item,id)=>(
                 
                        <Grid item  key={id}>
                        <Typography variant="body2" sx={{color:"#757575"}} >{item}</Typography>
                        </Grid>
                  

                        ))
                      }
                </Stack>
              </Grid>
              <Grid xs={6} item  lg={3} md={6}>
                <Stack spacing={2} direction="column">
                  <Typography variant="subtitle2" sx={{fontWeight:"700"}}>{tendata.netfour.title}</Typography>
                      {
                        tendata.netfour.Company.map((item,id)=>(
                        <Grid item  key={id}>
                        <Typography variant="body2" sx={{color:"#757575"}}>{item}</Typography>
                        </Grid>
                        ))
                      }
                </Stack>
              </Grid>
          
              {/* <Grid xs={6} item  lg={3} md={6}>
                <Stack spacing={2} direction="column" sx={{fontWeight:"700"}}>
                  <Typography variant="subtitle2">Expole</Typography>
                  <Typography variant="body2" sx={{color:"#757575"}}>Document</Typography>
                  <Typography variant="body2" sx={{color:"#757575"}}>Stroge</Typography>
                  <Typography variant="body2" sx={{color:"#757575"}}>Blog</Typography>
                  <Typography variant="body2" sx={{color:"#757575"}}>ShowCase</Typography>
                  <Typography variant="body2" sx={{color:"#757575"}}>Roadmap</Typography>
                </Stack>
              </Grid>
              <Grid xs={6} item  lg={3} md={6} >
                <Stack spacing={2} direction="column" sx={{fontWeight:"700"}}>
                  <Typography variant="subtitle2">Company</Typography>
                  <Typography variant="body2" sx={{color:"#757575"}}>About</Typography>
                  <Typography variant="body2" sx={{color:"#757575"}}>Vision</Typography>
                  <Typography variant="body2" sx={{color:"#757575"}}>Careers</Typography>
                  <Typography variant="body2" sx={{color:"#757575"}}>Support</Typography>
                  <Typography variant="body2" sx={{color:"#757575"}}>Toolpad</Typography>
                </Stack>
              </Grid> */}
            
          </Grid>
        </Grid>
      </Grid>
  );
}
