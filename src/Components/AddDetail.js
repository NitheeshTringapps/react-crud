import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser, changeIndexTo, updateUser } from "../app/AllDetailsSlice";

let temp = -1;

export default function AddDetail(){
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [about, setAbout] = useState("");
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const index = useSelector(state => state.allDetail.index);
    const storedValue = useSelector(state => state.allDetail.value);

    
    useEffect(() => {
        if(index !== -1){
            setName(storedValue[index].name.name);
            setDob(storedValue[index].dob.dob);
            setAbout(storedValue[index].about.about);
            document.getElementById("submit").innerText="Update";
            temp = index;
            dispatch(changeIndexTo(-1));
            
        }
      }, [index, storedValue, dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const userDetails = {
            name: {name},
            dob: {dob},
            about: {about}
        }
        if(temp === -1){
            dispatch(addUser(userDetails));
            alert("Submitted Successfully!")
        }
        else{
            userDetails.index = temp;
            dispatch(updateUser(userDetails));
            alert("Updated Successfully!")
            temp = -1;
        }
        navigate('showdetails');
    }

    return(
        <div className="addDetail">
            <h1>Add Detail</h1>
            <div>
                <form action={'showdetails'} onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" id='name' name='name' onChange={(e) => setName(e.target.value)} value={name} required></input><br/><br/>
                    <label>Date of Birth:</label>
                    <input type="date" id='dob' name='dob' onChange={(e) => setDob(e.target.value)} value={dob} required></input><br/><br/>
                    <label>About:</label>
                    <textarea rows="4" cols="50" id="about" name='about' onChange={(e) => setAbout(e.target.value)} value={about} required></textarea><br/><br/>
                    <button id="submit">Submit</button>
                    </form>
            </div>
            <Link to ='showdetails'>Go to View All Details</Link>
        </div>
    )
}