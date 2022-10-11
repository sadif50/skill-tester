import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    /*
    ResponsiveContainer not working with Rechart,
    I spent more than 1 hour time for this. But I can't find a good solution.
    At last, I use bootstrap overflow class for scroll responsive like table.
    */
    return (
        <div className='container'>
            <h1 className='text-center mb-0 pb-2 mt-5 border-bottom'>
                Statistics
            </h1>
            <div className='d-flex justify-content-center table-responsive mb-5'>
                <LineChart height={500} width={500} data={data} margin={{ top: 50, right: 50, bottom: 5, left: 50 }}>
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;