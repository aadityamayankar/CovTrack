import React from 'react';
import { Cards, Chart, CountryPicker,NavBar,Footer } from './components';
import styles from './App.module.css';
import {createMuiTheme,ThemeProvider} from '@material-ui/core';
import { fetchData } from './api';

const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <ThemeProvider theme={darkTheme}>
                    <NavBar/>
                    <Cards data = {data}/> 
                    <CountryPicker handleCountryChange = { this.handleCountryChange }/>
                    <Chart data = { data }
                        country = { country }
                    />
                    <Footer/>
                </ThemeProvider>
            </div>
        )
    }
}

export default App;