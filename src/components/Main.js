import React from "react";
import { useReducer} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import Header from "./Header";
import ConfirmedBooking from "./ConfirmedBooking";

const Main = () => {
    
    const randomSeed = (seed) => {
        let m = 2**35 - 31;
        let a = 185852;
        let s = seed % m;
        
        return (() => {
            return (s = s * a % m ) / m;
        })
    }
    
    const fetchAPI = (date) => {
        let times = [];
        let randomNum = randomSeed(date.getDate());
        
        for (let i = 1; i < 9; i++) {
            if (randomNum() < 0.5) {
                times.push(i + ":00");
            }
            if (randomNum() > 0.5) {
                times.push(i + ":30");
            }
        }

        return times;
    };

    const submitAPI = (formData) => {
        return true;
    };

    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);
    
    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date())}
    }
    
    const navigate = useNavigate();
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Header/>} />
                <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ConfirmedBooking/>} />
            </Routes>
        </main>
    )
}

export default Main;