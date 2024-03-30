import moment from "moment"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'

const TopSideButtons = () => {

    const dispatch = useDispatch()

    const addNewTeamMember = () => {
        dispatch(showNotification({message : "Add New Member clicked", status : 1}))
    }

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => addNewTeamMember()}>Invite New</button>
        </div>
    )
}


const TEAM_MEMBERS = [
    {name : "Alex", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "alex@dashwind.com", role : "Owner", joinedOn : moment(new Date()).add(-5*1, 'days').format("DD MMM YYYY"), lastActive : "5 hr ago"},
    {name : "Ereena", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", role : "Admin", joinedOn : moment(new Date()).add(-5*2, 'days').format("DD MMM YYYY"), lastActive : "15 min ago"},
    {name : "John", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "jhon@dashwind.com", role : "Admin", joinedOn : moment(new Date()).add(-5*3, 'days').format("DD MMM YYYY"), lastActive : "20 hr ago"},
    {name : "Matrix", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "matrix@dashwind.com", role : "Manager", joinedOn : moment(new Date()).add(-5*4, 'days').format("DD MMM YYYY"), lastActive : "1 hr ago"},
    {name : "Virat", avatar : "https://reqres.in/img/faces/5-image.jpg", email : "virat@dashwind.com", role : "Support", joinedOn : moment(new Date()).add(-5*5, 'days').format("DD MMM YYYY"), lastActive : "40 min ago"},
    {name : "Miya", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "miya@dashwind.com", role : "Support", joinedOn : moment(new Date()).add(-5*7, 'days').format("DD MMM YYYY"), lastActive : "5 hr ago"},

]

function DashboardTable(){


    const [members, setMembers] = useState(TEAM_MEMBERS)

    const getRoleComponent = (role) => {
        if(role  === "Admin")return <div className="badge badge-secondary">{role}</div>
        if(role  === "Manager")return <div className="badge">{role}</div>
        if(role  === "Owner")return <div className="badge badge-primary">{role}</div>
        if(role  === "Support")return <div className="badge badge-accent">{role}</div>
        else return <div className="badge badge-ghost">{role}</div>
    }

    return(
        <>
            
            <TitleCard title="Transaction Details" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Team Member list in table format loaded constant */}
            <div className="overflow-x-auto w-full">
            
                <table className="table w-full rounded-xl">
                    <thead >
                    <tr className="">
                        <th className=" "> <input type="checkbox" name="" id="" /> Id</th>
                        <th><span className="flex"><p className="text-[#727272]">Date</p> <img src="/images/dashboard-table-arrow.svg" alt="" /></span></th>
                        <th><span className="flex"><p className="text-[#727272]">Client</p><img src="/images/dashboard-table-arrow.svg" alt="" /></span></th>
                        <th><span className="flex"><p className="text-[#727272]">Company</p><img src="/images/dashboard-table-arrow.svg" alt="" /></span></th>
                        <th><span className="flex"><p className="text-[#727272]">Payment</p><img src="/images/dashboard-table-arrow.svg" alt="" /></span></th>
                        <th><span className="flex"><p className="text-[#727272]">Status</p><img src="/images/dashboard-table-arrow.svg" alt="" /></span></th>
                        <th><span className="flex"><p className="text-[#727272]">Action</p><img src="/images/dashboard-table-arrow.svg" alt="" /></span></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            members.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td><input type="checkbox" name="" id="" /> 1528902 </td>
                                    <td className="flex"><img src="/images/dashboard-calender.svg" alt="" /> <p className="text-[#727272] font-medium">18/09/2016</p> </td>
                                    <td className="font-medium text-[#727272]">Leslie Alexander</td>
                                    <td className="font-medium text-[#727272]">Abstergo Ltd.</td>
                                    <td>$2.120</td>
                                    <td>{getRoleComponent(l.role)}</td>
                                    <td> <img src="/images/dashboard-table-3-dot.svg" alt="" /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}


export default DashboardTable