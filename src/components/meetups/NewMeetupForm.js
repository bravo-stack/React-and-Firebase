import classes from "./NewMeetupForm.module.css"
import Card from "../ui/Card"
import { useRef } from "react"

const NewMeetupForm = ({addMeetup}) => {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()


    const submitHandler = (e) => {
        e.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        const newMeetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        addMeetup(newMeetupData)

        titleInputRef.current.value = ""
        imageInputRef.current.value = ""
        addressInputRef.current.value = ""
        descriptionInputRef.current.value = ""
    }


    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input ref={titleInputRef} type="text" name="title" id="title" required />
                </div>  
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input ref={imageInputRef} type="url" name="image" id="image" required />
                </div>   
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input ref={addressInputRef} type="text" name="address" id="address" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea ref={descriptionInputRef} rows={5} name="description" id="description" required />
                </div> 
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>      
            </form>
        </Card>
    )
}

export default NewMeetupForm