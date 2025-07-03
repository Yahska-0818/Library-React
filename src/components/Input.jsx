const Input = ({value,onChange}) => {
    return (
        <input type="text" value={value} onChange={onChange} className="border-2 border-black border-solid text-xl p-1"/>
    )
}

export default Input