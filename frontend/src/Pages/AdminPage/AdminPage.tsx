import Header from "../../Widgets/Header/Header.tsx";
import SignOutButton from "../../Components/SignOutButton/SignOutButton.tsx";
import {useEffect, useState} from "react";
import {getAdminById} from "../../api/requests.ts";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


function AdminPage(){
    let tmp: any = {}
    const [info, setInfo] = useState(tmp)
    const navigate = useNavigate()
    const id = useSelector((state: any) => state.id)

    useEffect(() => {
        getAdminById(id)
            .then(res => {
                setInfo(res.data)

            })
            .catch(err => {
                console.log(err)
                navigate("/welcome")
            })
    }, []);
   return <>
        <Header signOutButton={<SignOutButton />} />
        <div className="px-14 font-bold min-w-fit">
                <h3 className="text-2xl my-7">Hello!</h3>
        </div>
    </>
}

export default AdminPage