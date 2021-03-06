import { useEffect, useState } from "react"

const useAdmin= user =>{
    const [admin,setAdmin]= useState(false)
    const [adminLoading,setAdminLoading]=useState(true)

    useEffect(()=>{
        const email = user?.email;
        console.log(email);
        if(email){
            fetch(`https://boiling-island-20591.herokuapp.com/admin/${email}`,{
                method:'GET',
                headers:{
                    'content-type':'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
            .then(res=>res.json())
            .then(data=>{
                console.log("data inside useToken",data);
                
                setAdmin(data.admin);
                setAdminLoading(false)
            })
        }
    },[user])
    return [admin,adminLoading ]
} 

export default useAdmin;