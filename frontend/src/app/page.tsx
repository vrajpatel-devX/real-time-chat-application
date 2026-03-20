import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  return redirect("/chat")   // that means it not open localhost:3000 it's directly open localhost:3000/chat
}

export default page
