import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,

} from 'recharts';

const data = [
  {
    month: 'January',
    Completed: 17,
    InProgress: 7,
    Pending: 2,
  },
  {
    month: 'February',
    Completed: 8,
    InProgress: 13,
    Pending: 10,
  },
  {
    month: 'March',
    Completed: 20,
    InProgress: 9,
    Pending: 11,
  },
  {
    month: 'April',
    Completed: 27,
    InProgress: 3,
    Pending: 5,
  },
  {
    month: 'May',
    Completed: 18,
    InProgress: 12,
    Pending: 2,
  },
  {
    month: 'June',
    Completed: 13,
    InProgress: 8,
    Pending: 5,
  },
  {
    month: 'July',
    Completed: 8,
    InProgress: 3,
    Pending: 9,
  },
  {
    month: 'August',
    Completed: 24,
    InProgress: 1,
    Pending: 0,
  },
  {
    month: 'September',
    Completed: 30,
    InProgress: 13,
    Pending: 2,
  },
  {
    month: 'October',
    Completed: 24,
    InProgress: 4,
    Pending: 2,
  },
  {
    month: 'November',
    Completed: 20,
    InProgress: 10,
    Pending: 1,
  },
  {
    month: 'December',
    Completed: 15,
    InProgress: 19,
    Pending: 2,
  },
];

const Linechart = () => {
  return (
    <div>
         <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" padding={{ left: 30, right: 30 }} />
          <YAxis type="number" domain={[0, 'dataMax']}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="InProgress" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Completed" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Pending" stroke="red" />
        </LineChart>
    </div>
  )
}

export default Linechart