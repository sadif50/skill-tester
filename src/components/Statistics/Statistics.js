import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    return (
        <div style={{backgroundColor: 'white', textAlign: 'center'}}>
            <LineChart width={800} height= {500} data = {data}>
                <XAxis dataKey="name" />
                <YAxis dataKey="total"/>
                <Tooltip/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistics;