import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useHistory } from 'react-router-dom'

const NewMeetups = () => {

  const history = useHistory()

  const addMeetupHandler = (meetupData) => {
    fetch("https://react-router-project-56f43-default-rtdb.firebaseio.com/meetups.json", {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-type': 'application/json'
      }
    }).then((response) => {
      if(response.status>=200 && response.status<300){
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }).then(() => {
      history.replace("/")
    }).catch((error) => {
      console.log(error)
    })
  }


  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetups