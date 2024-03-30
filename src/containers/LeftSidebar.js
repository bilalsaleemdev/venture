import routes from '../routes/sidebar'
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import { NavLink, Routes, Link, useLocation } from 'react-router-dom'
import SidebarSubmenu from './SidebarSubmenu';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import { useSelector, useDispatch } from 'react-redux'
import { openRightDrawer } from '../features/common/rightDrawerSlice';
import { RIGHT_DRAWER_TYPES } from '../utils/globalConstantUtil'
import React from 'react';

function LeftSidebar() {
    const location = useLocation();
    const dispatch = useDispatch()
    const { noOfNotifications, pageTitle } = useSelector(state => state.header)

    const openNotification = () => {
        dispatch(openRightDrawer({ header: "Notifications", bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION }))
    }


    function logoutUser() {
        localStorage.clear();
        window.location.href = '/'
    }

    const close = (e) => {
        document.getElementById('left-sidebar-drawer').click()
    }

    return (
        <div className="drawer-side ">
            <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
            <ul className="menu  -p/t-2 w-80 bg-[#F9F9F9] text-base-content  border-r">
                {/* <button className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden" onClick={() => close()}>
                    <XMarkIcon className="h-5 inline-block w-5" />
                </button> */}

                <li className="pl-5 mb-10 font-semibold text-xl border-b h-[78px] flex justify-center content-start">
                    <Link to={'#'}>
                        <img className="w-40" src="/Logo.png" alt="DashWind Logo" />
                    </Link>
                </li>

                <div className=" overflow-aut ">
                    {
                        routes.map((route, k) => {
                            return (
                                <li className="pl-5" key={k}>
                                    {
                                        route.submenu ?
                                            // <SidebarSubmenu {...route} />
                                            null
                                            :
                                            (<NavLink
                                                end
                                                to={route.path}
                                                className={({ isActive }) => `${isActive ? '-font-semibold  -bg-base-200 ' : '-font-normal'}`} >
                                                {route.icon} {route.name}
                                                {
                                                    location.pathname === route.path ? (<span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md -bg-primary "
                                                        aria-hidden="true"></span>) : null
                                                }
                                            </NavLink>)
                                    }

                                </li>
                            )
                        })
                    }
                </div>



            </ul>
            <div className='footerposition reletive'>
                {/* <div className='w-10 p-6 w-full bg-slate-50 '>
                    <div class="relative w-full ">
                        <div class="grid grid-cols-3 gap-4">
                            <div className='text-center  bg-tabperp p-2 rounded-xl'>
                                <h3>25</h3>
                                <div className='tabbox'>Update</div>
                            </div>
                            <div className='text-center  bg-tabblue p-2 rounded-xl'>
                                <h3>33</h3>
                                <div className='tabbox'>History file</div>
                            </div>
                            <div className='text-center  bg-taborg p-2 rounded-xl'>
                                <h3>45</h3>
                                <div className='tabbox'> Complated</div>
                            </div>

                        </div>
                    </div>
                </div> */}

                <div className='w-10 p-6 w-full absolute'>
                    <div class="s w-full ">
                        <div class="grid grid-cols-12 ">
                            {/* <div className="navbar  flex justify-between  header-trans z-10 shadow-md ">
                                <div className="order-last"> */}



                            {/* Profile icon, opening menu on click */}

                            {/* </div>
                            </div> */}

                            <div class="col-span-10">
                                <div class="grid grid-cols-12 ">
                                    <div class="col-span-4">

                                        <div className="dropdown dropdown-end ml-4">


                                            <div className="dropdown dropdown-right bg-white">
                                                <div tabIndex={0} role="button" className=""> <img src="/hero.png" alt="profile" /></div>
                                                <ul tabIndex={0} className="dropdown-content bg-white z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li className='bg-neutral-100'><a onClick={logoutUser}>Logout</a></li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-span-8">
                                        <label className="">
                                            <div className=" text-base">
                                                Michael Jordan
                                            </div>
                                            <p className='text-xs text-blue-800'>Last login  50min</p>
                                        </label>
                                    </div>

                                </div>
                                {/* <a onClick={logoutUser}> <img className="" src="/profile.png" alt="DashWind Logo" /></a> */}

                            </div>
                            <div class="col-span-2">
                                <button className="btn btn-ghost ml-4  btn-circle" onClick={() => openNotification()}>
                                    <div className="indicator">
                                        <BellIcon className="h-6 w-6" />
                                        {noOfNotifications > 0 ? <span className="indicator-item badge badge-secondary badge-sm">{noOfNotifications}</span> : null}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar