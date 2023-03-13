import { useLocation } from "react-router-dom"

// --- CON ESTE QUERY TENGO ACCESO AL VALOR DEL SEARCH, ESTO LO HAGO LUEGO DE MI COMPONENTE SEARCH
function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  export default useQuery
  