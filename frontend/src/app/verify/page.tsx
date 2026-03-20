"use client";

import Loading from "@/components/Loading";
import VerifyOtp from "@/components/VerifyOtp";
import { Suspense } from "react";


const VerifyPage = () => {
  

  return (
    <Suspense fallback={<Loading />}>
      <div><VerifyOtp /></div>
    </Suspense>
  )
}

export default VerifyPage
