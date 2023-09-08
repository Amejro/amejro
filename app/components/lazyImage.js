"use client"
import Image from "next/image"
import { useState } from "react"

function cn(...classes){
    return classes.filter(Boolean).join(' ')
}

function lazyImage({img}){
    const [isLoading, setLoading] =  useState(true)
    return(
     <div className="aspect-w-2 aspect-h-1">
          <Image 
          className={cn('rounded-t-lg  duration-700 ease-in-out',
          isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={()=>setLoading(false)}
          alt="leeerob"
           src={img}
           fill
            />
          </div>
    )
}

export default lazyImage