
import { Grid } from "@mui/material"
import { Link } from 'react-router-dom'

const Informacion=()=>{
    return(
        <div >
            <Grid container className="head">
                <h1 >Pagina Principal Costa Rica Metal</h1>
            </Grid>
            <Grid container className='title'>
                <h2 >Información sobre Conciertos Metal En Costa Rica</h2>
                
                </Grid>
                <div className="text">
                <h2>Bienvenidos Al Challenge 7.</h2>
                <h3>Saludos Costa Rica y Colombia.</h3>
                <p >
 Este es un nuevo espacio en el deseo unificar toda la información mas recientes de los nuevos conciertos en suelo costarricense. Entre bandas nacionales e internacionales, el objetivo primordial es ofrecer una cartelera de eventos metaleros que se programan para una determinada fecha en este país. </p>
              </div>
            

            <Grid container className="footer">
                <Link to='/administracion'>
                    <button>administracion</button>
                </Link>
                <Link to='/portafolio'>
                    <button>salir</button>
                </Link>
                <Link to='/usuarios'>
                    <button>usuarios</button>
                </Link>
                <Link to='/informacion-general'>
                    <button>informacion general</button>
                </Link>
            </Grid>
            <div className="text">
                <h5>By Esteban Arguedas C.</h5>
                </div>
        </div>
        
    )
}

export default Informacion