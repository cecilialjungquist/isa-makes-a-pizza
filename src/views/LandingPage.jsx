import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function LandingPage() {
    const navigate = useNavigate();
    
    return (  
        <section>
            <h1>LandingPage</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti at voluptates asperiores fuga laudantium repellat odit illo soluta necessitatibus vel velit, in esse repudiandae corporis expedita accusantium consequatur ipsum, quam amet facilis maxime quod. Esse sapiente deserunt veritatis ex dignissimos!</p>
            <Button handleClick={() => navigate('/step-one')}>Let's start!</Button>
        </section>
    );
}

export default LandingPage;