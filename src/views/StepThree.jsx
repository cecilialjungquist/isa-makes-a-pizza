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
                <>
                    <p>Hey, nicely done! You now have some well deserved rest ahead of you.
                        This step may vary in time depending on your oven (around 15-20 min), but just relax and enjoy the time off.
                        To make the perfect Billys pizza is a form of art, and good art takes time to accomplish!</p>
                        <p>As soon as your oven has reached 150°C and you're well rested - are you ready to keep going?</p>
                </> :
                <p>Patience, young padawan! Soon, ready, the oven will be.</p>
            }
            <section className="button-container">
                {isReady &&
                    <Button warning handleClick={() => setIsReady(false)}>The oven takes forever...</Button>
                }
                <Button handleClick={() => navigate('/step-four')}>The oven is ready!</Button>
            </section>
        </section>
    );
}

export default StepThree;