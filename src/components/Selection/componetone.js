import {
  Button,
  Grid,
  Typography,
  Stack,
  ButtonGroup,
  Box,
  Paper,
  Slider,
  Avatar,
  Switch,
  label,
  Table,
  TableHead,
  TableCell,
} from "@mui/material";
import Chip from "@mui/material/Chip";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CodeIcon from "@mui/icons-material/Code";

import React from "react";
import onedata from "./oneData";

export default function Blockf() {


  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Grid container item spacing={4} sx={{ px: { lg: 8, xs: 1 }, py: 5 }}>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          mt: 10,
          padding: { xs: "2px", lg: "30px" },
          mt: { lg: 14, xs: 6 },
        }}
      >
        <Grid
          item
          sx={{
            ml: { lg: 3, xs: 1 },
            textAlign: { xs: "center", lg: "start" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: { lg: "800", xs: "800" },
              color: "#1976d2",
              lineHeight: 0.8,
              px: { xs: 2 },
              fontSize: { xs: "2.6rem", lg: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)" },
            }}
          >
          {onedata.titleone}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "800",
                color: "#0A1929",
                lineHeight: 1.1,
                fontSize: { xs: "2.6rem", lg: "68px" },
                ml: { lg: 0, xs: -0.3 },
              }}
            >
             {onedata.titletwo}
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              p: 2,
              ml: -2,
              color: "#3E5060",
              px: { xs: 4 },
              display: "flex",
              flexWrap: "wrap",
              fontWeight: "400",
              fontSize: "1rem",
            }}
          >
           {onedata.paragraph}
          </Typography>
        </Grid>
        <Stack direction="row" specing={1} sx={{ py: 4 }}>
          <Grid
            item
            container
            spacing={2}
            lg={12}
            sx={{ display: { xs: "12", md: "6" }, mx: { xs: 2, lg: 4 } }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                p: 1.5,
                borderRadius: "10px",
                width: { xs: "100%", lg: "140px" },
                backgroundColor: "#1976d2",
              }}
            >
             {onedata.btnone}
              <ChevronRightIcon sx={{ fontSize: "large" }} />
            </Button>
            <Button
              variant="outlined" 
              sx={{
                width: { xs: "100%", borderRadius: "10px ", lg: "330px" },
                backgroundColor: "#ebedf0",
                mt: { lg: 0, xs: 2.5 },
                ml: { lg: 2, xs: -0.4 },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "12px", lg: "12px" },
                  color: "#0A1929",
                  p: { lg: 0, xs: 1.5 },
                  width: { xs: "100%", lg: "none" },
                  ml: { lg: 0, xs: -2 },
                }}
              >
               {onedata.btntwo}
              </Typography>
              <ContentCopyIcon
                sx={{
                  fontSize: { lg: "medium", xs: "small" },
                  mx: 1,
                  mt: { lg: 0, xs: 0 },
                }}
              />
            </Button>
          </Grid>
        </Stack>
      </Grid>

      <Grid
        item
        xs={12}
        lg={6}
        md={7}
        overflow="hidden"
        sx={{
          p: 5,
          mt: 5,
          display: { xs: "none", md: "block" },
          backgroundColor: "#fafafa",
          px:1
        }}
      >
        <Grid container item spacing={0} lg={12}>
          <Grid
            item
            xs={12}
            lg={8}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box
              sx={{
                backgroundColor: "#1976d2",
                height: "auto",
                width: 360,
                borderRadius: "10px",
              }}
            >
              <Stack  specing={4} sx={{ p: 3,display:"flex",flexDirection:"row" }}>
                <AccessTimeIcon sx={{ color: "white", fontSize: "medium" }} />
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ color: "white", mx: 1 }}
                >
                  {onedata.date}
                </Typography>
              </Stack>

              <CodeIcon
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  ml: 3,
                  color: "#1976d2",
                }}
                size="large"
              />

              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "500", ml: 3 }}
              >
                {onedata.paragraphtwo}
              </Typography>

              <Stack spacing={1} sx={{ px: 3, py: 2 ,display:"flex",flexDirection:"column"}}>
                <Grid item container direction="row"  spacing={1}>
                  <Grid item>
                    <Avatar
                      sx={{ borderRadius: "10px" }}
                      variant="square"
                      src="https://mui.com/static/images/avatar/1.jpg"
                    />
                  </Grid>
                  <Grid item>
                    <Stack spacing={1} sx={{ mx: 1,display:"flex",flexDirection:"column" }}>
                      <Typography sx={{ fontSize: "14px", color: "#bbdefb" }}>
                       {onedata.paragraphthree}
                      </Typography>
                      <Typography sx={{ color: "white" }}>
                      {onedata.paragraphfour}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item>
                    <Box sx={{ width: 300 }}>
                      <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        sx={{ color: "white" }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Stack>
            </Box>

            <Paper elevation={3} sx={{ py: 0, my: 3, display: "flex" }}>
              <Avatar
                src="https://mui.com/static/images/cards/basement-beside-myself.jpeg"
                variant="square"
                sx={{ width: 130, height: 120 }}
              />
              <Stack spacing={2} sx={{ p: 4,display:"flex",flexDirection:"column" }}>
                <Typography>
                 {onedata.paragraphfive}
                </Typography>
              </Stack>
            </Paper>

            <Stack  spacing={3}  direction="row" sx={{ mt: 1 ,display:"flex",flexDirection:"row"}}>
              <Button
                size="large"
                variant="outlined"
                sx={{ p: 1.5, borderRadius: "10px", color: "#2196f3" }}
              >
                {onedata.btnthree}
              </Button>
              <Button
                size="large"
                variant="outlined"
                sx={{ p: 1, color: "#2196f3" }}
              >
                {onedata.btnfour}
              </Button>
              <Button
                size="large"
                variant="outlined"
                sx={{ p: 1, color: "#2196f3" }}
              >
                {onedata.btnfive}
              </Button>
            </Stack>

            <Stack  direction="row" spacing={3} sx={{ py: 5 }}>
              <Switch {...label} defaultChecked sx={{ color: "#1976d2" }} />
              <Switch {...label} defaultChecked sx={{ color: "#1976d2" }} />
              <Chip
                label={onedata.btnthree}
                sx={{ color: "#1976d2", backgroundColor: "#99e4ee" }}
                onDelete={handleDelete}
              />
              <Chip label={onedata.btnfour} onDelete={handleDelete} />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Stack
              sx={{display:"flex",flexDirection:"column"}}
              spacing={1}
              justifyContent="space-between"
            >
              <Box
                overflow="hidden"
                sx={{ width: "100%", height: "auto", ml: 7, mt: 2 }}
              >
                <Table sx={{ color: "#757575", fontSize: "14px", mx: 2 }} >
                  <TableHead>{onedata.fold}</TableHead>
                  <Stack sx={{ display: "flex", flexDirection: "column" }}>
                    <TableCell>{onedata.foldone}</TableCell>
                    <TableCell>{onedata.foldtwo}</TableCell>
                    <TableCell>{onedata.foldthree}</TableCell>
                    <TableCell>{onedata.btnfour}</TableCell>
                  </Stack>
                </Table>
              </Box>
              <Box
                overflow=""
                sx={{ width: "100%", height: "auto", ml: 6, mt: 4 }}
              >
                <ButtonGroup
                  variant="contained"
                  sx={{ ml: 7, borderRadius: "10px" }}
                  aria-label="outlined primary button group"
                >
                  <Button
                    variant="contained"
                    sx={{
                      p: 1,
                      width: "100px",
                      borderRadius: "12px",
                      backgroundColor: "#1976d2",
                    }}
                  >
                   {onedata.btnsix}
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      p: 1,
                      width: "100px",
                      borderRadius: "12px",
                      backgroundColor: "#1976d2",
                    }}
                  >
                    {onedata.btnseven}
                  </Button>
                </ButtonGroup>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
