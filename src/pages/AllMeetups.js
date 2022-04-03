import MeetupList from "../components/meetups/MeetupList"
import { useState, useEffect  } from "react"

const AllMeetups = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(() => {
        fetch("https://react-router-project-56f43-default-rtdb.firebaseio.com/meetups.json").then((response)=> {
            if(response.status>=200 && response.status<300) {
                return Promise.resolve(response)
            } else {
                return Promise.reject(new Error(response.statusText))
            }
        }).then(response => {
            return response.json()
        }).then((data) => {

            const meetups = []

            for(const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }

                meetups.push(meetup)
            }



            setIsLoading(false)
            setLoadedMeetups(meetups)
        })
    }, [])

    const loading = {
        backgroundColor: '#eee',
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        margin: "auto ",
        padding: "1rem",
        fontSize: "2rem",
        borderRadius: ".5rem"
    }

    if(isLoading===true) {
        return(
            <div style={loading}>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className='layout'>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </div>
    )
}

export default AllMeetups