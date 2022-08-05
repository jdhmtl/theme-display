import { useEffect, useState } from 'react';
import './App.css';

function Theme(props) {
  return (
    <div className="theme">
      <div className="title-bar">
        <div className="traffic-lights">
          <span className="traffic-light red-light"></span>
          <span className="traffic-light yellow-light"></span>
          <span className="traffic-light green-light"></span>
        </div>
        <span>{props.name}</span>
      </div>
      <div className="console" style={{backgroundColor: props.colors.background}}>
        <div className="blocks">
          <div className="block-row">
            <span className="block" style={{backgroundColor: props.colors.black}}></span>
            <span className="block" style={{backgroundColor: props.colors.red}}></span>
            <span className="block" style={{backgroundColor: props.colors.green}}></span>
            <span className="block" style={{backgroundColor: props.colors.yellow}}></span>
            <span className="block" style={{backgroundColor: props.colors.blue}}></span>
            <span className="block" style={{backgroundColor: props.colors.magenta}}></span>
            <span className="block" style={{backgroundColor: props.colors.cyan}}></span>
            <span className="block" style={{backgroundColor: props.colors.white}}></span>
          </div>
          <div className="block-row">
            <span className="block" style={{backgroundColor: props.colors.brightBlack}}></span>
            <span className="block" style={{backgroundColor: props.colors.brightRed}}></span>
            <span className="block" style={{backgroundColor: props.colors.brightGreen}}></span>
            <span className="block" style={{backgroundColor: props.colors.brightYellow}}></span>
            <span className="block" style={{backgroundColor: props.colors.brightBlue}}></span>
            <span className="block" style={{backgroundColor: props.colors.brightMagenta}}></span>
            <span className="block" style={{backgroundColor: props.colors.brightCyan}}></span>
            <span className="block" style={{backgroundColor: props.colors.brightWhite}}></span>
          </div>
        </div>
        <div className="colors">
          <ul>
            <li style={{color: props.colors.black}}>Normal black text</li>
            <li style={{color: props.colors.red}}>Normal red text</li>
            <li style={{color: props.colors.green}}>Normal green text</li>
            <li style={{color: props.colors.yellow}}>Normal yellow text</li>
            <li style={{color: props.colors.blue}}>Normal blue text</li>
            <li style={{color: props.colors.magenta}}>Normal magenta text</li>
            <li style={{color: props.colors.cyan}}>Normal cyan text</li>
            <li style={{color: props.colors.white}}>Normal white text</li>
          </ul>
          <ul>
            <li style={{color: props.colors.brightBlack}}>Bright black text</li>
            <li style={{color: props.colors.brightRed}}>Bright red text</li>
            <li style={{color: props.colors.brightGreen}}>Bright green text</li>
            <li style={{color: props.colors.brightYellow}}>Bright yellow text</li>
            <li style={{color: props.colors.brightBlue}}>Bright blue text</li>
            <li style={{color: props.colors.brightMagenta}}>Bright magenta text</li>
            <li style={{color: props.colors.brightCyan}}>Bright cyan text</li>
            <li style={{color: props.colors.brightWhite}}>Bright white text</li>
          </ul>
        </div>
        <p style={{color: props.colors.foreground}}> ~ $ foreground text </p>
      </div>
    </div>
  );
}

function App() {
  const url = 'https://raw.githubusercontent.com/jdhmtl/theme-display/main/src/data/themes.json';

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url, { mode: 'cors' })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="themes">
        {data.map(theme => (
          <Theme name={theme.name} colors={theme.colors} />
        ))}
      </div>
    </>
  );
}

export default App;
