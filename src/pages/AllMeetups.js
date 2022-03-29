import MeetupList from "../components/meetups/MeetupList"

const AllMeetups = () => {

    const DUMMY_DATA = [
        {
            id: "m1",
            title: "This is a first meetup",
            image: "./../../public/desk.png",
            description: "This is a first, amazing meetup which you definitely should not miss. It will be fire",
            address: "Meetupstreet 5, 12345 Meetup City"
        }, 
        {
            id: "m2",
            title: "This is a second meetup",
            image: "./../../public/desk.png",
            description: "This is a first, amazing meetup which you definitely should not miss. It will be fire",
            address: "Meetupstreet 5, 12345 Meetup City"
        }
    ]




  return (
    <div className='layout'>
        <h1>All Meetups</h1>
        <MeetupList meetups={DUMMY_DATA} />
        {/* <ul>
            {DUMMY_DATA.map((meetup)=><li key={meetup.id}>{meetup.title}</li>)}
        </ul>    */}
    </div>
  )
}

export default AllMeetups