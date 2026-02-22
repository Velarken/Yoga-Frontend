import { useState } from 'react';
import '../styles/RoutineDisplay.css';
import PoseCard from './PoseCard';

export function RoutineDisplay({poseData}) {
    const [ routineIndex, setRoutineIndex ] = useState(0);
    const [ currentRoutine, setCurrentRoutine ] = useState([]);
    const [ currentPose, setCurrentPose ] = useState(poseData[routineIndex])
    
    function incrementRoutine() {
        // poseData[i++]
        setRoutineIndex(previousIndex => previousIndex + 1)
        setCurrentPose(poseData[routineIndex])
        return (
            <>
                <PoseCard poseData={currentPose} />
            </>
        )
        // return <PoseCard pose={currentPose} />
    }
    function decrementRoutine() {
        // poseData[i--]
        setRoutineIndex(previousIndex => previousIndex - 1)
        setCurrentPose(poseData[routineIndex])
        return (
            <>
                <PoseCard poseData={currentPose} />
            </>
        )
        // return <PoseCard pose={currentPose} />
    }
    function logData() {
        console.log('Current Pose Data')
        console.table(currentPose)
    }
    logData()
    return (
        <div className="routine-display">
            <button onClick={decrementRoutine} className="button">
                <p> &#8656; </p>
            </button>
            <PoseCard poseData={currentPose}/>
            <button onClick={incrementRoutine} className="button">
                <p> &#8658; </p>
            </button>
        </div>
    )
};

export default RoutineDisplay;