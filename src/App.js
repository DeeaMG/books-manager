import { useRef, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
// import { styled, alpha } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";

import "./App.css";
import CardList from "./components/CardList/CardList";
import BooksModal from "./components/Modal/Modal";

import data from "./data.json";

function App() {
  const [cards, setCards] = useState(data);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [cardIndex, setCardIndex] = useState();
  const inputTitle = useRef(null);
  const inputDesc = useRef(null);
  // const inputURL = useRef(null);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const editModalStateHandler = (e, index = -1) => {
    e.preventDefault();
    setCardIndex(index);
    return !isOpenEdit ? setIsOpenEdit(true) : setIsOpenEdit(false);
  };

  const addModalStateHandler = () => {
    return !isOpenAdd ? setIsOpenAdd(true) : setIsOpenAdd(false);
  };

  const editHandler = (e) => {
    e.preventDefault();
    let tmpCards = [...cards];
    if (cardIndex !== -1) {
      const title = inputTitle.current.value;
      const description = inputDesc.current.value;
      tmpCards[cardIndex] = {
        title: title,
        description: description,
        url: "HarryPotter-And-The-Half-Blood-Prince.jpg",
      };
      setCards(tmpCards);
    }
    setIsOpenEdit(false);
  };

  const deleteHandler = (e, index) => {
    e.preventDefault();
    const tempCards = [...cards];
    if (index !== -1) {
      tempCards.splice(index, 1);
      setCards(tempCards);
    }
  };

  const addHandler = (e) => {
    e.preventDefault();
    let tmpCards = [...cards];
    const title = inputTitle.current.value;
    const description = inputDesc.current.value;
    // const url = inputURL.current.value;
    tmpCards.push({
      title: title,
      description: description,
      url: "HarryPotter-And-The-Half-Blood-Prince.jpg",
    });
    setCards(tmpCards);
    setIsOpenAdd(false);
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
                endIcon={<AddIcon />}
                onClick={addModalStateHandler}
              >
                Add book
              </Button>

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
      <BooksModal
        isOpen={isOpenAdd}
        modalStateHandler={addModalStateHandler}
        inputTitle={inputTitle}
        inputDesc={inputDesc}
        onClickHandler={addHandler}
      />
      <BooksModal
        isOpen={isOpenEdit}
        modalStateHandler={editModalStateHandler}
        inputTitle={inputTitle}
        inputDesc={inputDesc}
        onClickHandler={editHandler}
      />

      <CardList
        cards={cards}
        deleteHandler={deleteHandler}
        editModalStateHandler={editModalStateHandler}
      />
    </div>
  );
}

export default App;
