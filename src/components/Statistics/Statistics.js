import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    return (
        <div className='container'>
            <h1 className='text-center mb-0 pb-2 mt-5 border-bottom'>
                Statistics
            </h1>
            <div className='d-flex justify-content-center mb-5'>
                <ResponsiveContainer height={500} width="100%">
                    <LineChart data={data} margin={{ top: 50, right: 50, bottom: 5, left: 0 }}>
                        <XAxis dataKey="name" />
                        <YAxis dataKey="total" />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;