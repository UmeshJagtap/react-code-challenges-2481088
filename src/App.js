import './App.css';
import DogPics from './04-dog-pics/DogPics';
import ScoreKeeper from './05-score-keeper/ScoreKeeper';
import ToggleWindowEvent from './06-add-window-event/ToggleWindowEvent';
import FormValidator from './03-form-validator/FormValidator';
import DarkMode from './02-dark-mode/DarkMode';
import ColorRenderer from './01-color-renderer/ColorRenderer';

function App() {
  return (
    <div className="App">
      {/* <ToggleWindowEvent />
      <ScoreKeeper />
      <DogPics />
      <FormValidator /> */}
      <DarkMode />
      <ColorRenderer />
    </div>
  );
}

export default App;
