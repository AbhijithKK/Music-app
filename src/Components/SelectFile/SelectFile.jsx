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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SelectFile({setSongs,nsong,psong,setName}) {
  const [open, setOpen] = React.useState(false);
  const [audioRef, setAudioRef] = React.useState(null);
  let[currentIndex,setCurrentIndex]=React.useState(-1)
  const[tracks,setTracks]=React.useState([])
  const[autoPlay,setAutoPlay]=React.useState(false)
//   let ref = React.useRef(null);
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
      setTracks(audioFiles)
      console.log("aud Files", audioFiles);

      AudSett(audioFiles)

    }
 
  };
  const AudSett=(audioFiles)=>{
    setName(audioFiles[currentIndex]?.name)
    audioRef?.pause()
    if (audioFiles.length > 0) {
      if (audioFiles.length===currentIndex) {
        
        setAutoPlay(false)
      }
      let Audi=new Audio(URL.createObjectURL(audioFiles[currentIndex]))
              setAudioRef(Audi);   
              if (currentIndex!==0 ) {
                Audi.play()
              }    
              if (autoPlay===true) {
                
                  Audi.play()
                
              }
             
    }
  }
  const callback = React.useCallback(() => {
    setSongs(audioRef);
  }, [audioRef,setSongs]);
  
  React.useEffect(() => {
    if (audioRef) {
      callback();
    }
  }, [audioRef, callback,tracks]);
  React.useEffect(()=>{
    if (tracks) {
      
        setCurrentIndex(currentIndex + 1) 
      AudSett(tracks)
    }else if(tracks.length-1===currentIndex){
      setCurrentIndex(0)
    }else if(tracks.length===1){
      setAutoPlay(true)
    }
  },[nsong,tracks])
  React.useEffect(()=>{
    if (tracks) {
        if(!currentIndex<0){
          setCurrentIndex(currentIndex - 1) 
        }
        if (currentIndex===-1) {
          setCurrentIndex(0)
        }else if(currentIndex<0){
          setCurrentIndex(tracks.length-1)
         
        
        }else if(tracks.length-1){
          setAutoPlay(true)
        }
        
        else{
          setCurrentIndex(currentIndex - 1) 
        }
        console.log(currentIndex);
      AudSett(tracks)
    }
  },[psong])
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
            <input
              type="file"
             
              multiple={true}
              onChange={SelectDirectory}
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button onClick={handleClose}>close</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
