import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./config"
import { toast } from "react-toastify"
import { error_handle } from "./storage"


export const register_func = async (email , pass , type) => {
    try{
        toast.info('جاري تنفيذ طلبك')
        if(type == 'createUser'){ 
            await createUserWithEmailAndPassword(auth , email , pass)
            toast.success('تم إنشاء الحساب بنجاح')
        }
        else if(type == 'login'){ 
            await signInWithEmailAndPassword(auth , email , pass)
            toast.success('تم تسجيل الدخول')
        }else if(type == 'reset'){
            await sendPasswordResetEmail(auth , email)
            toast.success('تم إرسال رابط تغيير كلمة المرور علي البريد الإلكتروني')
        }
    }catch(e){
        if(type == 'createUser') toast.error('حدثت مشكة ما')
        else if(type == 'login') toast.error('كلمة المرور غير صحيحة')
    }
}