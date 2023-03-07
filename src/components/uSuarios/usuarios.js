import { Grid } from "@mui/material"
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Usuarios=()=>{
    return(
        <div >
            <Grid container className="head">
            <h1 >Costa Rica Metal 2023</h1>
            
            </Grid>
            
            <Grid container className='tablas'>
            <div >
                <h2>Lista de Bandas para Usuarios</h2>
                </div>
                <TableContainer component={Paper}  >
                
                    <Table  aria-label="simple table" >
                        <TableHead  className="tabla" >
                        <TableRow >
                            <TableCell  > <strong>confirmado</strong>  </TableCell>
                            <TableCell align="right" > <strong>Banda</strong> </TableCell>
                            <TableCell align="right" > <strong>Lugar</strong> </TableCell>
                            <TableCell align="right" > <strong>Fecha</strong> </TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">1</TableCell>
                                <TableCell align="right">Mayhem</TableCell>
                                <TableCell align="right">Club Peppers</TableCell>
                                <TableCell align="right">23 marzo</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">2</TableCell>
                                <TableCell align="right">knotFest</TableCell>
                                <TableCell align="right">Pedregal</TableCell>
                                <TableCell align="right">19 octubre</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">3</TableCell>
                                <TableCell align="right">Caifanes</TableCell>
                                <TableCell align="right">P.Viva</TableCell>
                                <TableCell align="right">15 mayo</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">4</TableCell>
                                <TableCell align="right">Darkane</TableCell>
                                <TableCell align="right">Club Peppers</TableCell>
                                <TableCell align="right">02 Abril</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">5</TableCell>
                                <TableCell align="right">Satanic Warmaster</TableCell>
                                <TableCell align="right">Club Peppers</TableCell>
                                <TableCell align="right">20 agosto</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            <Grid container className="footer">
                <Link to='/administracion'>
                    <button>administracion</button>
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

export default Usuarios
