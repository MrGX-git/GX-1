
import { useState } from 'react'

export const useLocalStorage =(key, initialValue)=> {
    const [storedValue, setStoredValue] = useState(()=> {
        if(typeof window === 'undefined') {
            return initialValue
        }
        try {
            const value = window.localStorage.getItem(key)
            return value ? JSON.parse(value) : initialValue
        }
        catch(error) {
            console.log('__useLocalStorage__useState__',error)
            return initialValue
        }
    })
    const setValue =(nevValue)=> {
        try {
            const valueToStore = nevValue instanceof Function ? nevValue(storedValue) : nevValue
            setStoredValue(valueToStore)

            if(typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
            }
        }
        catch(error) {
            console.log('__useLocalStorage__useState__', error)
        }

    }
    return [ storedValue, setValue ]
}