import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='not-found'>
        <h1>Page Not Found!</h1>
        <Link href="/">Return Home</Link>
    </main>
  )
}
