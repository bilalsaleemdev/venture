import { themeChange } from 'theme-change'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'
import { openRightDrawer } from '../features/common/rightDrawerSlice';
import { RIGHT_DRAWER_TYPES } from '../utils/globalConstantUtil'

import { NavLink, Routes, Link, useLocation } from 'react-router-dom'
import InputSearch from '../components/Input/InputSearch'


function Header() {

    const dispatch = useDispatch()
    const { noOfNotifications, pageTitle } = useSelector(state => state.header)
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"))

    useEffect(() => {
        themeChange(false)
        if (currentTheme === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setCurrentTheme("dark")
            } else {
                setCurrentTheme("light")
            }
        }
        // 👆 false parameter is required for react project
    }, [])


    // Opening right sidebar for notification
    const openNotification = () => {
        dispatch(openRightDrawer({ header: "Notifications", bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION }))
    }


    function logoutUser() {
        localStorage.clear();
        window.location.href = '/'
    }

    return (
        <>
            <div className="navbar h-[78px] flex justify-between  header-trans z-10 -border border-b -shadow-md -hidden px-6 relative">
            {/* <div className='h-[40px] w-[40px] flex items-center -justify-center bg-[red] absolute left-[-20px] z-[9999]'>
                    <img src="/images/sidebar-reaponsive-icon.svg" alt="" className='h-[40px] w-[40px]' />
                </div> */}
                <div className="">
                    <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
                        <Bars3Icon className="h-5 inline-block w-5" /></label>
                        <div class="relative w-full ">
                            <InputSearch/>
                        </div>
                </div>
                <div className="order-last">
                <span className='flex '><img src="/images/header-questionmark.svg" alt="" className='mr-[8px] cursor-pointer' /> <p className='text-[#727272] font-semibold cursor-pointer'>Help Center</p></span>
                    <div className="dropdown dropdown-end ml-4">
                    <span className='flex items-center'>
                        <label tabIndex={0} className="flex btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/header-profile-img.svg" alt="profile" />
                            </div>
                        </label>
                        <label tabIndex={0}>
                        <p className='font-semibold cursor-pointer'>Brian F.</p>
                        </label>
                        <label tabIndex={0}>
                            <img src="/images/header-arrow.svg" alt="" className='cursor-pointer' />
                        </label>
                    </span>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="justify-between">
                                <Link to={'/app/settings-profile'}>
                                    Profile Settings
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li className=''><Link to={'/app/settings-billing'}>Bill History</Link></li>
                            <div className="divider mt-0 mb-0"></div>
                            <li><a onClick={logoutUser}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header