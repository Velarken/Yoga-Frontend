import { useState } from 'react';
import '../styles/PoseCard.css';

export function PoseCard({poseData}) {
    function data() {
        console.log('PoseCard Data')
        console.table(poseData)
    }
    data();
    return (
            <div className="pose-card">
                <div className="pose-head">
                    <h2>{poseData.pose_name}</h2>
                    <div className="pose-subhead">
                        <p>{poseData.pose_type}</p>
                        <p>{poseData.pose_level}</p>
                    </div>
                </div>
                <div className="pose-example">

                </div>
                <div className="pose-description">
                    <p>{poseData.pose_description}</p>
                </div>
            </div>
        )
};
export default PoseCard;