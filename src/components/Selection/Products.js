import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/system';

export default function  Products() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Product</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ml:2}}>
        <Stack spacing={0} container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        
        >
          <Typography variant='subtitle2' sx={{fontWeight:"700"}}> MUI Core   </Typography>
          <Typography variant='' sx={{fontSize:{lg:"none",xs:"14px"}}}>Ready-to-use Foundational React component free forver   </Typography>
        </Stack>
        <Stack spacing={0} container direction="column"
         justifyContent="flex-start"
         alignItems="flex-start"  sx={{mt:2}}
        >
          <Typography  variant='subtitle2' sx={{fontWeight:"700"}}> MUI X </Typography>
          <Typography variant='' sx={{fontSize:{lg:"none",xs:"14px"}}}> Dvanced  and Power component foe complex use-case</Typography>
          </Stack>

          <Stack spacing={0} container direction="column" 
           justifyContent="flex-start"
           alignItems="flex-start" sx={{mt:2}}
          >
          <Typography  variant='subtitle2' sx={{fontWeight:"700"}}>Templates </Typography>
          <Typography variant='caption text' sx={{fontSize:{lg:"none",xs:"14px"}}}> fully built,out-of-the-box,templates for your application </Typography>
          </Stack>

          <Stack spacing={0} container direction="column" 
           justifyContent="flex-start"
           alignItems="flex-start" sx={{mt:2}}
          >
          <Typography  variant='subtitle2' sx={{fontWeight:"700"}}> Design Kit   </Typography>
          <Typography variant='caption text' sx={{fontSize:{lg:"none",xs:"14px"}}}>Our Component avaialable in you desi gn tool </Typography>
          </Stack>

          <Stack spacing={0} container direction="column"
           justifyContent="flex-start"
           alignItems="flex-start" sx={{mt:2}}
          >
          <Typography  variant='subtitle2' sx={{fontWeight:"700"}}> MUI Toolpad   </Typography>
          <Typography variant='caption text' sx={{fontSize:{lg:"none",xs:"14px"}}}>Low-Code admin build</Typography>
          </Stack>

        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography >Docs</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ml:2}}>
        <Stack spacing={0} container direction="column"
         justifyContent="flex-start"
         alignItems="flex-start" 
         >
            <Typography  variant='subtitle2' sx={{fontWeight:"700"}}>Meterial UI</Typography>
            <Typography variant='caption text' sx={{fontSize:{lg:"none",xs:"14px"}}}> React components that implement Google's Material .</Typography>
        </Stack>
        <Stack spacing={0} container direction="column" 
         justifyContent="flex-start"
         alignItems="flex-start" sx={{mt:2}}
        >
            <Typography  variant='subtitle2' sx={{fontWeight:"700"}}> Joy UI  </Typography>
            <Typography variant='caption text' sx={{fontSize:{lg:"none",xs:"14px"}}}>React components for building your design system. </Typography>
        </Stack>
        <Stack spacing={0} container direction="column"
         justifyContent="flex-start"
         alignItems="flex-start" sx={{mt:2}}
        >
            <Typography  variant='subtitle2' sx={{fontWeight:"700"}}> Mui UI  </Typography>
            <Typography variant='caption text' sx={{fontSize:{lg:"none",xs:"14px"}}}> Unstyled React components and low-level hooks.</Typography>
        </Stack>
        <Stack spacing={0} container direction="column"      
         justifyContent="flex-start"
         alignItems="flex-start" sx={{mt:2}}
        >
            <Typography  variant='subtitle2' sx={{fontWeight:"700"}}> MUi System  </Typography>
            <Typography variant='caption text' sx={{fontSize:{lg:"none",xs:"14px"}}}> CSS utilities for rapidly laying out custom designs. </Typography>
        </Stack>
        <Stack spacing={0} container direction="column"
        justifyContent="flex-start"
        alignItems="flex-start" sx={{mt:2}}
        >
            <Typography  variant='subtitle2' sx={{fontWeight:"700"}}> MUI X</Typography>
            <Typography variant='caption text' sx={{fontSize:{lg:"none",xs:"14px"}}}> Advanced and powerful components for complex .</Typography>
        </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion>
      <AccordionSummary><Typography>Pricing</Typography></AccordionSummary>
      </Accordion>

      <Accordion>
        <AccordionSummary><Typography>About us</Typography></AccordionSummary>
      </Accordion>
     
      <Accordion>
        <AccordionSummary><Typography>Blogs</Typography></AccordionSummary>
      </Accordion>
     
     
    </div>
  );
}
