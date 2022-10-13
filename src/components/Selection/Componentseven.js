

import { Grid, Paper, Typography,Avatar } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import sevendata  from './Sevendata';
export default function Blockseven() {
  return (
    <div className='Blockseven'>

   <Grid container spacing={2} item sx={{px:{lg:13,xs:2},py:{lg:5,xs:3},mt:3}}>
          <Grid item>
        <Stack spacing={1}  direction="column">
            <Typography variant='subtitle2' sx={{color:"#0072E5" ,fontWeight:"700",fontSize:"0.875rem"}}>{sevendata.header.title}</Typography>
            <Typography variant='h4' sx={{fontWeight:"800", fontSize:{lg:"35px",xs:"25px"},display:"flex",flexDirection:"row",color:"#132F4C"}}> <Typography variant='' sx={{fontWeight:"800",mr:1,color:"#0072E5", fontSize:{lg:"35px",xs:"25px"}}}>{sevendata.header.header}</Typography> {sevendata.header.header2}</Typography>
            <Typography variant='' sx={{maxWidth:"500px",fontSize:{lg:"17px",xs:"15px"},color:"#757575"}}>{sevendata.header.text}</Typography>

        </Stack>
        </Grid>
        <Grid  item spacing={1} container sx={{mt:{lg:0,xs:1}}}>
            <Grid item>
            <Typography variant='h4' sx={{fontWeight:"800",mr:1,color:"#0072E5", fontSize:{lg:"25px",xs:"1.5rem"}}}>{sevendata.header.header3}</Typography>
            </Grid>
        </Grid>

        <Grid container item spacing={3} lg={12} sx={{p:2}} >

            {
                sevendata.netdata.map((item,id)=>(

            <Grid item xs={12} sx={{p:1}} lg={4} md={6}  key={id}>
                <Paper sx={{p:{lg:2,xs:1 },maxWidth:"360px",backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}} elevation={0}  >
                    <Stack spacing={2} direction="row" sx={{}}>
                    <Avatar  src={item.image} variant="rounded" sizes='larg' sx={{ width: 65, height: 65 ,my:1}}/>

                        <Stack spacing={0} direction="column" sx={{mt:2}}>
                            <Typography variant='button' sx={{color:"#1A2027"}}>{item.title}<LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/></Typography>
                            <Typography variant='caption' sx={{color:"#757575"}}>{item.text}</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>

            ))}
            {/* <Grid item xs={12} sx={{p:1}} lg={4} md={6} >
                <Paper sx={{p:{lg:2,xs:1 },maxWidth:"360px",backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}} elevation={0}  >
                    <Stack spacing={2} direction="row" sx={{}}>
                    <Avatar  src="https://mui.com/static/sponsors/octopus.svg" variant="rounded" sizes='larg' sx={{ width: 65, height: 65 ,my:1}}/>

                        <Stack spacing={0} direction="column" sx={{mt:2}}>
                            <Typography variant='button' sx={{color:"#1A2027"}}>Octopus Deploy<LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/></Typography>
                            <Typography variant='caption' sx={{color:"#757575"}}>A unified DevOps automation plateform for you  team</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>
            <Grid  item xs={12} sx={{p:1}} lg={4} md={6}>
                <Paper sx={{p:{lg:2,xs:1 },maxWidth:"360px",backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}} elevation={0}>
                    <Stack spacing={2} direction="row" sx={{}}>
                    <Avatar  src="https://brand.zesty.io/zesty-io-logo.svg" variant="rounded" sizes='larg' sx={{ width: 60, height: 60 ,my:1}}/>

                        <Stack spacing={0} direction="column" sx={{mt:2}}>
                            <Typography variant='button' sx={{color:"#1A2027"}}>Zesty.io<LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/></Typography>
                            <Typography variant='caption' sx={{color:"#757575"}}>Only Next node.js CMR you needs</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>
            <Grid   item xs={12} sx={{p:1}} lg={4} md={6}>
                <Paper sx={{p:{lg:2,xs:1},maxWidth:"360px",backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} }} elevation={0}>
                    <Stack spacing={2} direction="row" sx={{}}>
                    <Avatar  src="https://mui.com/static/sponsors/doit-square.svg" variant="rounded" sizes='larg' sx={{ width: 65, height: 65 ,my:1}}/>

                        <Stack spacing={0} direction="column" sx={{mt:2}}>
                            <Typography variant='button' sx={{color:"#1A2027"}}>Doit International<LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/> </Typography>
                            <Typography variant='caption' sx={{color:"#757575"}}>Management  platform for Google cloud and AWS.</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid> */}
            
        </Grid>
   </Grid>
        
      
    </div>
  )
}
