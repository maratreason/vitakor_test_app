import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css";
import { ChartsData } from "../../types/types";

const DatePicker = (props: ChartsData | any) => {
    const fromRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const [date, setDate] = useState(
        M.Datepicker.init(fromRef.current, {
            format: "dd.mm.yyyy",
            defaultDate: new Date(),
            setDefaultDate: true,
        })
    );

    useEffect(() => {
        const defaultDate = M.Datepicker.init(fromRef.current, {});
        setDate(defaultDate);
        // return () => M.Datepicker.destroy();
    }, []);

    // console.log("fromRef.current", fromRef.current.value);

    const changeValue = (e: any) => {
        console.log("changeValue", e.target.value)
        props.setCurDate(e.target.value);
    }

    return <div className="input-field">
        <input type="text" ref={fromRef} id={props.alias} className="datepicker" onClick={changeValue} />
        <label htmlFor={props.alias} className="active">{props.title}</label>
    </div>;
};

export default DatePicker;
