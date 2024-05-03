"use client";

import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";

import NftType from "../../components/nftType";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function Page() {
  const renderGrid = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>Upload an image</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography variant="h3" gutterBottom textAlign={"left"}>
              Create a NFT
            </Typography>
            <Typography variant="body1" gutterBottom textAlign={"left"}>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
              tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
              cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>

            <FormControl fullWidth={true}>
              <FormLabel>Name</FormLabel>
              <TextField fullWidth={true}></TextField>
              <FormLabel>Description</FormLabel>
              <TextField></TextField>
              <FormLabel>Website</FormLabel>
              <TextField></TextField>
              <FormLabel>NFT type</FormLabel>
              <NftType></NftType>
              <FormLabel>Royalties</FormLabel>
              <TextField></TextField>
              <Button>Next</Button>
            </FormControl>
          </Item>
        </Grid>
      </Grid>
    );
  };

  const renderPage = () => {
    return <div style={{ margin: "0 auto", width: "65%" }}>{renderGrid()}</div>;
  };

  return renderPage();
}
