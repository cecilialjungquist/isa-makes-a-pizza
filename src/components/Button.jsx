import { useNavigate } from "react-router";

function Button({ children, warning, confirm, navigateTo }) {
    const navigate = useNavigate();

    if (warning && confirm) {
        throw new Error('Button can only be of type "warning" OR "confirm".');
    }

    if (typeof navigateTo !== 'string') {
        console.log('must be a string!')
    }

    return (  
        <button className='confirm' onClick={() => navigate(`/${navigateTo}`)}>{ children }</button>
    );
}

export default Button;