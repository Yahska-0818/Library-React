const Button = ({text,onClick,type}) => {
    if (type === "submit") {
        return (
            <button type="submit" className='text-xl p-2 rounded hover:cursor-pointer hover:-translate-y-1 transition-transform ease-linear duration-200 bg-amber-50 text-cyan-950'>Submit</button>
        )
    } else if (type === "button") {
        return (
            <button type="button" onClick={onClick} className='text-xl p-2 rounded hover:cursor-pointer hover:-translate-y-1 transition-transform ease-linear duration-200 bg-amber-50 text-cyan-950'>{text}</button>
        )
    }
}

export default Button