import React, { Component } from "react";
import "./index.css"
import Lundi from "./Components/lundi";
import "./Styles/bootstrap.min.css"
/*import Home from "./Component/home";
import Header from'./Header.js';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Home/>
      </div>
    )
  }
}

export default App;*/


/*import { getImageUrl } from './Components/utils.js';
import './App.css'
import './Header.js'

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
  return (
    <section className='profile'>
      <h2>{name}</h2>
      <img
      className='avatar'
      src={getImageUrl(imageId)}
      alt={name}
      width={imageSize}
      height={imageSize}
      />
      <ul>
        <li><b>Profession:</b> {profession}</li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(',')})
        </li>
        <li>
        <b>Discouvered:</b>
        {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery (discovery) {
  return (
    <div>
      <h1> Notable Scientist</h1>
      <Profile
      imageId="szV5sdG"
      name="Maria Sklodowska-Curie"
      profession="physicist and chemist"
      discovery="polonium (chemical element"
      awards={[
        'Noble Prize in Physics',
        'Noble Prize in Cheistry',
        'Davy Medal'
      ]}
      />
       <Profile
      imageId="YfeOqp2"
      name="Katsuko Saruhashi"
      profession="geochemist"
      discovery="a method of messuring carbon dioxide in seawater"
      awards={[
        'Miyake Prize for geochemistry',
        'Tanaka Prize',
      ]}
      />

    </div>
  )
}*/


class App extends Component {
  render(){
    return (
      <div className="App">
      <Lundi/>
      </div>
    )
  }
}

export default App;