import React, {Component} from 'react';
import ServicesApi from "../../services-api";


class PersonDetails extends Component {


    services = new ServicesApi()

    state ={
        item: null
    }

    componentDidMount() {
        this.updateItem()
    }


    componentDidUpdate(prevProps, prevState,s) {
     if (this.props.selectedItem !== prevProps.selectedItem){
         this.updateItem()
     }


    }


    updateItem() {
        const {selectedItem} =this.props
        if(!selectedItem) return
        this.services.getPerson(selectedItem)
            .then(item => {
                this.setState({item})
            })
    }

    render() {

        const{item} = this.state

        if (!item){
            return<span> {}Select your side ! </span>
        }


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

export default PersonDetails;
