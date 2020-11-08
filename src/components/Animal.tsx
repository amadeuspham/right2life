import React, {useState} from 'react';
import './styles/Animal.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

function Animal(props: AnimalProps) {
  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);

  const ResultDialog = (dialogProps: ResultDialogProps) => {
    return (
      <Dialog 
        onClose={() => {
          dialogProps.correct ? setShowCorrect(false) : setShowIncorrect(false)
        }} 
        aria-labelledby={`${props.name}-info-dialog`} 
        open={dialogProps.correct ? showCorrect : showIncorrect}
      >
        <DialogTitle id={`${props.name}-info-title`}>
          {dialogProps.correct ? "Correct!" : "That's not a pangolin :("}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {dialogProps.correct ? " You found a pangolin!" : "Click outside this window to resume the game."}
          </Typography>
        </DialogContent>
        {dialogProps.correct && <DialogActions>
          <Button autoFocus onClick={() => props.removeFound(props.id)} color="primary">
            Continue the game
          </Button>
        </DialogActions>}
      </Dialog>
    )
  }

  const handleClick = () => {
    if (props.isTarget) {
      setShowCorrect(true)
    } else {
      setShowIncorrect(true)
    }
  }

  return (
    <div onClick={handleClick}>
      <img className={props.name} src={process.env.PUBLIC_URL + "game/" + props.filename} />
      {showIncorrect && <ResultDialog correct={false}/>}
      {showCorrect && <ResultDialog correct={true}/>}
    </div>
  );
}

interface AnimalProps {
  id: Number,
  name: string,
  filename: string,
  isTarget: Boolean,
  removeFound: Function
}

interface ResultDialogProps {
  correct: Boolean
}

export default Animal;
