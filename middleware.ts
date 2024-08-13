import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Check if the path starts with /protected
  if (path.startsWith('/protected')) {
    const token = await getToken({ 
      req: request, 
      secret: process.env.NEXTAUTH_SECRET 
    })

    if (!token) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('callbackUrl', encodeURI(request.url))
      // 設置一個自定義的錯誤消息
      loginUrl.searchParams.set('error', 'Please log in to access this page')
      
        return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

// Configure matcher for /protected routes
export const config = {
  matcher: ['/protected/:path*']
}