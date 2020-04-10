import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';
import classes from './CountryPicker.module.css';
import { fetchCountries } from '../../api/index';

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);

    // console.log(fetchedCountries);

    return (
       <FormControl className={classes.formControl}>
           <NativeSelect defaultValue=" " onChange={(event) => handleCountryChange(event.target.value)}>
               <option value=" ">Global</option>
               {fetchedCountries.map((country, id) => <option key={id} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
}
export default CountryPicker;