import './portafolio.css'
import * as React from 'react'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Portafolio = ({childToParentData}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertUsuario, setAlertUsuario] = useState(false);
    const [alertAcceso, setAlertAcceso] = useState (false);
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState('')

    const onChangeUsuario = (event) => {setUsuario(event.target.value)}
    const onChangePassword = (event) => {setPassword(event.target.value)}
    const navigate = useNavigate();

    const porta =() => {
        if(usuario === '' || password === ''){
           
           setAlert(true)
           
        }
        else {
            setAlert(false)
            setAlertUsuario(false)
            setAlertAcceso(true)
            axios.post('http://localhost:3001/portafolio', {
                user: usuario,
                password: password
            }).then((response) => {
                setData(response.data)
                childToParentData(data)
                navigate("/pagina-principal");
            }).catch((err)=>{
                setData('')
                setAlertUsuario(true)
                childToParentData(data)
            })
        }
    }
    


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        
<Grid sx={{ mt:2}} item xs={4} >
    <Grid item xs={4}/>
        <Grid item xs={4} pt={8} >
                <div className='item'>
                    <Typography variant="h4" gutterBottom >
                        <div className='head'>
                        Acceso a Portafolio Para Socios
                        </div>
                        
                    </Typography>
                    <Grid  container className='alert'>
                    <div >
                        {
                        alertAcceso &&
                        <Alert severity="success">Acceso Autorizado</Alert>
                    }
                    {
                        alert &&
                        <Alert severity="error">Usuario o contrasea no pueden estar vacios</Alert>
                    }
                    {
                        alertUsuario &&
                        <Alert severity="warning">Usuario no existe</Alert>
                    }
                    </div>
                    </Grid>
                    <Grid item pt={4}>
                    <TextField 
                            value={usuario}
                            onChange={onChangeUsuario}
                            id="outlined-basic" 
                            label="Usuario" 
                            variant="outlined"
                            />
                    </Grid>
                    <Grid item pt={2}>
                    <FormControl  variant="outlined">
                         
                        <InputLabel htmlFor="outlined-adornment-password">Constraseña</InputLabel>
                        <OutlinedInput
                            value={password}
                            onChange={onChangePassword}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end" >
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="start"
                                  sx={{ width: '2ch', height: '2ch' }}
                                  variant="contained">
                                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                              </InputAdornment>
                            }
                            
                            label="Password"
                        />
                        
                    </FormControl>
                    </Grid>
                    <Grid item   pr={8}>
                        <Stack pl={43}  spacing={2} pt={2} pb={2} direction="row">
                            
                                <Button  variant="contained" onClick={() =>{porta()}}>Iniciar sesion</Button>       
                        </Stack>

                    </Grid>

                    <Grid pl={10} container className="footer">
                
                <div className='text'><p>si no eres miembro puedes acceder con <br></br>usuario: enus contrseña: 123</p></div>
            </Grid>
                </div>
            </Grid>
            
        </Grid>
        
    )
}

export default Portafolio

