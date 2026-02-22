import { useState } from 'react';
import '../styles/RoutineDisplay.css';
import PoseCard from './PoseCard';

export function RoutineDisplay() {
    const [currentRoutine, setCurrentRoutine] = useState([])
    function handleRoutineChoice(chosenRoutine) {
        setCurrentRoutine(chosenRoutine)
    }
    return (
        <div className="routine-display">
            <button className="button">
                <p> &#8656; </p>
            </button>
            <PoseCard />
            <button className="button">
                <p> &#8658; </p>
            </button>
        </div>
    )
};

export default RoutineDisplay;