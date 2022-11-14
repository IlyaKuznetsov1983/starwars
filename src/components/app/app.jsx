import React, {useState} from 'react'
import Header from "../header";
import RandomPlanetBlock from "../header/random-planet-block/random-planet-block";

const App = () => {
const  [isOpen, setIsOpen] = useState(true)

    return (<div>
    <Header/>
            {isOpen && <RandomPlanetBlock/>}
            <button onClick={() => setIsOpen((state) => !state)
            }>UNMOUNT</button>
    </div>)
}

export default App