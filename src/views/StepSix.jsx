import { Link } from "react-router-dom";

function StepSix() {

    return (
        <section>
            <h3>STEP 6</h3>
            <h1>The Grand Finale</h1>
            <p className="bold">You are amazing!</p>
            <figure>
                <img src="https://media.giphy.com/media/XzXjgGZOiTjF7d0JOp/giphy.gif" alt="" />
            </figure>
            <p>You have now completed this guide for making the perfect Billys pizza - congratulations! Now is the time to relax and enjoy your hard work.</p>
            <p>If you wan't to eat your Billys like Isa does, just skip the plate and eat with your hand! And if you REALLY want to get that Isa touch, add a nasty drink to it - for example a Monster energy drink!</p>
            <p className="italic">Thank you for your participation - and a BIG thanks to Isa for being such an inspiring Billys eater!</p>
            <p className="small italic">Click <Link to='/'>here</Link> if you want to restart this guide!</p>
        </section>
    );
}

export default StepSix;