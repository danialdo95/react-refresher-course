import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetups() {

  const history = useHistory();

  function addMeetupHandler(meetupData) {
    console.log(meetupData);
    fetch(
      "https://react-getting-started-6080c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: { 
          'Content-Type' : 'application/json'
        }
      }
    ).then(() => {
        history.replace('/')
    });

  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetups;
