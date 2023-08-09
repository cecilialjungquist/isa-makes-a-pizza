import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";

function StepTwo() {
    const [isReady, setIsReady] = useState(true);
    const navigate = useNavigate();

    return (
        <section>
            <h3>STEP 2</h3>
            <h1>The Getting Up</h1>
            {isReady ?
                <>
                    <p>If you are a little lazy, just as Isa, you might be a bit intimidated by this step.
                        To get up from a sitting or laying down position can be hard - but I know you can do it!
                        Once you're standing up, walk over to the kitchen and set the oven to 150°C.</p>
                    <p>Did you do it?</p>
                </> :
                <p>Come on - You can do it! I believe in you!</p>
            }
            <section className="button-container">
                {isReady &&
                    <Button warning handleClick={() => setIsReady(false)}>No, too hard!</Button>
                }
                <Button handleClick={() => navigate('/step-three')}>Ok, I did it!</Button>
            </section>
        </section>
    );
}

export default StepTwo;