import React, {Component} from 'react';
import ItemList from "../item-list";
import PeoplePage from "../people-page";

class PersonDetails extends Component {
    render() {
        return (
            <div className={'row mb2'}>
                <div className={'col-md-6'}>
                    <ItemList/>
                </div>
                <div className={'col-md-6'}>
                    <PeoplePage/>
                </div>
            </div>
        );
    }
}

export default PersonDetails;
