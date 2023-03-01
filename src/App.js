import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { useState } from 'react'
import Informacion from './components/informacion-general/informacion-general.js'
import Administracion from './components/administracion/administracion.js'
import PaginaPrincipal from './components/pagina-principal/pagina-principal.js'
import Portafolio from './components/portafolio/portafolio.js'
import Usuarios from './components/uSuarios/usuarios.js'
import { ProtectedRoute } from './components/protected-route/protected-route';


const  App = () => {
  const [isAllowed, setIsAllowed] = useState()
  

  const functionToGetchildData = (validateRouteLogin) => {
    if (validateRouteLogin === ''){
      setIsAllowed(true)
    } else {
      setIsAllowed(false)
    }
    console.log('isAllowed',isAllowed)
  }


  return (
      <BrowserRouter>
      
        <Routes> 
          <Route element={<ProtectedRoute  isAllowed={true}/>}>
          <Route path='/portafolio' element={<Portafolio childToParentData={functionToGetchildData}/>}></Route>
          </Route>
          <Route path='/pagina-principal' element={<PaginaPrincipal/>}> </Route>
          <Route path='/informacion-general' element={<Informacion/>}> </Route>
          <Route path='/administracion' element={<Administracion/>}> </Route> 
          
          <Route path='/usuarios' element={<Usuarios/>}> </Route>
        </Routes>      
      </BrowserRouter>      
         
              
  );
}

export default App;