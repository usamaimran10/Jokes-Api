import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Grid from "@mui/material/Grid";

export default function MediaCard() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios({
      method: "get",
      url: "https://icanhazdadjoke.com/slack",
      // responseType: "stream",
    }).then((res) => {
      setData(res.data);
    });
  }, []);

  const reload = () => {
    axios({
      method: "get",
      url: "https://icanhazdadjoke.com/slack",
      // responseType: "stream",
    }).then((res) => {
      setData(res.data);
    });
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      marginTop="70px"
    >
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 345, alignItems: "center" }}>
          <CardMedia
            component="img"
            height="240"
            image="https://play-lh.googleusercontent.com/Q8klPWjtLQrBeeP2oDAtA0H0CrYZBpK8ckF3HnqDMT2L6GGdsUCjYc75mfRkoQyhrwfS=w240-h480-rw"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Jokes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.attachments?.[0].text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={reload}>
              Refresh
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
