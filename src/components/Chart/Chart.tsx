import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartsData } from "../../types/types";

const Chart = (props: Array<ChartsData> | any) => {
    console.log("props.chartsData", props.chartsData)
    return (
        <LineChart width={1000} height={400} data={props.chartsData}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#cccccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    );
};

export default Chart;
