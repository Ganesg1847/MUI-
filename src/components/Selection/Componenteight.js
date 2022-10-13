

import { Grid, Typography ,Stack,Avatar,Paper,Link} from '@mui/material'
import  React from 'react'
import AddIcon from '@mui/icons-material/Add';
import LaunchIcon from '@mui/icons-material/Launch';
import eightdata from './Eightdata';

export default function Blockeight() {
  return (
    <div className='Blockeight'>
        <Grid container item spacing={0} lg={12} sx={{px:{lg:12,xs:1},py:1,mt:-3,ml:-1.5}}>
           <Grid item sx={{mb:-4,ml:3}}>
            <Typography variant='h5' sx={{color:"#AB6800",fontWeight:"800",fontSize:"1.6rem"}}>Gold</Typography>
             </Grid>
        <Grid container  item spacing={2} lg={12} sx={{mx:1,my:3}}>

                {
                    eightdata.netone.map((item,id)=>(
                        <Grid item xs={12} lg={3} md={6} key={id}>
            <Paper sx={{backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} }} elevation={0} >
                    <Stack spacing={2} direction="row" sx={{p:2}}>
                    <Avatar  src={item.image} variant="rounded" sizes='larg' sx={{ width: 40, height: 40 ,my:1}}/>

                        <Stack spacing={0} direction="column" sx={{py:1,maxWidth:"270px"}}>
                            <Typography variant='subtitle2' sx={{color:" 0.875rem",fontWeight:"700"}}>{item.title}<LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/></Typography>
                            <Typography variant='caption' sx={{color:'#3E5060'}}>{item.text}</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>
                        
                        
                        ))
                }
            
            
           
            {/* <Grid xs={12} item  lg={3} md={6}>
            <Paper sx={{backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} }} elevation={0}>
                    <Stack spacing={2} direction="row" sx={{p:2}}>
                    <Avatar  src="https://avatars.githubusercontent.com/u/24789812?size=40" variant="rounded" sizes='larg' sx={{ width: 40, height: 40 ,my:1}}/>

                         <Stack spacing={0} direction="column" sx={{py:1,maxWidth:"270px"}}>
                            <Typography  variant='subtitle2' sx={{color:" 0.875rem",fontWeight:"700"}}>Bit <LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/></Typography>
                            <Typography variant='caption' sx={{color:'#3E5060'}}>A component-driven development platform</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>

            <Grid xs={12} item  lg={3} md={6}>
            <Paper sx={{backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}} elevation={0}>
                    <Stack spacing={2} direction="row" sx={{p:2}}>
                    <Avatar  src="https://avatars.githubusercontent.com/u/1262264?size=40" variant="rounded" sizes='larg' sx={{ width: 40, height: 40 ,my:1}}/>

                         <Stack spacing={0} direction="column" sx={{py:1,maxWidth:"270px"}}>
                            <Typography  variant='subtitle2' sx={{color:" 0.875rem",fontWeight:"700"}}>NetticasinoHEX<LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/></Typography>
                            <Typography variant='caption' sx={{color:'#3E5060'}}>The easy way to message your group</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>

            <Grid xs={12} item  lg={3} md={6}>
            <Paper sx={{backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} }} elevation={0}>
                    <Stack spacing={2} direction="row" sx={{p:2}}>
                    <Avatar  src="https://images.opencollective.com/netticasinohex-com/71d7417/logo/40.png" variant="rounded" sizes='larg' sx={{ width: 40, height: 40 ,my:1}}/>

                         <Stack spacing={0} direction="column" sx={{py:1,maxWidth:"270px"}}>
                            <Typography  variant='subtitle2' sx={{color:" 0.875rem",fontWeight:"700"}}>Tidelife <LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/></Typography>
                            <Typography variant='caption' sx={{color:'#3E5060'}}>A unified DevOps automation plateform for you  team</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid> */}

        </Grid>

        <Grid container spacing={2}  item lg={12} sx={{mx:1}}>

        {
                    eightdata.nettwo.map((item,id)=>(
                        <Grid item xs={12} lg={3} md={6} key={id}>
            <Paper sx={{backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} }} elevation={0} >
                    <Stack spacing={2} direction="row" sx={{p:2}}>
                    <Avatar  src={item.image} variant="rounded" sizes='larg' sx={{ width: 40, height: 40 ,my:1}}/>

                        <Stack spacing={0} direction="column" sx={{py:1,maxWidth:"270px"}}>
                            <Typography variant='subtitle2' sx={{color:" 0.875rem",fontWeight:"700"}}>{item.title}<LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/></Typography>
                            <Typography variant='caption' sx={{color:'#3E5060'}}>{item.text}</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>
                        
                        
                        ))
                }


            {/* <Grid xs={12} item  lg={3} md={6}>
            <Paper sx={{backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} }} elevation={0}>
                    <Stack spacing={2} direction="row" sx={{p:2}}>
                    <Avatar  src="https://mui.com/static/sponsors//megafamous.png" variant="rounded" sizes='larg' sx={{ width: 40, height: 40 ,my:1}}/>

                         <Stack spacing={0} direction="column" sx={{py:1,maxWidth:"270px"}}>
                            <Typography  variant='subtitle2' sx={{color:" 0.875rem",fontWeight:"700"}}>MegaFamous <LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/></Typography>
                            <Typography variant='caption' sx={{color:'#3E5060'}}>Enterprise-ready open-source software</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>
           
            <Grid xs={12} item  lg={3} md={6}>
            <Paper sx={{backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} }} elevation={0}>
                    <Stack spacing={2} direction="row" sx={{p:2}}>
                    <Avatar  src="https://images.opencollective.com/dialmycalls/f5ae9ab/avatar/40.png" variant="rounded" sizes='larg' sx={{ width: 40, height: 40 ,my:1}}/>

                         <Stack spacing={0} direction="column" sx={{py:1,maxWidth:"270px"}}>
                            <Typography  variant='subtitle2' sx={{color:" 0.875rem",fontWeight:"700"}}>DialMycall<LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/></Typography>
                            <Typography variant='caption' sx={{color:'#3E5060'}}>A component-driven development platform</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>
            <Grid xs={12} item  lg={3} md={6}>
            <Paper sx={{backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} }} elevation={0}>
                    <Stack spacing={2} direction="row" sx={{p:2}}>
                    <Avatar  src="https://images.opencollective.com/goread_io/eb6337d/logo/40.png" variant="rounded" sizes='larg' sx={{ width: 40, height: 40 ,my:1}}/>

                         <Stack spacing={0} direction="column" sx={{py:1,maxWidth:"270px"}}>
                            <Typography  variant='subtitle2' sx={{color:" 0.875rem",fontWeight:"700"}}>Goread.io <LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/></Typography>
                            <Typography variant='caption' sx={{color:'#3E5060'}}>The easy way to message your group</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>
            <Grid xs={12} item  lg={3} md={6}>
            <Paper sx={{backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}} elevation={0}>
                    <Stack spacing={2} direction="row" sx={{p:2}}>
                    <Avatar  src="https://images.opencollective.com/icons8/7fa1641/logo/40.png" variant="rounded" sizes='larg' sx={{ width: 40, height: 40 ,my:1}}/>

                         <Stack spacing={0} direction="column" sx={{py:1,maxWidth:"270px"}}>
                            <Typography  variant='subtitle2' sx={{color:" 0.875rem",fontWeight:"700"}}>Icon.8<LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/></Typography>
                            <Typography variant='caption' sx={{color:'#3E5060'}}>A unified DevOps automation plateform for you  team</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid> */}
        </Grid>

        <Grid container spacing={2}  item lg={12} sx={{mx:1,my:2}}>

        <Grid item xs={12} lg={3} md={6}>
            <Paper sx={{backgroundColor:"#fff",border: "1px solid rgb(238, 238, 238)",borderRadius:'10px',backgroundColor:"rgb(255, 255, 255)",'&:hover':{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}} elevation={0}>
                    <Stack spacing={2} direction="row" sx={{p:2}}>
                        <AddIcon sx={{fontSize:'30px',mt:2,color:"#0288d1"}}/>
                         <Stack spacing={0} direction="column" sx={{py:1,maxWidth:"270px"}}>
                            <Typography  variant='subtitle2' sx={{color:" 0.875rem",fontWeight:"700"}}>{eightdata.netthree.title}<LaunchIcon sx={{fontSize:"14px",color:"#007FFF",mx:0.6,'&:hover':{mb:1} }}/></Typography>
                            <Typography variant='caption' sx={{color:'#3E5060'}}>{eightdata.netthree.text}</Typography>
                            <Link href="#" underline="none" sx={{fontWeight:"600",color:"#0288d1"}}>
                            {eightdata.netthree.btn}
                            </Link>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>

            </Grid>
        
        </Grid>
    </div>
  )
}
