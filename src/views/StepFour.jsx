import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";

function StepFour() {
    const [startTimer, setStartTimer] = useState(false);
    const [minutes, setMinutes] = useState(20)
    const [seconds, setSeconds] = useState(0)
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //        setMinutes(minutes - 1)
    //         console.log(minutes);

    //         if (minutes < 1 && seconds < 1) {
    //             return clearInterval(timer);
    //         }

    //     }, 1000);
    // })

    return (
        <section>
            <h3>STEP 4</h3>
            <h1>The Bake</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, nemo tempora. Eum quis animi odio id modi voluptatem et necessitatibus porro fugiat numquam pariatur nulla, rerum maxime quam. Harum, praesentium!</p>
            <section className="button-container">
                { startTimer ?
                    <div className="timer">
                        <div className="minutes">{minutes}</div>:<div className="seconds">{seconds}</div>
                    </div> :
                    <Button handleClick={() => setStartTimer(true)}>Start timer!</Button>
                }
                {/* <Button warning handleClick={() => setIsReady(false)}>No, too hard!</Button>
                <Button handleClick={() => navigate('/step-three')}>Ok, I did it!</Button> */}
            </section>
        </section>
    );
}

export default StepFour;