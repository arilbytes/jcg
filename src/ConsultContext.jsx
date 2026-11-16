import { createContext, useContext, useState, useCallback } from 'react'
import ConsultModal from './components/ConsultModal'

const ConsultCtx = createContext({ openConsult: () => {} })
export const useConsult = () => useContext(ConsultCtx)

export function ConsultProvider({ children }) {
  const [open, setOpen] = useState(false)
  const openConsult = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])
  return (
    <ConsultCtx.Provider value={{ openConsult }}>
      {children}
      {open && <ConsultModal onClose={close} />}
    </ConsultCtx.Provider>
  )
}
