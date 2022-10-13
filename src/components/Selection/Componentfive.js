import { Typography,Grid,Button,Alert,TextField,ButtonGroup } from '@mui/material'

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import Tabs from '@mui/material/Tabs';
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import fivedata from './Fivedata';


export default function Componentfive() {

  return (
    <div >
            <Grid item container sx={{px:{lg:13,xs:3},py:6}} >
                <Grid item  sx={{maxWidth:{lg:"500px"}}}>
              
                    <Typography  sx={{color:"#0072E5",fontWeight:"700",fontSize:{lg:"14px",xs:"14px"}}} >{fivedata.header.title}</Typography>
                    <Typography variant='h4' sx={{fontWeight:"900",fontSize:{lg:"35px",xs:"25px"},color:"#132F4C",mt:{lg:1.5,xs:1.5}}} >{fivedata.header.header} 
                    <Typography variant='' sx={{fontWeight:"900",color:"#007FFF",fontSize:{lg:"35px",xs:"25px"}}}>{fivedata.header.header2}</Typography></Typography>
               
                </Grid>

                          
    
                <Grid container item spacing={4} lg={12}  direction="row" sx={{ mt:8,mx:{lg:1,xs:0}}}>

                <Grid xs={12} item  lg={4} md={6}   sx={{border: "1px solid rgb(238, 238, 238)",borderTopLeftRadius:"10px",p:2,mr:{lg:0,xs:3}}} >
                       
                    
                       
                       
                        <TabContext value='0'>
                            <TabList sx={{mt:-4,ml:-3}} >
                                <Tabs  value='1'  sx={{ml:-3,letterSpacing:"-3px"}}>
                                <Tab label={fivedata.bardata.title} sx={{fontWeight:"500",fontSize:"13px"} } value="1" />
                                <Tab label={fivedata.bardata.title1} sx={{fontWeight:"500",fontSize:"13px"} }  value="2"/>
                                <Tab label={fivedata.bardata.title2}  sx={{fontWeight:"500",fontSize:"13px"} }  value="3"/>
                                </Tabs>
                            </TabList>
                        </TabContext>
                    <Button variant="contained" size="small" sx={{ml:{lg:10,xs:6},mt:{lg:7,xs:6},alignItems:"center",justifyContent: "center"}} startIcon={<AddShoppingCartIcon />}> {fivedata.bardata.btn}</Button>

                            <Typography sx={{mt:12,fontWeight:"500",color:"#1A2027",fontSize:"0.875rem"}}>{fivedata.bardata.text}</Typography>
                  
                </Grid>
                
                <Grid xs={12} item  lg={4}  md={6}  sx={{border: "1px solid rgb(238, 238, 238)",p:2,mr:{lg:0,xs:3}}}>
                  

                       
                  
                    <TabContext  value='1' >
                        
                             <TabList sx={{mt:-4,ml:-3}} >
                                <Tabs  value='2'  sx={{ml:-3,letterSpacing:"-3px"}}>
                                <Tab label={fivedata.alertdata.title} sx={{fontWeight:"500",fontSize:"13px"} }  value="1"/>
                                <Tab label={fivedata.alertdata.title1} sx={{fontWeight:"500",fontSize:"13px"} } value="2" />
                                <Tab label={fivedata.alertdata.title2}  sx={{fontWeight:"500",fontSize:"13px"} } value="3" />
                                </Tabs>
                            </TabList>
                        
                    </TabContext>
                    <Alert severity="success" sx={{m:6,mt:7}}>{fivedata.alertdata.alert}</Alert>

                            <Typography sx={{mt:10,fontWeight:"500",color:"#1A2027",fontSize:"0.875rem"}}>{fivedata.alertdata.text}</Typography>
                  
                </Grid>

                <Grid xs={12} item lg={4}  md={6}  sx={{border: "1px solid rgb(238, 238, 238)",borderTopRightRadius:"10px",p:2,mr:{lg:0,xs:3}}}>
                    
                    
                       
                  
                  
                    <TabContext  value='1'>
                    
                            <TabList sx={{mt:-4,ml:-3}} >
                                <Tabs  value='3'  sx={{ml:-3,letterSpacing:"-3px"}}>
                                <Tab label={fivedata.inputdata.title} sx={{fontWeight:"500",fontSize:"11px"} }  value="1"/>
                                <Tab label={fivedata.inputdata.title1} sx={{fontWeight:"500",fontSize:"11px"} }  value="2"/>
                                <Tab label={fivedata.inputdata.title2}  sx={{fontWeight:"500",fontSize:"11px"} }  value="3"/>
                                </Tabs>
                            </TabList>
                        
                    </TabContext>
                    <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="Hello World"
                                sx={{m:6,mt:7}}
                                />
                            <Typography sx={{mt:3,fontWeight:"500",color:"#1A2027",fontSize:"0.875rem"}}>{fivedata.inputdata.text}</Typography>
                  
                </Grid>

                </Grid>
                

                
               

                
            </Grid>
    </div>
  );
}
