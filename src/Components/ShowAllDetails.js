import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EachPersonDetailCard from './EachPersonDetailCard'

export default function ShowAllDetails(){
    const storedValue = useSelector(state => state.allDetail.value);
    return(
        <div className="showAllDetails">
            <h1>All Details</h1>
            <div className="allUserContainer">
                {storedValue.map((user, index = 0) => {
                    console.log(user)
                    return <EachPersonDetailCard key={index} user={user}/>
                })}
            </div>
            <Link to ='/'>Go to Add Details</Link>
        </div>
    )
}