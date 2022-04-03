import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetups = () => {

  const addMeetupHandler = (meetupData) => {
    fetch("https://react-router-project-56f43-default-rtdb.firebaseio.com/meetups.json", {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-type': 'application/json'
      }
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