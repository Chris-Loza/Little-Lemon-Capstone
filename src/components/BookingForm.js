import React from "react";
import { useState } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [event, setEvent] = useState("");
    
    const submissionHandler = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const inputChange = (e) => {
        setDate(e)
        props.dispatch(e);
    };

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guest: 1,
            occasion: ""
        },
        onSubmit: (values) => {
            submitForm(values);
        },
        validationSchema: Yup.object({
            date: Yup.string().required("Date is required"),
            time: Yup.string().required("Time is required"),
            occasion: Yup.string().required("Occasion is required")
        }),
    });
    
    return (
        <header>
            <section>
                <form onSubmit={submissionHandler}>
                    <fieldset className="formField">
                        <div>
                            <label htmlFor="dateBooking">Date:</label>
                            <input id="dateBooking" value={date} type="date" onChange={(e) => inputChange(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="timeBooking">Time:</label>
                            <select id="timeBooking" value={time} onChange={(e) => setTime(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {props.availableTimes.availableTimes.map(availableTimes => {
                                        return <option key={availableTimes}>{availableTimes}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="guestsBooking">Guests:</label>
                            <input id="guestsBooking" type="number" placeholder="0" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} required />
                        </div>
                        <div>
                            <label htmlFor="eventBooking">Event:</label>
                            <select id="eventBooking" key={event} value={event} onChange={(e) => setEvent(e.target.value)} required>
                                <option value="">Select an option</option>
                                <option>Birthday</option>
                                <option>Wedding</option>
                                <option>Gathering</option>
                            </select>
                        </div>
                        <div className="btnReceive">
                            <input type="submit" aria-label="Click" value={"Create Reservation"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
