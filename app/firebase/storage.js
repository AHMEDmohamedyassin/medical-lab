import { deleteObject, getDownloadURL, listAll, ref, uploadBytes , uploadString  } from "firebase/storage";
import { storage } from "./config";
import { toast } from "react-toastify";

export async function uploadFile (path , file) {
    try{
        const refer = ref(storage , path)
        const res = await uploadBytes(refer , file)
        return true
    }catch(e){
        console.log(e)
        toast.error('حدثت مشكلة ما')
        return false
    }
}

export async function uploadingString (path , string){
    try{
        const refer = ref(storage , path)
        const res = await uploadString(refer , string)
        return true
    }catch(e){
        console.log(e)
        toast.error('حدثت مشكلة ما')
        return false
    }
}

export async function deleteFile(path){
    try{
        const refer = ref(storage , path)
        const res = await deleteObject(refer)
        return true
    }catch(e){
        console.log(e)
        toast.error('حدثت مشكلة ما')
        return false
    }
}

export async function listFiles(path){
    try{
        const refer = ref(storage , path)
        const res = await listAll(refer)
        let urls = []
        res.items.forEach(async (e) => {
            const res = await getFile(e._location.path)
            urls.push(res)
        })
        return urls
    }catch(e){
        console.log(e)
        toast.error('حدثت مشكلة ما')
        return false
    }
}

export async function getFile(path){
    try{
        const refer = ref(storage , path)
        const res = await getDownloadURL(refer)
        return res
    }catch(e){
        console.log(e)
        toast.error('حدثت مشكلة ما')
        return false
    }
}