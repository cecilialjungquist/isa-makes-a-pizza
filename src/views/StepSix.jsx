import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";

function StepSix() {
    const [isReady, setIsReady] = useState(true);
    const navigate = useNavigate();

    return (
        <section>
            <h3>STEP 6</h3>
            <h1>The Grand Finale</h1>
            <p className="bold">You are amazing!</p>
            <p>You have now completed this guide for making the perfect Billy's pizza - congratulations! Now is the time to relax and enjoy your hard work.</p>
            <p>If you wan't to eat your Billy's like Isa does, just skip the plate and eat with your hand! And if you REALLY want to get that Isa touch, add a nasty drink to it - for example a Monster energy drink!</p>
            <p className="italic">Thank you for your participation - and a BIG thanks to Isa for being such an inspiring Billy's eater!</p>
        </section>
    );
}

export default StepSix;