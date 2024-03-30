import moment from "moment"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputSearch from "../../../components/Input/InputSearch"
// import Input from "react-select/dist/declarations/src/components/Input"

const TopSideButtons = () => {

    const dispatch = useDispatch()

    const addNewTeamMember = () => {
        dispatch(showNotification({ message: "Add New Member clicked", status: 1 }))
    }

    return (
        [
            <div className="inline-block float-right">
                <button className="btn px-6 btn-sm normal-case bg-[#FFF] text-[#000] hover:text-[#FFF] h-[40px]" onClick={() => addNewTeamMember()}><img src="/images/transation-filter-icon.svg" alt="" className="mr-[5px] hover:fill-[#FFF]" /> Filter</button>
            </div>,
            <div className="inline-block float-right mr-2">
                <button className="btn px-6 btn-sm normal-case bg-[#FFF] text-[#000] hover:text-[#FFF] h-[40px]" onClick={() => addNewTeamMember()}><img src="/images/transaction-sortby-icon.svg" alt="" className="mr-[5px]" /> Sorted By</button>
            </div>,
            <div className="inline-block float-right mr-2">
                <InputSearch />
            </div>,
        ]
    )
}


const TEAM_MEMBERS = [
    { name: "Alex", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "alex@dashwind.com", role: " Owner", joinedOn: moment(new Date()).add(-5 * 1, 'days').format("DD MMM YYYY"), lastActive: "5 hr ago" },
    { name: "Ereena", avatar: "https://reqres.in/img/faces/2-image.jpg", email: "ereena@dashwind.com", role: "Admin", joinedOn: moment(new Date()).add(-5 * 2, 'days').format("DD MMM YYYY"), lastActive: "15 min ago" },
    { name: "John", avatar: "https://reqres.in/img/faces/3-image.jpg", email: "jhon@dashwind.com", role: "Admin", joinedOn: moment(new Date()).add(-5 * 3, 'days').format("DD MMM YYYY"), lastActive: "20 hr ago" },
    { name: "Matrix", avatar: "https://reqres.in/img/faces/4-image.jpg", email: "matrix@dashwind.com", role: "Manager", joinedOn: moment(new Date()).add(-5 * 4, 'days').format("DD MMM YYYY"), lastActive: "1 hr ago" },
    { name: "Virat", avatar: "https://reqres.in/img/faces/5-image.jpg", email: "virat@dashwind.com", role: "Support", joinedOn: moment(new Date()).add(-5 * 5, 'days').format("DD MMM YYYY"), lastActive: "40 min ago" },
    { name: "Miya", avatar: "https://reqres.in/img/faces/6-image.jpg", email: "miya@dashwind.com", role: "Support", joinedOn: moment(new Date()).add(-5 * 7, 'days').format("DD MMM YYYY"), lastActive: "5 hr ago" },

]

function DashboardTable() {


    const [members, setMembers] = useState(TEAM_MEMBERS)

    const getRoleComponent = (role) => {
        if (role === "Aaaadmin") return <div className="badge badge-secondary">{role}</div>
        if (role === "Manager") return <div className="badge">{role}</div>
        if (role === "Owner") return <div className="badge badge-primary">{role}</div>
        if (role === "Support") return <div className="badge badge-accent">{role}</div>
        else return <div className="badge badge-ghost">{role}</div>
    }

    return (
        <>

            <TitleCard title="Transaction Details" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Team Member list in table format loaded constant */}
                <div className="overflow-x-auto w-full mt-2">

                    <table className="w-full">
                        <thead className="">
                            <tr className="h-[55px] -border -bg-[#F9F9F9]">
                                <th> <span className="flex p-[16px] border-l border-y rounded-l-lg"><input type="checkbox" name="" id="" /><p className="text-[#727272] ml-[8px] mr-[4px]">Id</p></span></th>
                                <th><span className="flex p-[16px] border-y"><p className="text-[#727272] ml-[8px] mr-[4px]">Date</p> <img src="/images/dashboard-table-arrow.svg" alt="" /></span></th>
                                <th><span className="flex p-[16px] border-y"><p className="text-[#727272] ml-[8px] mr-[4px]">Client</p><img src="/images/dashboard-table-arrow.svg" alt="" /></span></th>
                                <th><span className="flex p-[16px] border-y"><p className="text-[#727272] ml-[8px] mr-[4px]">Company</p><img src="/images/dashboard-table-arrow.svg" alt="" /></span></th>
                                <th><span className="flex p-[16px] border-y"><p className="text-[#727272] ml-[8px] mr-[4px]">Payment</p><img src="/images/dashboard-table-arrow.svg" alt="" /></span></th>
                                <th><span className="flex p-[16px] border-y"><p className="text-[#727272] ml-[8px] mr-[4px]">Status</p><img src="/images/dashboard-table-arrow.svg" alt="" /></span></th>
                                <th><span className="flex  p-[16px] border-r border-y rounded-r-lg"><p className="text-[#727272] ml-[8px] mr-[4px]">Action</p><img src="/images/dashboard-table-arrow.svg" alt="" /></span></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                members.map((l, k) => {
                                    return (
                                        <>
                                            <tr className=""><td colSpan={7} className="bg-[#FFF] h-[12px] p-0"></td></tr>
                                            <tr className="h-[55px]" >
                                                <td className="w-[230px] p-[16px] border-l border-y rounded-l-lg"><input type="checkbox" name="" id="" /> 1528902 </td>
                                                <td className="w-[230px] border-y"><span className="flex"><img src="/images/dashboard-calender.svg" alt="" />  <p className="text-[#727272] font-medium">18/09/2016</p></span> </td>
                                                <td className="w-[230px] border-y font-medium text-[#727272]">Leslie Alexander</td>
                                                <td className="w-[230px]  border-y font-medium text-[#727272]">Abstergo Ltd.</td>
                                                <td className="w-[230px]  border-y">$2.120</td>
                                                <td className="w-[230px]  border-y"><span className=""><button className="rounded-[20px] bg-[#EEF5F0] px-[10px] text-[#589E67] flex items-center"><img src="/images/dashboard-table-button-dot.svg" alt="" className="mr-[8px]" />  COMPELETED</button></span></td>
                                                <td className="w-[230px]  border-r border-y rounded-r-lg">  <img src="/images/dashboard-table-3-dot.svg" alt="" className="cursor-pointer" /></td>
                                            </tr>
                                        </>
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