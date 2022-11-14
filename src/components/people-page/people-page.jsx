import React, {Component} from 'react';


class PeoplePage extends Component {
    render() {
        return (
            <div>h
                <h4>
                    Name
                </h4>
                <ul className='list-group list-group-flush detail'>
                    <li className='list-group-item'>
                        <span className='term'>Population:</span>
                        <span>1111111111111</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotation Period:</span>
                        <span>222222222222222</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diameter:</span>
                        <span>33333333333333</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PeoplePage;