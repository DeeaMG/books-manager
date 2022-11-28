import "./App.css";
import { useState } from "react";
import CardList from "./components/CardList";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const images = [
  {
    title: "Title 1",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    url: "HarryPotter-And-The-Half-Blood-Prince.jpg",
  },
  {
    title: "Title 2",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    url: "HarryPotter-And-The-Half-Blood-Prince.jpg",
  },
  {
    title: "Title 3",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    url: "HarryPotter-And-The-Half-Blood-Prince.jpg",
  },
  {
    title: "Title 4",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    url: "HarryPotter-And-The-Half-Blood-Prince.jpg",
  },
  {
    title: "Title 5",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    url: "HarryPotter-And-The-Half-Blood-Prince.jpg",
  },
];

function App() {
  const [cards, setCards] = useState(images);
  console.log(cards);

  const editHandler = (e) => {
    e.preventDefault();
    console.log("edit element");
  };

  const deleteHandler = (e, index) => {
    e.preventDefault();
    const tempCards = [...cards];
    if (index !== -1) {
      tempCards.splice(index, 1);
      console.log(tempCards);
      setCards(tempCards);
    }
    console.log(cards);
  };

  const addHandler = (e) => {
    e.preventDefault();
    let tmpCards = [...cards];
    tmpCards.push({
      title: "Hellosdfds",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      url: "HP-And-The-Coursed-Child.jpg",
    });
    // tmpCards.push(newCard)
    setCards(tmpCards);
    console.log(cards);
  };

  // const Search = styled("div")(({ theme }) => ({
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.black, 0.15),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.black, 0.25),
  //   },
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(1),
  //     width: "auto",
  //   },
  // }));

  // const SearchIconWrapper = styled("div")(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }));

  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: "inherit",
  //   "& .MuiInputBase-input": {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create("width"),
  //     width: "100%",
  //     [theme.breakpoints.up("sm")]: {
  //       width: "12ch",
  //       "&:focus": {
  //         width: "20ch",
  //       },
  //     },
  //   },
  // }));

  return (
    <div className="App">
      <div className="navbar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Button
                size="small"
                variant="contained"
                sx={{ display: { xs: "none", sm: "block" } }}
                onClick={(e) => addHandler(e)}
              >
                ADD
              </Button>
              {/* <Button onClick={handleOpen}>Open modal</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
                </Box>
              </Modal> */}
              {/* <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
              </Search> */}
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <CardList cards={cards} deleteHandler={deleteHandler} editHandler={editHandler} />
    </div>
  );
}

export default App;
