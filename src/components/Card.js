import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

import { Grid } from "@mui/material";
import "./Card.style.css";

export default function BooksCard(props) {
  console.log(typeof props.card.url);
  const card = props.card;

  return (
    <Grid item className="card-element" xs={2} sm={4} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          image={require("../static/images/".concat(card.url))}
          alt={card.url}
          height={150}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button size="small" variant="contained" onClick={props.editHandler}>
            Edit
          </Button>
          <Button
            size="small"
            endIcon={<DeleteIcon />}
            variant="contained"
            onClick={props.deleteHandler}
          >
            Deletes
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
