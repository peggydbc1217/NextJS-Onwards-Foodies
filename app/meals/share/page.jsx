import React from 'react'
import Link from 'next/link'

export default function SharePage() {
  return (
    <>
    <div>Share Meal</div>
    <Link href="/meals/share-1">share meal -1</Link>
    <Link href="/meals/share-2">share meal -2</Link>
    </>
  )
}
