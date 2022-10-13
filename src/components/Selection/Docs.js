import { Stack , Avatar,Link} from '@mui/material'
import * as React from 'react'
import Typography from '@mui/material/Typography';
import docdata from './Docdata';


export default function Docs() {
  return (
    <div>
      <Stack direction="column" spacing={1}  justifyContent="space-evenly">
        
      <Stack  spacing={3} direction='row' sx={{boxShadow:" rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px",py:0.5,'&:hover':{}}}>
            <Stack><Avatar alt="Remy Sharp" src={docdata.image1} /></Stack>
            <Stack spacing={0} direction='column'>
                <Typography variant='subtitle2' sx={{fontWeight:"700"}}>{docdata.title1} </Typography>
                <Typography variant='' sx={{fontSize:{lg:"none",xs:"14px"}}}>{docdata.text1}</Typography>

                <Stack spacing={2} direction="row"   sx={{px:1,py:2}}  >
                    <Link href="#" underline="none" sx={{color:"black",fontSize:"14px",boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",borderRadius:"10px",px:1,'&:hover:':{backgroundColor:"#ebedf0"}}}>{docdata.Materiallnk}</Link>
                    <Link href="#" underline="none" sx={{color:"black",fontSize:"14px",boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",borderRadius:"10px",px:1}}>{docdata.Joulnk}</Link>
                    <Link href="#" underline="none" sx={{color:"black",fontSize:"14px",boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",borderRadius:"10px",px:1}}> {docdata.baselnk}</Link>
                    <Link href="#" underline="none" sx={{color:"black",fontSize:"14px",boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",borderRadius:"10px",px:1}}>{docdata.Susytemlnk}</Link>

                 </Stack>
           


            </Stack>
        </Stack>

        <Stack  spacing={3} direction='row' sx={{boxShadow:" rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px",py:2,'&:hover':{backgroundColor:"#ebedf0"}}}>
            <Stack> <Avatar alt="Remy Sharp" src={docdata.image2}/></Stack>
            <Stack spacing={0} direction='column'>
                <Typography variant='subtitle2' sx={{fontWeight:"700"}}> {docdata.title2}</Typography>
                <Typography variant='' sx={{fontSize:{lg:"none",xs:"14px"}}}> {docdata.text2}</Typography>
            </Stack>
        </Stack>
            
      </Stack>
    </div>
  )
}
