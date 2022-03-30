
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthProvider } from '../providers/AuthProvider'
import { REGISTR_PATH } from '../utilit/RoutePath'

export const useRequireAuth =(redirectURL = REGISTR_PATH )=> {
  const { user } = useAuthProvider()
  const navigate = useNavigate()

  useEffect (() => {
      if (!user) {
        navigate(redirectURL)
      }
  }, [user, navigate, redirectURL])
  return user
}