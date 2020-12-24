import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Chart from "./components/Chart/Chart";
import DatePicker from "./components/Forms/DatePicker";
import { ChartsData, DatePickerType } from "./types/types";

const data: Array<ChartsData> = [
    // { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    // { name: "Page B", uv: 300, pv: 2400, amt: 2400 },
    // { name: "Page C", uv: 300, pv: 2400, amt: 2400 },
    // { name: "Page D", uv: 400, pv: 1400, amt: 1400 },
];

const datePicker: Array<DatePickerType> = [
    { id: 1, title: "От", alias: "startDate" },
    { id: 2, title: "До", alias: "endDate" },
];

const App: React.FC = () => {
    const [covidData, setCovidData] = useState([]);
    const [curDate, setCurDate] = useState("2020-03-10");

    useEffect(() => {
        axios
            .get(
                `https://api.covid19tracking.narrativa.com/api/country/russia?date_from=2020-03-10&date_to=2020-04-17`
            )
            .then((response) => {
                console.log("response", response);
                setCovidData(response.data);

                for (let someDates in response.data.dates) {
                    const obj = {
                        name: response.data.dates[someDates].countries.Russia.date,
                        uv: response.data.dates[someDates].countries.Russia.today_confirmed,
                        pv: 2400,
                        amt: 2400,
                    };
                    data.push(obj);
                }
            });
    }, [curDate]);

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h1>Hello</h1>
                    </div>
                    <form action="">

                        <div className="col s3" key={datePicker[0].id}>
                            <DatePicker datePicker={datePicker[0]} setCurDate={setCurDate} />
                        </div>
                        <div className="col s3" key={datePicker[1].id}>
                            <DatePicker datePicker={datePicker[1]} setCurDate={setCurDate} />
                        </div>

                    </form>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Chart chartsData={data} covidData={covidData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
