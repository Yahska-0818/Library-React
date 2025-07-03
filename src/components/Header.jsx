import Para from "./Para"
import Button from "./Button"

const Header = ({addBookButton}) => {
    return(
        <div className='flex justify-between bg-cyan-950 py-5 px-50 text-amber-50 items-center'>
            <Para text={"Your Library"} />
            <Button type={"button"} text={"Add book"} onClick={addBookButton} />
        </div>
    )
}

export default Header