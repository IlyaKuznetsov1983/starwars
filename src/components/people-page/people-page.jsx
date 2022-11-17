import React, {Component} from 'react';
import PersonDetails from "../person-details/person-details";
import ItemList from "../item-list";


class PeoplePage extends Component {

    state = {
        selectedItem: null
    }

onItemSelected = (selectedItem) =>{
    this.setState({selectedItem})}

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

export default PeoplePage;