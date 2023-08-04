import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";

function StepOne() {
    const [isReady, setIsReady] = useState(true);
    const navigate = useNavigate();

    return (
        <section>
            <h3>STEP 1</h3>
            <h1>The Big Question</h1>
            {isReady ?
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, laboriosam.</p> :
                <p>Ok, just click "Yes!" whenever you're ready!</p>
            }
            <section className="button-container">
                { isReady &&    
                    <Button warning handleClick={() => setIsReady(false)}>Nah, not yet!</Button>
                }
                <Button handleClick={() => navigate('/step-two')}>Yes!</Button>
            </section>
        </section>
    );
}

export default StepOne;