import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";

function StepThree() {
    const [isReady, setIsReady] = useState(true);
    const navigate = useNavigate();

    return (
        <section>
            <h3>STEP 3</h3>
            <h1>The Rest</h1>
            {isReady ?
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, laboriosam.</p> :
                <p>Patience, young padawan! Soon, ready, the oven will be.</p>
            }
            <section className="button-container">
                { isReady &&
                    <Button warning handleClick={() => setIsReady(false)}>The oven takes forever...</Button>
                }
                <Button handleClick={() => navigate('/step-four')}>The oven is ready!</Button>
            </section>
        </section>
    );
}

export default StepThree;