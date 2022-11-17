import React, {Component} from 'react';
import serviceApi from "../../services-api";
import Spinner from "../header/random-planet-block/spiner";
import Error from "../app/error";

class ItemList extends Component {

    services = new serviceApi()

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.services.getAllPeoples()
            .then(peopleList => {
                this.setState({
                    peopleList
                })
            })
    }

    renderItems(peopleList) {
        return peopleList.map(({id, name}) => {
            return (
                <li className='list-group-item'
                        key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                {name}
            </li>);
        })
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError', error)
        return {hasError: true}

    }


    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch', error, errorInfo)
    }


    render() {
        const {peopleList, hasError} = this.state

        if (!peopleList) {
            return <Spinner/>
        }

        if (hasError) {
            return <Error/>
        }

        const items = this.renderItems(peopleList)

        return <ul className='list-group'>
            {items}
        </ul>


    }

}

export default ItemList;