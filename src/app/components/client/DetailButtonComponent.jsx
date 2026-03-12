"use client"
import React from 'react'

export default function DetailButtonComponent({children, onClick}) {
  return (
    <button onClick={onClick}>
    {children}
   </button>
  )
}
