import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";

function StepFive() {
    const navigate = useNavigate();

    return (
        <section>
            <h3>STEP 5</h3>
            <h1>The Alert</h1>
            <h2 className="alert">!!! TIMER FINISHED !!!</h2>
            <p>Take your Billy's out of the oven right now! No time to lose!</p>
            <section className="button-container">
                <Button handleClick={() => navigate('/step-six')}>I did it!</Button>
            </section>
        </section>
    );
}

export default StepFive;