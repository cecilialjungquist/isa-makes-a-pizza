import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";

function StepTwo() {
    const [isReady, setIsReady] = useState(true);
    const navigate = useNavigate();

    return (
        <section>
            <h3>STEP 2</h3>
            <h1>The Rise Up</h1>
            {isReady ?
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, laboriosam.</p> :
                <p>Come on - You can do it! I believe in you!</p>
            }
            <section className="button-container">
                { isReady &&
                    <Button warning handleClick={() => setIsReady(false)}>No, too hard!</Button>
                }
                <Button handleClick={() => navigate('/step-three')}>Ok, I did it!</Button>
            </section>
        </section>
    );
}

export default StepTwo;