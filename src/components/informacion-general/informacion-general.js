
import { Grid } from "@mui/material"
import { Link } from 'react-router-dom'

const Informacion=()=>{
    return(
        <div  >
            <Grid container className="head">
                <h1 >Informacion General</h1>
            </Grid>
            <Grid className="title" >
                <p> Historia y Noticias del Mundo del Metal </p>
            </Grid>
              <div className="text">Semanalmente estaremos subiendo contenido relacionado a la historia <br></br>e inicios del Heavy metal y sus raices</div>
            <Grid container className="footer">

            <Link to='/pagina-principal'>
                    <button>pagina principal</button>
                </Link>
                <Link to='/usuarios'>
                <button>usuarios</button>
            </Link>
            <Link to='/administracion'>
                <button>administracion</button>
            </Link>
            <Link to='/portafolio'>
                <button>portafolio</button>
            </Link>
                
        </Grid>
        </div>
        
    )
}

export default Informacion