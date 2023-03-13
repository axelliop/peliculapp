import React, { useEffect, useState } from 'react'

import { FaSearch } from 'react-icons/fa'
import styles from './Search.module.css'
import {useNavigate} from "react-router-dom";
import useQuery from './hooks/useQuery';

const Search = () => {

    const query = useQuery();
    const search = query.get('search')

//--- PARA SETEAR EN VACIO CADA VEZ QUE VUELVO AL INICIO DE LA PAG
    useEffect(() => {
        setSearchText(search || '');
    }, [search])

    
    // --- PARA LA BUSQUEDA DE PELICULAS! 
const [searchText, setSearchText] = useState('')

//---HOOKS PARA CAMBIO DE RUTA!
const navigate = useNavigate()
//---HOOKS PARA CAMBIO DE RUTA!

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/?search=" + searchText);
    } 

    //---NO USAR NI USEHISTORY NI .PUSH. YA NAVIGATE FUNCIONA SIN ESO



    

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
            <input className={styles.searchInput} type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            <button className={styles.searchButton} type='submit'>
            <FaSearch size={20} />
            </button>
        </div>
    </form>
  )
}

export default Search