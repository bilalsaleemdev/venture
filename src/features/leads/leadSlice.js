import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCall } from '../../app/axiosConfig';

export const getLeadsContent = async (data) => {
    try {
        const response = await getCall('/products', {...data})
        return response.data;
    } catch (error) {
        console.log('error:::asd',error)
        return error
    }	
}

// export const getLeadsContent = createAsyncThunk('/products', async (data, {rejectWithValue}) => {
//     try {
//         const response = await getCall('/products', {...data})
//         console.log('data:::1',response)
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error.response.data)
//     }	
// })

export const leadsSlice = createSlice({
    name: 'leads',
    initialState: {
        isLoading: false,
        leads: []
    },
    reducers: {

        addNewLead: (state, action) => {
            let { newLeadObj } = action.payload
            state.leads = [...state.leads, newLeadObj]
        },

        deleteLead: (state, action) => {
            let { index } = action.payload
            state.leads.splice(index, 1)
        }
    },

    extraReducers: {
        [getLeadsContent.pending]: state => {
            state.isLoading = true
        },
        [getLeadsContent.fulfilled]: (state, action) => {
            state.leads = action.payload.data
            state.isLoading = false
        },
        [getLeadsContent.rejected]: state => {
            state.isLoading = false
        },
    }
})

export const { addNewLead, deleteLead } = leadsSlice.actions

export default leadsSlice.reducer