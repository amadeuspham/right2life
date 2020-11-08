import React, {useState, useEffect} from 'react';
import Animal from './Animal';
import GameStats from './GameStats';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import './styles/Game.css';
import gameAnimals from '../data/gameAnimals';

const MAX = 2;

function GamePlay() {
  const [remainingAnimals, setRemainingAnimals] = useState(gameAnimals)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (gameAnimals.length - remainingAnimals.length >= MAX) {
      setTimeout(endGame, 5000);
    }
  }, [remainingAnimals]);

  const endGame = () => {
    setGameOver(true);
  }

  const handleRemoveCorrect = (id: Number) => {
    setRemainingAnimals(remainingAnimals.filter(animal => animal.id !== id));
  }

  const EndGameDialog = () => {
    return (
      <Dialog 
        onClose={() => setGameOver(true)} 
        aria-labelledby="gameover-dialog"
        open={gameOver}
      >
        <DialogTitle id="gameover-title">
          Can't find all of them?
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            It is really hard to find the last pangolin, isn't it? 
            Because it is not there. Actually, it might become impossible 
            to do that in real life as well, since pangolins are the most 
            trafficked mammal in the world thanks to their beautiful scales 
            used in traditional eastern medical products. They might soon 
            face extinction because of this.
          </Typography>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div>
      <img className="background" src={process.env.PUBLIC_URL + "game/jungle.jpg"} alt="Jungle background" />
      {remainingAnimals.map(animal =>
        <Animal 
          key={animal.id} 
          id={animal.id}
          name={animal.name} 
          filename={animal.filename} 
          isTarget={animal.isTarget}
          removeFound={handleRemoveCorrect}
        />
      )}
      <GameStats foundNum={gameAnimals.length - remainingAnimals.length}/>
      {gameOver && 
        <EndGameDialog/>
      }
    </div>
  );
}

export default GamePlay;
