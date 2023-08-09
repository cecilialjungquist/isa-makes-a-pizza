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
                <>
                    <p>For Isa, who is a man without any planning skills, this step is a tricky one - so it might be tough for you as well!
                        You'll need to do some thinking and really focus... You'll need to answer the big question:</p>
                    <p>Are you starting to feel hungry yet?</p>
                </> :
                <p>Ok, just click "Yes!" whenever you're ready!</p>
            }
            <section className="button-container">
                {isReady &&
                    <Button warning handleClick={() => setIsReady(false)}>Nah, not yet!</Button>
                }
                <Button handleClick={() => navigate('/step-two')}>Yes!</Button>
            </section>
        </section>
    );
}

export default StepOne;