
import { GoogleLogin } from '@react-oauth/google';
import { Grid } from '@mui/material';
import useLogin from './hooks/useLogin';

const Login = () => {
  const {onError,onSuccess} = useLogin();
  return (
    <div className='loginContainer'>
      <Grid container className='loginForm' display="flex" justifyContent="center">
        <Grid item xs={12} lg={3} display="flex" justifyContent="center">

          <GoogleLogin
            onSuccess={ onSuccess}
            onError={onError}
          />
        </Grid>

      </Grid>

    </div>
  )
}

export default Login



