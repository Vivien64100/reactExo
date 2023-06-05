import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const characterList = [
   {name: "Aragorn",
  imgSrc: "https://www.numerama.com/content/uploads/2017/11/aragorn.png"
},
   {name: "Gollum",
  imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKodglX0mZ2DQTv17VfprJs6mdbn4mKsYJMGiilMCi7p60PfCiU01P7FrTb5RPU1V5Rk&usqp=CAU"
},
   {name: "Sauron",
  imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuHUXYJCw-eHSZmpJuyl7i6iE1a7yQMrfwlcybPqeb8f_1mPlxtireSxJXn804x6bcXE&usqp=CAU"
},
   {name: "Balrog",
  imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYNI54TQKeX7F2behUkoJ_6hr1pkenL5LR0JVvEQZhs0JZlKmaQdFnWfU5ZS770uTItM&usqp=CAU"
},
   {name: "Gandalf",
  imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6V9adKBUP1QW-LRaeBcPaM2qUe0x2_Wg1_AcjEudt44POnS10mQIQ027YVHaY2M4sK8&usqp=CAU"
},
   {name: "Legolas",
  imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOI2Pq_I9fvEFzWkvYUd9dYVlfmeoYMvleanpyMk8EdHgA1ftQ79hfMmRkt45hq3TOOmg&usqp=CAU"
},
   {name: "Arwen",
  imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTn1NYfd09nM8C07U5DpMbrQl5zKV4x2A1k2K740d7Tfc606KQxd6X8LhWEsHuaxCynEs&usqp=CAU"
},
   {name: "Frodon Sacquet",
  imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIHzNQhVokNv3H2gR96fWIy-fv11_FPuZmQVlD4DIGvIpNICV6Ds-7qYqJuqycSYkoQo&usqp=CAU"
}
  ];

  return (
    <>
    <h1>Hello,<Form/></h1>
    <li>
      <Card character={characterList[0]}/>
      <Card character={characterList[1]}/>
      <Card character={characterList[2]}/>
      <Card character={characterList[3]}/>
      <Card character={characterList[4]}/>
      <Card character={characterList[5]}/>
      <Card character={characterList[6]}/>
      <Card character={characterList[7]}/>
     
    </li>

    </>
  )
}

export default App
