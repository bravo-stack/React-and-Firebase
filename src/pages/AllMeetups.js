import React from 'react'

const AllMeetups = () => {

    const DUMMY_DATA = [
        {
            id: "m1",
            title: "This is a first meetup",
            image: "./../../public/desk.png",
            description: "This is a first, amazing meetup which you definitely should not miss. It will be fire"
        }, {
            id: "m2",
            title: "This is a second meetup",
            image: "./../../public/desk.png",
            description: "This is a first, amazing meetup which you definitely should not miss. It will be fire"
        }
    ]




  return (
    <div className='layout'>
        <h1>All Meetups</h1>
        <ul>
            {DUMMY_DATA.map((meetup)=><li key={meetup.id}>{meetup.title}</li>)}
        </ul>   
    </div>
  )
}

export default AllMeetups