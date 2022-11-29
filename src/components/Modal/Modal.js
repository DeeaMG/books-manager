import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import "./Modal.styles.css";

export default function BooksModal(props) {
  console.log(props);
  return (
    <div className="modal-container">
      {/* MODAL ADD*/}
      <Modal
        open={props.isOpen}
        onClose={props.modalStateHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-element">
          <Grid container direction={"column"}>
            <TextField
              id="modal-modal-title"
              label="Title"
              variant="outlined"
              inputRef={props.inputTitle}
              sx={{ margin: 3 }}
            />
            <TextField
              id="modal-modal-description"
              label="Description"
              variant="outlined"
              inputRef={props.inputDesc}
              sx={{ margin: 3 }}
              multiline
              rows={4}
            />
          </Grid>

          {/* <Button variant="contained" component="label">
                Upload
                <input hidden accept="images*" multiple type="file" ref={inputURL} />
              </Button> */}
          <div className="modal-buttons">
            <Button size="medium" variant="contained" onClick={(e) => props.onClickHandler(e)}>
              SUBMIT
            </Button>
            <Button size="medium" variant="contained" onClick={(e) => props.modalStateHandler(e)}>
              CLOSE
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
