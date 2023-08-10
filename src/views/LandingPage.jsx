import { useNavigate } from "react-router-dom";
// import Isa from "../assets/isabilly.pdf";
import Button from "../components/Button";

function LandingPage() {
    const navigate = useNavigate();
    let isa
    
    return (  
        <section className="landing-page">
            <h3>WELCOME TO</h3>
            <h1>Isa Makes A Pizza!</h1>

            <figure>
               <img src="/isa-makes-a-pizza/billys.svg" alt="Billys pizza." />
            </figure>            

            <p>Are you into driving different cars every week? Are those often of brands who are completely uninteresting (for example Fiat)?</p>
                <p>Are you starting 4/5 sentences with "I have no clue what that is."? </p>
                <p>Do you hate super cute video games that is impossible to hate for everyone else (like Stardew Valley)?</p>
                <p>Is Billys pizza a common lunch for you, often heated in the microwave because you lack skills of both patience and planning (not unlike a 6 year old kid)?</p>

            <p className="bold">If the answer of any of these questions is "yes" - then you are just like our friend Isa! This guide is custom made and will help you make the best Billys pizza in the world.</p>
            <Button handleClick={() => navigate('/step-one')}>Let's start!</Button>
        </section>
    );
}

export default LandingPage;