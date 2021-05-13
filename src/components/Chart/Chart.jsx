import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);


    const barChart = (
        confirmed ? ( <
            Bar data = {
                {
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 200, 0.6)', 'rgba(0, 200, 0, 0.6)', 'rgba(200, 0, 0, 0.6)'],
                        data: [confirmed.value, recovered.value, deaths.value],
                    }, ],
                }
            }
            options = {
                {
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                    scales: {
                        xAxes: [{gridLines: { color: "#5e5e5e" },scaleLabel:{display:true,fontColor:'white',align:'center',padding:10,labelString:'DEMOGRAPHIC'}}],
                        yAxes: [{gridLines: { color: "#5e5e5e" },scaleLabel:{display:true,align:'center',fontColor:'white',padding:1,labelString:'POPULATION'}}]
                    },
                }
            }
            />
        ) : null
    );



    const lineChart = (
        dailyData.length ?
        ( <
            Line data = {
                {
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed),
                        label: 'Infected',
                        borderColor: 'rgb(0, 0, 200)',
                        backgroundColor: 'rgba(0, 0, 200, 0.1)',
                        fill: true,
                    }, {
                        data: dailyData.map((data) => data.deaths),
                        label: 'Deaths',
                        borderColor: 'rgb(200, 0, 0)',
                        backgroundColor: 'rgba(200, 0, 0, 0.1)',
                        fill: true,
                    }, ],
                }
            }
            options={
                {
                    scales: {
                        xAxes: [{gridLines: { color: "#5e5e5e" },scaleLabel:{display:true,align:'center',fontColor:'white',padding:10,labelString:'TIME'}}],
                        yAxes: [{gridLines: { color: "#5e5e5e" },scaleLabel:{display:true,align:'center',fontColor:'white',padding:1,labelString:'POPULATION'}}],
                    },
                }
            }
            />
        ) : null
    );

    return (<div className={styles.container}>{country?barChart:lineChart}</div>);
};
export default Chart;