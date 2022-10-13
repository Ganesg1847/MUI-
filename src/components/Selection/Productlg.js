import { Stack , Avatar} from '@mui/material'
import * as React from 'react'
import Typography from '@mui/material/Typography';
import productlgdata from './Productlgdata';
export default function Productlg() {
  return (
    <div className='Productlg' >
      
      <Stack  direction="column" spacing={1}  justifyContent="space-evenly"  >

        {
            productlgdata.map((item,id)=>(
                    <div key={id}>
                <Stack  spacing={3} direction='row'  sx={{boxShadow:" rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px",py:2,'&:hover':{backgroundColor:"#ebedf0"}}}>
            <Stack><Avatar alt="Remy Sharp" src={item.img} /></Stack>
            <Stack spacing={0} direction='column'>
                <Typography variant='subtitle2' sx={{fontWeight:"700"}}> {item.title}   </Typography>
                <Typography variant='' sx={{fontSize:{lg:"none",xs:"14px"}}}>{item.text}</Typography>
            </Stack>
        </Stack>
        </div>
            ))
        }
 </Stack>
        {/* <Stack  spacing={3} direction='row'  sx={{boxShadow:" rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px",py:2,'&:hover':{backgroundColor:"#ebedf0"}}}>
            <Stack><Avatar alt="Remy Sharp" src="https://mui.com/static/branding/product-core-light.svg" /></Stack>
            <Stack spacing={0} direction='column'>
                <Typography variant='subtitle2' sx={{fontWeight:"700"}}> MUI Core   </Typography>
                <Typography variant='' sx={{fontSize:{lg:"none",xs:"14px"}}}>Ready-to-use Foundational React component free forver </Typography>
            </Stack>
        </Stack> */}

        {/* <Stack  spacing={3} direction='row'  sx={{boxShadow:" rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px",py:2,'&:hover':{backgroundColor:"#ebedf0"}}}>
            <Stack> <Avatar alt="Remy Sharp" src="https://mui.com/static/branding/product-advanced-light.svg" /></Stack>
            <Stack spacing={0} direction='column'>
                <Typography variant='subtitle2' sx={{fontWeight:"700"}}> MUI X</Typography>
                <Typography variant='' sx={{fontSize:{lg:"none",xs:"14px"}}}> Dvanced  and Power component foe complex use-case</Typography>
            </Stack>
        </Stack>

        <Stack  spacing={3} direction='row'  sx={{boxShadow:" rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px",py:2,'&:hover':{backgroundColor:"#ebedf0"}}}>
            <Stack><Avatar alt="Remy Sharp" src="https://mui.com/static/branding/product-templates-light.svg" /></Stack>
            <Stack spacing={0} direction='column'>
                <Typography variant='subtitle2' sx={{fontWeight:"700"}}> Templates </Typography>
                <Typography variant='' sx={{fontSize:{lg:"none",xs:"14px"}}}>fully built,out-of-the-box,templates for your application</Typography>
            </Stack>
        </Stack>
        
        <Stack  spacing={3} direction='row'  sx={{boxShadow:" rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px",py:2,'&:hover':{backgroundColor:"#ebedf0"}}}>
            <Stack> <Avatar alt="Remy Sharp" src="https://mui.com/static/branding/product-designkits-light.svg" /></Stack>
            <Stack spacing={0} direction='column'>
                <Typography variant='subtitle2' sx={{fontWeight:"700"}}>Design Kit </Typography>
                <Typography variant='' sx={{fontSize:{lg:"none",xs:"14px"}}}>Our Component avaialable in you desi gn tool </Typography>
            </Stack>
        </Stack>
        
        <Stack  spacing={3} direction='row'  sx={{boxShadow:" rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px",py:2,'&:hover':{backgroundColor:"#ebedf0"}}}>
            <Stack> <Avatar alt="Remy Sharp" src="https://mui.com/static/branding/product-toolpad-light.svg" /></Stack>
            <Stack spacing={0} direction='column'>
                <Typography variant='subtitle2' sx={{fontWeight:"700"}}>MUI Toolpad</Typography>
                <Typography variant='' sx={{fontSize:{lg:"none",xs:"14px"}}}>Low-Code admin build</Typography>
            </Stack>
        </Stack> */}
        
        
      
     
    </div>
  )
}

// export const Productlg=[
//     {
//                 id:1,
//                 img:"https://mui.com/static/branding/product-core-light.svg",

//     }
// ]