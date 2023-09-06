import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SelectFile({ setSongs }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    setOpen(true);
  }, []);

  const SelectDirectory = async (event) => {
    let files = Array.from(event.target.files);
    console.log(files);

    if (files && files.length > 0) {
      const audioFiles = [];
      files.forEach((entry) => {
        if (entry.name.endsWith(".mp3")) {
          audioFiles.push(entry);
        }
      });

      setSongs(audioFiles);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Select Audio Folder
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input type="file" multiple={true} onChange={SelectDirectory} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button onClick={handleClose}>close</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
