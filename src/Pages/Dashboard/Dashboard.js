import { Box, Grid } from "@mui/material"
import Header from "../../components/Header"
import CardDetails from "../../components/CardDetails"

const Dashboard = () =>{
    return(
        <Box m={"20px"} >
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
               <Header title="DASHBOARD" subtitle="Welcome to your Dashboard"/>
               
            </Box>
          <CardDetails/>
              
        </Box>
    )
}
export default Dashboard