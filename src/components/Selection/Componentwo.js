import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import twodata from "./Twodata";

export default function App() {
  return (
    <div className="App">
      <Grid
        container
        item
        spacing={2}
        lg={12}
        direction="row"
        sx={{ py: { lg: 7 }, px: { lg: 14,xs:3 } }}
      >
        {twodata.logodata.map((item,id) => (
          <Grid
            item
            xs={6}
            md={6}
            lg={2}
            variant="outlined"
            sx={{ px: { lg: 13, xs: 5 }, py: 1 }} key={id}
          >
            <Paper elevation={0} sx={{ p: 2 }}>
              <img src={item.img} />
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container item spacing={0} sx={{ px: 4 }}>
        <Grid item xs={12} sx={{ mx: { lg: -2, xs: 2 }, px: { lg: 58 },mt:{lg:-6,xs:1 }}}>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { lg: "14px", xs: "13px" },
              color: "#424242",
              textAlign: { lg: "center", xs: "center" },
            }}
          >
            {twodata.netdata.paragraph}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
