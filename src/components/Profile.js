import { useEffect, useState } from "react"
import { useParams } from "react-router"


const getDatafromDB = (name) => new Promise(resolve=>{
    setTimeout(()=>{
        resolve({
            name,
            email:"kartikdps.kg@gmail.com",
            address:"227, Delhi 33",
            phone:8813936278
        })
    },2000)
})

const Profile = () => {

    const {username} = useParams()

    const [data,setData]= useState({})

    const fetchData = async (username)=>{
        const data = await getDatafromDB(username)
        console.log(data)
        setData(data)
    }



    return ( 
        <div>
            <h3>{data.username} Profile</h3>
        </div>
     );
}
 
export default Profile;