import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {

    const initialNotes =[
        {
          "_id": "6356165ebc3a017c19d53f04",
          "user": "63560237f93117006163a93a",
          "title": "my Note",
          "description": "Wake Up early in the morning",
          "tag": "personal",
          "date": "2022-10-24T04:36:46.170Z",
          "__v": 0
        },
        {
          "_id": "6356165ebc3a017c19d53f06",
          "user": "63560237f93117006163a93a",
          "title": "my Note",
          "description": "Wake Up early in the morning",
          "tag": "personal",
          "date": "2022-10-24T04:36:46.268Z",
          "__v": 0
        },
        {
          "_id": "6356165ebc3a017c19d53f06",
          "user": "63560237f93117006163a93a",
          "title": "my Note",
          "description": "Wake Up early in the morning",
          "tag": "personal",
          "date": "2022-10-24T04:36:46.268Z",
          "__v": 0
        },
        {
          "_id": "6356165ebc3a017c19d53f06",
          "user": "63560237f93117006163a93a",
          "title": "my Note",
          "description": "Wake Up early in the morning",
          "tag": "personal",
          "date": "2022-10-24T04:36:46.268Z",
          "__v": 0
        },
        {
          "_id": "6356165ebc3a017c19d53f06",
          "user": "63560237f93117006163a93a",
          "title": "my Note",
          "description": "Wake Up early in the morning",
          "tag": "personal",
          "date": "2022-10-24T04:36:46.268Z",
          "__v": 0
        },
        {
          "_id": "6356165ebc3a017c19d53f06",
          "user": "63560237f93117006163a93a",
          "title": "my Note",
          "description": "Wake Up early in the morning",
          "tag": "personal",
          "date": "2022-10-24T04:36:46.268Z",
          "__v": 0
        },
        {
          "_id": "6356165ebc3a017c19d53f06",
          "user": "63560237f93117006163a93a",
          "title": "my Note",
          "description": "Wake Up early in the morning",
          "tag": "personal",
          "date": "2022-10-24T04:36:46.268Z",
          "__v": 0
        },
        {
          "_id": "6356165ebc3a017c19d53f06",
          "user": "63560237f93117006163a93a",
          "title": "my Note",
          "description": "Wake Up early in the morning",
          "tag": "personal",
          "date": "2022-10-24T04:36:46.268Z",
          "__v": 0
        },
        {
          "_id": "6356165ebc3a017c19d53f06",
          "user": "63560237f93117006163a93a",
          "title": "my Note",
          "description": "Wake Up early in the morning",
          "tag": "personal",
          "date": "2022-10-24T04:36:46.268Z",
          "__v": 0
        },
        {
          "_id": "6356165ebc3a017c19d53f06",
          "user": "63560237f93117006163a93a",
          "title": "my Note",
          "description": "Wake Up early in the morning",
          "tag": "personal",
          "date": "2022-10-24T04:36:46.268Z",
          "__v": 0
        },
        {
          "_id": "6356165ebc3a017c19d53f06",
          "user": "63560237f93117006163a93a",
          "title": "my Note",
          "description": "Wake Up early in the morning",
          "tag": "personal",
          "date": "2022-10-24T04:36:46.268Z",
          "__v": 0
        },
        {
          "_id": "6356165ebc3a017c19d53f06",
          "user": "63560237f93117006163a93a",
          "title": "my Note",
          "description": "Wake Up early in the morning",
          "tag": "personal",
          "date": "2022-10-24T04:36:46.268Z",
          "__v": 0
        },
        {
          "_id": "6356165ebc3a017c19d53f06",
          "user": "63560237f93117006163a93a",
          "title": "my Note",
          "description": "Wake Up early in the morning",
          "tag": "personal",
          "date": "2022-10-24T04:36:46.268Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(initialNotes);

    return(
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;