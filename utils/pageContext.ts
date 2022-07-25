import { createContext } from "react"
export const PageContext = createContext<{
  page: string
  setPage: (page: string) => void
  contextChange: boolean
  setContextChange: (contextChange: boolean) => void
}>({
  page: "landing",
  setPage: () => {},
  contextChange: false,
  setContextChange: () => {}
})
