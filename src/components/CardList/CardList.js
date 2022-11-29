import React from "react";
import BooksCard from "../Card/Card";
import { Grid } from "@mui/material";
import "./Cards.style.css";

export default function CardList(props) {
  return (
    <Grid
      container
      className="cards-container"
      spacing={{ xs: 2, sm: 3, md: 4 }}
      columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
    >
      {props.cards.map((card, index) => (
        <BooksCard
          card={card}
          key={index}
          deleteHandler={(e) => props.deleteHandler(e, index)}
          editModalStateHandler={props.editModalStateHandler}
        />
      ))}
    </Grid>
  );
}
