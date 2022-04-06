
import { useEffect, useState } from 'react'

export const useDebounce =(value, daley)=> {
    const [ stopValue, setSopValue ] = useState(value)
    useEffect(() => {
      const timerId = setTimeout(() => {
        setSopValue(value)
      }, daley)
      return () => {
          clearTimeout(timerId)
      }
    },[value, daley])

    return stopValue
}