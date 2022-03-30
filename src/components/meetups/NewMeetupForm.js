import classes from "./NewMeetupForm.module.css"
import Card from "../ui/Card"

const NewMeetupForm = () => {
  return (
    <Card>
        <form action="" className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" name="title" id="title" required />
            </div>  
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" name="image" id="image" required />
            </div>   
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" required />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" required />
            </div> 
            <div className={classes.action}>
                <button>Add Meetup</button>
            </div>      
        </form>
    </Card>
  )
}

export default NewMeetupForm