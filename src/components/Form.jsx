import Para from "./Para"
import RadioButtons from "./RadioButtons"
import Input from "./Input"
import Button from "./Button"

const Form = ({formOnSubmit,bookRef,value1,onChange1,value2,onChange2,value3,onChange3,value4,onChange4}) => {
    return (
        <div className='z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <form onSubmit={formOnSubmit} className='flex-col gap-8 hidden bg-cyan-950 text-amber-50 p-15 rounded-xl' ref={bookRef}>
            <div className='flex gap-10 text-2xl items-center'>
                <Para text={"Title:"} /> <Input value={value1} onChange={onChange1}/>
            </div>
            <div className='flex gap-3 text-2xl items-center'>
                <Para text={"Author:"} /> <Input value={value2} onChange={onChange2}/>
            </div>
            <div className='flex gap-6 text-2xl items-center'>
                <Para text={"Pages:"} /> <Input value={value3} onChange={onChange3}/>
            </div>
            <RadioButtons option1={"Read"} option2={"Unread"} onRadioChange={onChange4} read={value4}/>
            <Button type={"submit"} />
            </form>
        </div>
    )
}

export default Form