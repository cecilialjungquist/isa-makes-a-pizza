function Button({ children, warning, confirm, handleClick }) {
    let className = 'default';

    if (warning && confirm) {
        throw new Error('Button can only be of type "warning" OR "confirm".');
    }

    if (warning) {
        className = 'warning';
    } else if (confirm) {
        className = 'confirm';
    }

    return (  
        <button className={className} onClick={handleClick}>{ children }</button>
    );
}

export default Button;