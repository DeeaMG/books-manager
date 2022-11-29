import React, { useState, useRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

import { Grid } from "@mui/material";
import "./Card.style.css";

export default function BooksCard(props) {
  // console.log(typeof props.card.url);
  const card = props.card;
  // console.log("".concat(card.url));

  let img = require.context("../../static/images", true);

  return (
    <Grid item className="card-element" xs={2} sm={4} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" image={img(`./${card.url}`)} alt={card.url} height={150} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ minHeight: 100 }}>
            {card.description.length > 200 ? card.description.substring(0, 200) : card.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button size="small" variant="contained" onClick={props.editModalStateHandler}>
            Edit
          </Button>

          <Button
            size="small"
            endIcon={<DeleteIcon />}
            variant="contained"
            onClick={props.deleteHandler}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
