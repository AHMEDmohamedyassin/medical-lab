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
        // toast.error('حدثت مشكة ما الرجاء المحاولة لاحقا')
        translateErrors(e)
        // console.log(e)
        return false
    }
}


function translateErrors (e){
    if(e.code == 'auth/email-already-in-use'){
        toast.error('البريد الإليكتروني مستخدم بالفعل')
    }
    else if(e.code == 'auth/weak-password'){
        toast.error('كلمة المرور ضعيفة')
    }
    else if(e.code == 'auth/user-not-found'){
        toast.error('الحساب غير موجد')
    }
    else if(e.code == 'auth/invalid-email'){
        toast.error('الرجاء إدخال بريد إليكتروني صالح')
    }
    else if(e.code == 'auth/wrong-password'){
        toast.error('كلمة المرور غير صحيحة')
    }
    else{
        toast.error('حدث خطأ ما الرجاء إعادة المحاولة')
        toast.error(e.code.replaceAll('auth/' , '').replaceAll('-' , ' '))
    }
}