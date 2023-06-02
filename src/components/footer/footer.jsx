import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material"; 
import appstorelogo from "./../../images/appstorelogo.png"

export default function Footer() {
  const [deliverooDiscoversLinks, setdeliverooDiscoversLinks] = React.useState([]);

  React.useEffect(() => {
    setdeliverooDiscoversLinks([
      'Investors', 'About us', 'Takeaway',  'More', 'Newsroom', 'Engineering blog','Design blog' ,'Gift Cards','Careers',
      'Restaurant signup', 'Become a rider', 'Deliveroo Talent Directory'
    ])
  },[]);

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2e3333',
        padding: '60px',
        color: '#fff'
      }}
    >
      <Container maxWidth="lg">
       
        <Grid container spacing={2}>
          <Grid  xs={12} sm={3}  > 
              <Box sx={{ backgroundColor: '#434747', width: '85%', padding: '20px 0px 20px 20px', borderRadius: 1 }}>
                <Typography variant="h6"   gutterBottom>
                  Discover Deliveroo
                </Typography>
                {deliverooDiscoversLinks.map((item, index) =>( 
                  <Typography variant="body2"   key={index} sx={{ mb: 1 }}>
                  { item }
                  </Typography>
                ))} 
              </Box>  
          </Grid> 
          <Grid  xs={12} sm={3}  > 
              <Box sx={{ backgroundColor: '#434747', width: '85%', padding: '20px 0px 20px 20px', borderRadius: 1 }}>
                <Typography variant="h6"   gutterBottom>
                  Discover Deliveroo
                </Typography>
                <img src={appstorelogo} style={{ maxWidth: 200 }} alt="" />
              </Box>  
          </Grid>
          <Grid  xs={12} sm={3}  > 
              <Box sx={{ backgroundColor: '#434747', width: '85%', padding: '20px 0px 20px 20px', borderRadius: 1 }}>
                <Typography variant="h6"   gutterBottom>
                  Discover Deliveroo
                </Typography>
                {deliverooDiscoversLinks.map((item, index) =>( 
                  <Typography variant="body2"   key={index} sx={{ mb: 1 }}>
                  { item }
                  </Typography>
                ))} 
              </Box>  
          </Grid>
          <Grid  xs={12} sm={3}  > 
              <Box sx={{ backgroundColor: '#434747', width: '85%', padding: '20px 0px 20px 20px', borderRadius: 1 }}>
                <Typography variant="h6"   gutterBottom>
                Take Deliveroo with you
                </Typography>
                <img src={appstorelogo} style={{ maxWidth: 200 }} alt="" />
              </Box>  
          </Grid>
          
          
          <Grid item xs={12} sm={8}>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box mt={0}>
              <Typography variant="body2" align="right" sx={{ width: '95%' }}>
                  {"© "}{new Date().getFullYear()}{" "} 
                  Deliveroo   
              </Typography>
            </Box>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
}
 
