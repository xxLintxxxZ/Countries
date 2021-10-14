import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Quote from "./Quote";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function VerticalDividerText() {
  const header = (
    <div>
      <h2>{`Thanks for popping by `}</h2>
    </div>
  );
  const content = (
    <div>
      <h3>{`What is this app about`}</h3>
      {
        <span>
          <li> Look at flags</li>
          <li>
            {" "}
            Identifying their Capital, yes sometimes we mistake city as capital
          </li>
          <li> Check out their Maps</li>
          <li> Currency</li>
        </span>
      }
    </div>
  );
  return (
    <Grid container>
      <Grid item xs={8} sx={{ py: 5 }}>
        {header}
        {content}
      </Grid>
      <Divider orientation="vertical" flexItem></Divider>
      <Grid item xs sx={{ py: 5 }}>
      <Container maxWidth="sm">
              <Typography variant="h5" align="center" >
                Quote of the Day
              </Typography>
              <Quote />
          </Container>
      </Grid>
    </Grid>
  );
}
