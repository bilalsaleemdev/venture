import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Leads from '../../features/leads';
import { useQuery } from "@tanstack/react-query";
import { getLeadsContent } from '../../features/leads/leadSlice';

function InternalPage() {

    const dispatch = useDispatch()

    useEffect(() => {
        getData()
        dispatch(setPageTitle({ title: "OCR" }))
    }, [])

    const { isLoading, error, data, refetch: getData } = useQuery({
        queryKey: `chart_data`,
        queryFn: () => { return getLeadsContent({ page: 1 }) },
        enabled: false,
        refetchOnMount: false
    })

    return (
        <>
            {
                isLoading ? "Loading...." :
                    <Leads />
            }

        </>
    )
}

export default InternalPage