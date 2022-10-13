
import { Grid } from "@mui/material";
import * as React from "react";

import InvertColorsIcon from "@mui/icons-material/InvertColors";
import Typography from "@mui/material/Typography";

import  fourdata  from "./Fourdata";
import { Stack } from "@mui/system";

export default function Componentfour() {
  return (
    <Grid
      container
      item
      specing={0}
      lg={12}
      sx={{ px: { lg: 13, xs: 3 }, py: { lg: 8, xs: 3 }, mt: 4 }}
    >
      <Grid item xs={12} lg={6} sx={{ p: 0 }}>
        <Typography
          variant="subtitle2"
          sx={{ color: "#0072E5", fontWeight: "700", fontSize: "0.875rem" }}
        >
          {fourdata.headerdata.title}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#132F4C",
            fontWeight: "800",
            whiteSpace: "pre",
            mixWidth: { lg: "500px", xs: "300px" },
            mt: 1,
            fontSize: { xs: "24px", lg: "35px" },
            display: "flex",
            flexDirection: "row",
          }}
        >
         {fourdata.headerdata.header}{" "}
          <Typography
          variant=""
            sx={{
              
              py: -3,
              fontWeight: "900",
              fontSize: { xs: "24px", lg: "35px" },
              color: "#1976d2",
            }}
          >
          {fourdata.headerdata.header1}
          </Typography>
          {fourdata.headerdata.header2}

        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "900",color: "#132F4C", fontSize: { xs: "25px", lg: "35px" } }}
        >
         {fourdata.headerdata.header3}
        </Typography>
      </Grid>

      <Grid
        item
        container
        lg={12}
        xs={12}
        sx={{ ml: { lg: -2, xs: 0 }, mt: { lg: 3 } }}
      >
        
         
            { 
                fourdata.netdata.map((item,id)=>(
               
                 <Grid item container xs={12} lg={3} sm={6} sx={{p:1}} direction="column" key={id} >
                    <Stack
                        sx={{
                          p :{ lg: 3, xs: 2 },
                          borderRadius: "10px",
                          border: "1px solid #E7EBF0",
                          backgroundColor: "white",
                        }}
                    >
                      <Grid container spection={2} direction="row">
                        <Grid item xs={2}>
                          <InvertColorsIcon
                            sx={{ color: "#007FFF", fontSize: "1.25rem" }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sx={{ fontWeight: "700", fontSize: "0.875rem",ml:-1 }} 
                        >
                        {item.title}
                        </Grid>
                      </Grid>
                          <Grid item>
                        <Typography
                          sx={{
                            color: "#3E5060",
                            fontWeight: "400",
                            fontSize: "0.875rem",
                          }}
                        >
                        {item.text}
                        </Typography>
                      </Grid> 

                    
                      </Stack>
                      
                  </Grid>
             
                ))
            
            }
           
          
       

        {/* <Grid item xs={12} lg={3} sm={6} sx={{ p: 1 }}>
          <Paper
            sx={{
              p: { lg: 3, xs: 2 },
              borderRadius: "10px",
              border: "1px solid #E7EBF0",
              backgroundColor: "white",
            }}
            elevation={0}
          >
            <Grid container spection={2}>
              <Grid item xs={1.5}>
                <ConstructionIcon
                  sx={{ color: "#007FFF", fontSize: "1.25rem" }}
                />
              </Grid>
              <Grid
                item
                xs={10.2}
                sx={{ fontWeight: "700", fontSize: "0.875rem" }}
              >
                Intuitive customization
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "#3E5060",
                  fontWeight: "400",
                  fontSize: "0.875rem",
                }}
              >
                Our components are as flexible as they are powerful. You always
                have full control over how they look and behave.
              </Typography>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={3} sm={6} sx={{ p: 1 }}>
          <Paper
            sx={{
              p: { lg: 3, xs: 2 },
              borderRadius: "10px",
              border: "1px solid #E7EBF0",
              backgroundColor: "white",
            }}
            elevation={0}
          >
            <Grid container spection={2}>
              <Grid item xs={1.5}>
                <InsertChartIcon
                  sx={{ color: "#007FFF", fontSize: "1.25rem" }}
                />
              </Grid>
              <Grid
                item
                xs={10.2}
                sx={{ fontWeight: "700", fontSize: "0.875rem" }}
              >
                Unrivaled documentation
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "#3E5060",
                  fontWeight: "400",
                  fontSize: "0.875rem",
                }}
              >
                The answer to your problem can be found in our documentation.
                How can we be so sure? Because our  boast over 2,000
                contributors.
              </Typography>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={3} sm={6} sx={{ p: 1 }}>
          <Paper
            sx={{
              p: { lg: 3, xs: 2 },
              borderRadius: "10px",
              border: "1px solid #E7EBF0",
              backgroundColor: "white",
            }}
            elevation={0}
          >
            <Grid container spection={2}>
              <Grid item xs={1.5}>
                <SettingsAccessibilityIcon
                  sx={{ color: "#007FFF", fontSize: "1.25rem" }}
                />
              </Grid>
              <Grid
                item
                xs={10.5}
                sx={{ fontWeight: "700", fontSize: "0.875rem" }}
              >
                Dedicated to accessibility
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "#3E5060",
                  fontWeight: "400",
                  fontSize: "0.875rem",
                }}
              >
                We believe in building for everyone. That's why highest
                accessibility is one of our priorities with every new feature we
                ship.
              </Typography>
            </Grid>
          </Paper>
        </Grid> */}
      </Grid>
    </Grid>
  );
}
