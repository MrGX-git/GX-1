
export const Button =({className, text, onClick, type = 'Button', disabled, children })=> {
    const buttonContent = children ? children : text

    return (
    <button 
        className={className} 
        onClick={onClick} 
        type={type}
        disabled = {disabled}
        data-testid = 'buttonElement'
    >
            {buttonContent}
    </button>)
}