import { onAuthStateChanged } from 'firebase/auth'
import { NextResponse } from 'next/server'
import { auth } from './app/firebase/config'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    onAuthStateChanged(auth , (user) => {
        console.log(user)
    })
    console.log('user is : ' + auth?.currentUser)
    console.log('aaaaaaaaa')
    // return NextResponse.redirect(new URL('/', request.url))
    return 
}

export const config = {
    matcher: '/dashboard/:path*',
}