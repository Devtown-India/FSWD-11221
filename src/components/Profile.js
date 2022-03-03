import { useEffect } from "react";

const Profile = () => {

    useEffect(() => {
        if (!localStorage.getItem('token')) {

        }
    }, [])


    return (
        <div>
            <img width={"200px"} src="https://images.unsplash.com/photo-1646295204041-4faac1c2adc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
            <h2>Name</h2>
            <h2>email</h2>
        </div>
    );
}

export default Profile;