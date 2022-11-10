import React, {Component} from  'react';
import './random-planet-block.css'
import ServicesApi from "../../../services-api";

class RandomPlanetBlock extends Component {
    services = new ServicesApi()

    state = {
        planet: {},
        isLoading: null
    }

    constructor(props) {
        super(props);
        this.fetchPlanet()
        setInterval(this.fetchPlanet, 5000)
    }

    setPlanet = (planet) => {
        console.log(planet)
        this.setState({
            planet
        })
    }

    fetchPlanet = () => {
        const id = Math.floor(Math.random()*17) +2
        this.services.getPlanet(id)
            .then(this.setPlanet)
    }

    render() {
    const {planet : {name , population , diameter , rotationPeriod, id}, isLoading } = this.state

        return (
            <React.Fragment>
                <div className='picture-container'>
                    <img className="img-fluid img-thumbnail"
                         src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
                </div>
                <h4>
                    {name}
                </h4>
                <ul className='list-group list-group-flush detail'>
                    <li className='list-group-item'>
                        <span className='term'>Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotation Period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>

            </React.Fragment>
        );
    }
}
export default RandomPlanetBlock;