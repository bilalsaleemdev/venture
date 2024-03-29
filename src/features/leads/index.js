import moment from "moment"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { deleteLead, getLeadsContent } from "./leadSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { showNotification } from '../common/headerSlice'
import Step1 from "../../components/Steper/Step1"
import Steps from "../../components/Steper/Steps"
import Step2 from "../../components/Steper/Step2"
import Step3 from "../../components/Steper/Step3"

const TopSideButtons = () => {

    const dispatch = useDispatch()

    const openAddNewLeadModal = () => {
        dispatch(openModal({ title: "Add New Lead", bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW }))
    }

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewLeadModal()}>Add New</button>
        </div>
    )
}

function Leads() {

    const { leads } = useSelector(state => state.lead)
    const dispatch = useDispatch()

    const getDummyStatus = (index) => {
        if (index % 5 === 0) return <div className="badge">Not Interested</div>
        else if (index % 5 === 1) return <div className="badge badge-primary">In Progress</div>
        else if (index % 5 === 2) return <div className="badge badge-secondary">Sold</div>
        else if (index % 5 === 3) return <div className="badge badge-accent">Need Followup</div>
        else return <div className="badge badge-ghost">Open</div>
    }

    const deleteCurrentLead = (index) => {
        dispatch(openModal({
            title: "Confirmation", bodyType: MODAL_BODY_TYPES.CONFIRMATION,
            extraObject: { message: `Are you sure you want to delete this lead?`, type: CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE, index }
        }))
    }

    return (
        <>
            <div className="card w-full  bg-base-100 shadow-xl  " >
                <div class="grid grid-cols-12 ">
                    <div class="col-span-2 p-5 bg-slate-50 rounded-xl ">
                        <Steps />
                    </div>
                    <div class="col-span-10 p-5">
                        <Step1 />
                        <Step2 />
                        <Step3 />
                    </div>

                </div>

            </div>
        </>
    )
}


export default Leads