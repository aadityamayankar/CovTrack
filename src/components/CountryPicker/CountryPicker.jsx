import React, { useState, useEffect } from 'react';
import { FormControl,Select,MenuItem } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setfetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setfetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setfetchedCountries]);

    return ( 
        <FormControl className = { styles.formControl } >
            <Select defaultValue = ""
            color="secondary"
            displayEmpty="true"
            onChange = {(e) => handleCountryChange(e.target.value)}>
                <MenuItem value = "" > Global </MenuItem> 
                {
                    fetchedCountries.map((country, i) => < MenuItem key = { i }
                    value = { country } > { country } </ MenuItem>)
                }
            </Select> 
        </FormControl>
    )
}
export default CountryPicker;