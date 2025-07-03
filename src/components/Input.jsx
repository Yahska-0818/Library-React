const Input = ({value,onChange}) => {
    return (
        <input type="text" value={value} onChange={onChange} className="border-2 border-amber-50 border-solid text-2xl p-1"/>
    )
}

export default Input