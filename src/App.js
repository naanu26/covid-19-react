import React, {Component} from 'react';

import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import {fetchData} from './api/index';

import coronaImage from '../src/images/martin-sanchez-VhjsGKMefkk-unsplash.jpg';
import classes from './App.module.css';

class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {

        //fetch the data
        const fetchedData = await fetchData(country);
        
        //set the state
        this.setState({data: fetchedData, country: country});

    }

    render() {
        return (
            <div className={classes.container}>
                <img src={coronaImage} className={classes.image} alt="COVID-19" />
                <Cards data={this.state.data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={this.state.data} country={this.state.country} />
            </div>
        )
    }
}

export default App;