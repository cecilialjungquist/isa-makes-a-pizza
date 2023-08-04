import Button from "../components/Button";

function StepOne() {
    return ( 
        <section>
            <h1>Step One</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, laboriosam.</p>
            <Button navigation navigateTo={'step-two'}>Next</Button>
        </section>
    );
}

export default StepOne;