import React, {useState} from 'react'
import Header from "../header";
import RandomPlanetBlock from "../header/random-planet-block/random-planet-block";
import PeoplePage from "../people-page";
import PersonDetails from "../person-details/person-details";

const App = () => {
const  [isOpen, setIsOpen] = useState(true)

    return (<div>
    <Header/>
            {isOpen && <RandomPlanetBlock/>}
            <button onClick={() => setIsOpen((state) => !state)
            }>UNMOUNT</button>
        <PersonDetails/>
    </div>)
}

export default App