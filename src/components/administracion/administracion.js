import { Grid } from "@mui/material"
import { Link } from 'react-router-dom'

const Administracion=()=>{
    return(
        <div  >
            <Grid container className="head">
            <h1 >Administracion</h1>
            </Grid>
            <Grid className="title">
                <h2> Grupo Administrativo de Eventos Metalfest CR </h2>
            </Grid>
              <div className="text">
                <p>La Administracion agradece la espera por este proyecto <br></br>y pide disculpas por el retraso de entrega debido a daño en maquina principal
                     y sustitucion del mismo</p>
              </div>

            <Grid container className="footer">
            <Link to='/usuarios'>
                <button>usuarios</button>
            </Link>
            <Link to='/informacion-general'>
                <button>informacion general</button>
            </Link>
            <Link to='/portafolio'>
                <button>salir</button>
            </Link>
            <Link to='/pagina-principal'>
                    <button>pagina principal</button>
                </Link>
            

            </Grid>
        </div>
    )
}

export default Administracion 
