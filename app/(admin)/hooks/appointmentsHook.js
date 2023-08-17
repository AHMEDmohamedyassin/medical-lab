import React, { useEffect, useState } from 'react'
import {  ref, onValue, remove } from "firebase/database";
import { rtdb } from '@/app/firebase/config';
import { error_handle } from '@/app/firebase/storage';
import { toast } from 'react-toastify';

const appointmentsHook = () => {
    const [data_list , setData_list] = useState([])
    const [loading , setLoading]= useState(false)
 


    useEffect(() => {
        try{
            setLoading(true)
            const refer = ref(rtdb , 'appointment/')
            onValue(refer , snap => {
                const data = snap.val();
                let items = []
                for(const e in data){
                    const obj = {
                        ...data[e],
                        id : e
                    }
                    if(items.includes(obj)) continue
                    items.push(obj)
                }
                setData_list(items)
                setLoading(false)
            })
        }catch(e){
            console.log(e)
            error_handle()
        }
    } , [])

    const delete_handle = async (id , ele) => {
        try{
            toast.info('جاري الحذف')

            await remove(ref(rtdb , `appointment/${id}`))

            ele.target.parentElement.remove()
            toast.success('تم الحذف')
        }catch(e){
            console.log(e)
            error_handle()
        }
    }

  return {data_list , delete_handle , loading}
}

export default appointmentsHook