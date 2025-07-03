const RadioButtons = ({option1,option2,onRadioChange,read}) => {
    return (
        <div className='flex gap-7 text-2xl items-center'>
            <label htmlFor={option1.toLowerCase()}>{option1}</label>
            <input type="radio" id={option1.toLowerCase()} name="readStatus" value={option1.toLowerCase()} checked={read === option1.toLowerCase()} onChange={onRadioChange} required className='w-5 h-5'/>
            <label htmlFor={option2.toLowerCase()}>{option2}</label>
            <input type="radio" id={option2.toLowerCase()} name="readStatus" value={option2.toLowerCase()} checked={read === option2.toLowerCase()} onChange={onRadioChange} required className='w-5 h-5'/>
        </div>
    )
}

export default RadioButtons