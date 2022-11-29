import "./App.css";
import { useRef, useState } from "react";
import CardList from "./components/CardList/CardList";
// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

const images = [
  {
    title: "Title 1",
    description:
      "Vivamus sed lacus euismod, vestibulum ante ut, porta lectus. Quisque eu ullamcorper nunc. Vestibulum scelerisque congue est, sed interdum augue ornare eget. Ut et justo luctus, sollicitudin dui at, imperdiet purus. Proin imperdiet ex sit amet lacus mollis, vel malesuada lectus blandit. Fusce et sem turpis. Morbi dignissim efficitur libero sit amet euismod. Aenean at eros aliquam, blandit dolor fringilla, placerat tellus. Pellentesque elementum tempor sem vitae consectetur. Vestibulum in eleifend lectus. Donec tempor enim mi, finibus convallis lorem auctor ut. Proin eget pellentesque massa. Phasellus sagittis, metus non iaculis euismod, massa magna euismod est, at viverra nisi turpis vel ipsum. Etiam porttitor ut neque sit amet convallis.",
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
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const inputTitle = useRef(null);
  const inputDesc = useRef(null);
  // const inputURL = useRef(null);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const editModalStateHandler = (e) => {
    e.preventDefault();
    return !isOpenEdit ? setIsOpenEdit(true) : setIsOpenEdit(false);
  };

  const editHandler = (e) => {
    e.preventDefault();
    let tmpCard = cards;

    console.log(tmpCard);
  };
  console.log(cards);

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
    const title = inputTitle.current.value;
    const description = inputDesc.current.value;
    // const url = inputURL.current.value;
    tmpCards.push({
      title: title,
      description: description,
      url: "HarryPotter-And-The-Half-Blood-Prince.jpg",
    });
    setCards(tmpCards);
  };

  const addModalStateHandler = () => {
    return !isOpenAdd ? setIsOpenAdd(true) : setIsOpenAdd(false);
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
                onClick={addModalStateHandler}
              >
                ADD BOOK
              </Button>
              {/* MODAL ADD*/}
              <Modal
                open={isOpenAdd}
                onClose={addModalStateHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    defaultValue="Title"
                    inputRef={inputTitle}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    defaultValue="description"
                    inputRef={inputDesc}
                  />
                  {/* <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="images*" multiple type="file" ref={inputURL} />
                  </Button> */}
                  <Button onClick={(e) => addHandler(e)}>SUBMIT</Button>
                  <Button onClick={(e) => addModalStateHandler(e)}>CLOSE</Button>
                </Box>
              </Modal>
              {/* MODAL EDIT*/}
              <Modal
                open={isOpenEdit}
                onClose={editModalStateHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    defaultValue="Title"
                    inputRef={inputTitle}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    defaultValue="description"
                    inputRef={inputDesc}
                  />
                  {/* <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="images*" multiple type="file" ref={inputURL} />
                  </Button> */}
                  <Button onClick={editHandler}>SAVE</Button>
                  <Button onClick={editModalStateHandler}>CLOSE</Button>
                </Box>
              </Modal>
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
      <CardList
        cards={cards}
        deleteHandler={deleteHandler}
        editModalStateHandler={editModalStateHandler}
      />
    </div>
  );
}

export default App;
