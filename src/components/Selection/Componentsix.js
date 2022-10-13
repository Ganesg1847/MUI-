
import * as React from 'react'
import { Box, Stack } from '@mui/system'
import { Grid, Typography,Chip,Avatar } from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import sixdata  from './Sixdata';


export default function Blocksix() {
  return (
    <div>
      <Box   sx={{
        width: "100%",
        height: "auto",
        backgroundColor: '#1c3a64',px:{lg:11,xs:3},py:6,mt:5}}
        >
        
      <Grid container item specing={0} lg={12}>

        <Grid item xs={12} lg={6} md={6}  sx={{px:{lg:5},ml:{lg:-4}}}>
        <Card />
        </Grid>

        <Grid item xs={12}  container justifyContent="space-between" sx={{p:3,display:{md:"block",xs:"none"}}} spacing={4}  lg={6} md={6} >

            <Grid container item specing={1} lg={12} sx={{ml:{lg:8},p:3}}   >
              <Grid  item  xs={6} lg={6} md={6} >
                <Stack direction="column" spacing={0} >
                  <Typography variant="h4" sx={{color:"#99CCF3",fontWeight:"700"}}>{sixdata.netdata.num}</Typography>
                  <Typography variant="button"  sx={{color:"white",fontWeight:"400"}}>{sixdata.netdata.header}</Typography>
                </Stack>
              </Grid>
              <Grid  item xs={6} lg={6} md={6} sx={{px:{xs:1}}}>
              <Stack direction="column" spacing={0}>
                  <Typography variant="h4" sx={{color:"#99CCF3",fontWeight:"700"}}>{sixdata.netdata.num2}</Typography>
                  <Typography variant="button"  sx={{color:"white",fontWeight:"400"}}>{sixdata.netdata.header2}</Typography>
                </Stack>
              </Grid>
            </Grid> 

            <Grid container  item specing={1} lg={12} sx={{ml:8,p:3}}>
              <Grid item xs={12} lg={6} md={6}>
                <Stack  direction="column" spacing={0}>
                  <Typography variant="h4" sx={{color:"#99CCF3",fontWeight:"700"}}>{sixdata.netdata.num3}</Typography>
                  <Typography variant="button"  sx={{color:"white",fontWeight:"400"}}>{sixdata.netdata.header3}</Typography>
                </Stack>
              </Grid>
              <Grid xs={12} item lg={6} md={6}>
              <Stack direction="column" spacing={0}>
                  <Typography variant="h4" sx={{color:"#99CCF3",fontWeight:"700"}}>{sixdata.netdata.num4}</Typography>
                  <Typography variant="button"  sx={{color:"white",fontWeight:"400"}}>{sixdata.netdata.header4}</Typography>
                </Stack>
              </Grid>
            </Grid>

        </Grid>

      </Grid>
      </Box>
      
    </div>
  )
}




const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Card = () => {
  return (
    <Slider {...settings}>
    
        {sixdata.slidedata.map((item,id) => (
          <Grid item key={id}>
            <Typography variant="subtitle1" sx={{ color: "white", p: 3 }} >
              "{item.text}"
            </Typography>
            <Stack spacing={2} direction="row" sx={{ mx: 2, py: 2 }}>
              <Avatar
                alt="Remy Sharp"
                src={item.image}
                sx={{ width: 55, height: 55,border:"3px solid #007FFF" }}
              />

              <Stack spacing={2} direction="column">
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#bdbdbd",
                    fontWeight: "300",
                    display: { lg: "flex", xs: "flex" },
                    flexDirection: { lg: "row", xs: "row" },
                    fontSize: { lg: "15px", xs: "13px" },
                  }}
                >
                  {item.title}
                </Typography>
                <Avatar
                  src={item.image1}
                  variant="square"
                  sx={{ width: 70, height: 25 }}
                />
              </Stack>
            </Stack>
          </Grid>
        ))}
 
    </Slider>
  );
};

