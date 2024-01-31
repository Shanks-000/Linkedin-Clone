import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./css/feed.css"
import Post from "./Post";
import { db } from './Firebase.js'
import firebase from 'firebase/compat/app';
import { cleanup } from "@testing-library/react";


function Feed() {

    const [posts, setPost] = useState([]);
    const [input, setInput] = useState();

    const submitPost =(e)=> {
        e.preventDefault();
        db.collection("posts").add({
            name : "Ananya Budhauliya",
            description : "This is a clone",
            message : input,
            photoURL : "https://e1.pxfuel.com/desktop-wallpaper/450/218/desktop-wallpaper-backgrounds-relaxing-anime-anime-relax.jpg",
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }

    useEffect(() => { 
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(Snapshot => {
           setPost(Snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
           })))
        })
     }, [])

    return(
        <div className="feed">
           <div className="feed__input">
            <div className="feed_form">
              <Avatar src="https://wallpaperset.com/w/full/3/4/a/38335.jpg"/>
             <form onSubmit={submitPost}>
                <input type="text" placeholder="Start a post" value = {input} onChange={e=>setInput(e.target.value)}/>
                <input type="Submit"/>
             </form>
            </div>
            <div className="feed__options">

                <div className="option">
                    <InsertPhotoIcon style={{color: '#70b5f9'}}/>  
                    <span>Photo</span>
                </div>
                <div className="option">
                    <YouTubeIcon style={{color: '#7fc15e'}}/>
                    <span>Video</span>
                </div>
                <div className="option">
                    <TodayIcon style={{color: '#e7a33e'}}/>
                    <span>Event</span>
                </div>
                <div className="option">
                    <AssignmentIcon style={{color: '#fc9295'}}/>
                    <span>Write Article</span>
                </div>

            </div>

           </div>
{
    posts.map(({id, data : {name, description, message, photoURL}}) => {
         return  <Post key={id} name={name} description={description} message={message} photoURL ={photoURL}/>
          
    })
}
        </div>
    )
}
export default Feed