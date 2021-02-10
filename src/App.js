
import './App.css';
import './assets/output.css'
import Header from './Header/Header';
import Sliderc from './SliderC/Sliderc';
import SliderDatac from './SliderC/SliderDatac';
import Slider from './SliderH/Slider';
import SliderData from './SliderH/SliderData';

function App() {
  return (
    <div className="">
      <Header/>
      <Slider slides={SliderData}/>
      <Sliderc slidesc={SliderDatac}/>
     
    </div>
  );
}

export default App;
