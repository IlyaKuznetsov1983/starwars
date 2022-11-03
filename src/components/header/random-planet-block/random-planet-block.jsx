import React from  'react';
import './random-planet-block.css'
import serviceApi from "../../../services-api";

class RandomPlanetBlock extends Component {
    services = new serviceApi()

    state = {
        name: '',
        population: '',
        diameter: '',
        rotation_period : ''

    }

    constructor(props) {
        super(props);
        this.fetchPlanet()
    }

    setPlanet =(planet) => {
        this.setState({
            planet
        })
    }

    fetchPlanet = () => {
        this.services.getPlanet(2)
            .then(
                this.setPlanet)


    }

    render() {
const {name = '', population = '', diameter = '', ratation_period =''} = this.state

        return (
            <React.Fragment>
                <div className='picture-container'>
                    <img className="img-fluid img-thumbnail"
                         src="https://widgetopia.io/widget/widget-planet" alt=""/>
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
                        <span>{rotation_period}</span>
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