import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";

function StepFour() {
    const [startTimer, setStartTimer] = useState(false);
    const [minutes, setMinutes] = useState(20);
    const [seconds, setSeconds] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (startTimer) {
            console.log(startTimer)
            // ettan ska vara 20 sen
            const deadline = Date.now() + .3 * 60 * 1000;
            const timer = setInterval(() => {

                let time = deadline - Date.now();

                setMinutes(Math.floor((time / 1000 / 60) % 60));
                setSeconds(Math.floor((time / 1000) % 60));
    
                if (time < 1) {
                    setMinutes(0);
                    setSeconds(0);
                    navigate('/step-five');
                    return clearInterval(timer);
                }

            }, 1000);
        }

    }, [startTimer]);

    function toggleTimer() {
        setStartTimer(true);
    }

    return (
        <section>
            <h3>STEP 4</h3>
            <h1>The Bake</h1>
            <p>Ok, so here we go! This is where most people (Isa included) will be very confused. You are now about to PUT your Billy's in the OVEN!
                I know - crazy, right?! We are NOT using the microwave. (If you're not standing in the kitchen, now will be the time to walk over there.)</p>
            <ul>
                <li><span>- First -</span>Take your Billy's out of it's package. I understand that this is very hard to do, since it is different from your regular Billy's routine, but with practice comes skill.</li>
                <li><span>- Second -</span>Open the oven and put the Billy's inside, on the oven rack. Be carful not to burn yourself!</li>
                <li><span>- Third -</span>Close the oven and start the timer below.</li>
            </ul>
            <section className="button-container">
                {startTimer ?
                    <div className="timer">
                        <div className="minutes">{minutes}</div>:<div className="seconds">{seconds}</div>
                    </div> :
                    <Button handleClick={toggleTimer}>Start timer!</Button>
                }
            </section>
        </section>
    );
}

export default StepFour;