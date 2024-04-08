import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



let Rechart=()=> {
  let data=[{"year":2019,"q1":300000,"q2":450000,"q3":200000,"q4":500000},
  {"year":2020,"q1":200000,"q2":490000,"q3":100000,"q4":400000},
  {"year":2021,"q1":500000,"q2":350000,"q3":500000,"q4":800000},
  {"year":2022,"q1":200000,"q2":650000,"q3":300000,"q4":200000},
  {"year":2023,"q1":400000,"q2":350000,"q3":400000,"q4":900000}]


    return (<div style={{"width":"100%","height":"300px"}}>
   
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="q1" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="q2" stroke="#82ca9d" />
          <Line type="monotone" dataKey="q3" stroke="#92ba91" />
          <Line type="monotone" dataKey="q4" stroke="#a21a23" />
        </LineChart>
   
      </div>
    );
  }
export default Rechart