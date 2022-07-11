import Grid from '@material-ui/core/Grid';
import Pic from '../images/katie-smith-uQs1802D0CQ-unsplash.jpg';



function SignIn() {
    return (
    <main style={{ height:"100%", padding: '0' }}>
      <Grid>
        <Grid container justifyContent="center">
             <img src={Pic} height='600' width='700' alt='recipe'/>
        </Grid>
      </Grid>
    </main>
        
  );
}

export default SignIn;

