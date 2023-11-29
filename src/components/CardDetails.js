import { Box, CardContent, Container, Grid, Paper} from "@mui/material"
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { stockData } from "../data";

const CardDetails = () =>{
  
    return(
      <>
        <Grid  
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}

     >
      <Grid  item xs={12} md={4} lg={4} xl={3}>
          <Card sx={{
              borderRadius: "10px",
              // p: "25px 20px",
              mb: "15px",
            }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                  {'"a benevolent smile"'}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card  sx={{
                borderRadius: "10px",
                mb: "15px",
            }}>
            <CardContent>
                <Typography sx={{ fontSize: 14,color:"grey" }} color="text.primary" gutterBottom>
                    Your Balance
                </Typography>
        
                <Box display={"flex"} justifyContent={"space-around"}>
                  <Typography  component="div" sx={{ fontSize: 14,color:"black" }}>
                      128,320
                  </Typography>
                  <Typography  component="div" sx={{ fontSize: 14,color:"red" }}>
                    23.12
                  </Typography>
                  <Typography  component="div" sx={{ fontSize: 14,color:"green" }}>
                    23.12%
                  </Typography>
                </Box>

                <hr/>

                <Box display={"flex"} color={"grey"} fontSize={"14px"} justifyContent={"space-between"}>
                  <Typography >
                    Currancy
                    <Typography  sx={{color:'black',fontSize:"14px"}}>USD/US Dollar</Typography>
                  </Typography>
                  <Typography >
                    Staus
                  <Typography sx={{color:'black',fontSize:"14px"}}>Active</Typography>
                  </Typography>
                </Box>
            </CardContent>

            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
      </Grid>
      {stockData.map((element,index)=>{
        return(
          <Grid  item xs={12} md={2} lg={2} xl={1}>
              <Card  sx={{
                  borderRadius: "10px",
                  // p: "25px 20px",
                  mb: "15px",
                }}>
          <CardContent>
            <Typography sx={{ fontSize: 14,color:"grey" }} color="text.primary" gutterBottom>
                {element.title}
            </Typography>
            
            <Box display={"flex"}>
            <Typography  component="div" sx={{ fontSize: 14,color:"black" }}>
              {element.balance}
            </Typography>
           
            </Box>
    
    
          
          </CardContent>
    
          
              </Card>
              <Card  sx={{
              borderRadius: "10px",
              // p: "25px 20px",
              mb: "15px",
            }}>
      <CardContent>
        <Typography sx={{ fontSize: 14,color:"grey" }} color="text.primary" gutterBottom>
            Your Balance
        </Typography>
        
        <Box display={"flex"} justifyContent={"space-around"}>
        <Typography  component="div" sx={{ fontSize: 14,color:"black" }}>
          128,320
        </Typography>
        <Typography  component="div" sx={{ fontSize: 14,color:"red" }}>
          23.12
        </Typography>
        <Typography  component="div" sx={{ fontSize: 14,color:"green" }}>
          23.12%
        </Typography>
        </Box>

        <hr/>

       <Box display={"flex"} color={"grey"} fontSize={"14px"} justifyContent={"space-between"}>
       <Typography >
          Currancy
          <Typography  sx={{color:'black',fontSize:"14px"}}>USD/US Dollar</Typography>
        </Typography>

        <Typography >
          Staus
          <Typography sx={{color:'black',fontSize:"14px"}}>Active</Typography>
         
        </Typography>
       </Box>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
              </Card>
        
          </Grid>
        )
      })}
      <Grid  item xs={12} md={4} lg={4} xl={4} >
          <Card  sx={{
              borderRadius: "10px",
              // p: "25px 20px",
              mb: "15px",
            }}>
      <CardContent>
        <Typography sx={{ fontSize: 14,color:"grey" }} color="text.primary" gutterBottom>
            Your Balance
        </Typography>
        
        <Box display={"flex"} justifyContent={"space-around"}>
        <Typography  component="div" sx={{ fontSize: 14,color:"black" }}>
          128,320
        </Typography>
        <Typography  component="div" sx={{ fontSize: 14,color:"red" }}>
          23.12
        </Typography>
        <Typography  component="div" sx={{ fontSize: 14,color:"green" }}>
          23.12%
        </Typography>
        </Box>

        <hr/>

       <Box display={"flex"} color={"grey"} fontSize={"14px"} justifyContent={"space-between"}>
       <Typography >
          Currancy
          <Typography  sx={{color:'black',fontSize:"14px"}}>USD/US Dollar</Typography>
        </Typography>

        <Typography >
          Staus
          <Typography sx={{color:'black',fontSize:"14px"}}>Active</Typography>
         
        </Typography>
       </Box>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
      </Grid>

      </Grid>
     
     
     </>
    )
}
export default CardDetails