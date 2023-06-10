
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "One",
    marks: 6000,
    quiz: 2400,
    amt: 2400
  },
  {
    name: "Two",
    marks: 3000,
    quiz: 1398,
    amt: 2210
  },
  {
    name: "Three",
    marks: 2000,
    quiz: 9800,
    amt: 2290
  },
  {
    name: "Four",
    marks: 2780,
    quiz: 3908,
    amt: 2000
  },
  {
    name: "Five",
    marks: 1890,
    quiz: 4800,
    amt: 2181
  },
  {
    name: "Six",
    marks: 2390,
    quiz: 3800,
    amt: 2500
  },
  {
    name: "Seven",
    marks: 3490,
    quiz: 4300,
    amt: 2100
  }
];
const Chart = () => {
  return (
    <div>
        <LineChart
      width={1300}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="quiz"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
    </LineChart>
    </div>
  );
};

export default Chart;
