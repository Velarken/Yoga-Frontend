import '../styles/PoseCard.css';

export function PoseCard() {

    return (
        <div className="pose-card">
            <div className="pose-head">
                <h2>Pose Name</h2>
                <div className="pose-subhead">
                    <p>Pose Type</p>
                    <p>Pose Difficulty</p>
                </div>
            </div>
            <div className="pose-example">

            </div>
            <div className="pose-description">
                <p>This is where the description of how to get into each pose will be placed.</p>
            </div>
        </div>
    )
};
export default PoseCard;