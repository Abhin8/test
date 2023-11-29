import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, Avatar, Box, IconButton, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import DashboardIconOutLine from '@mui/icons-material/Dashboard';
import MobiledataOffIcon from '@mui/icons-material/MobiledataOff';
import DescriptionIcon from '@mui/icons-material/Description';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const Topbar = () =>{
    return(
       
        <AppBar
                 color="inherit"
                 sx={{
                    backgroundColor: "#fff",
                    boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
                    pt: "6px",
                    mb: "30px",
                    position: "sticky",
                  }}
                  className="top-navbar-for-dark"
            >
                
                   <Box display={"flex"} justifyContent={"space-between"} flexDirection={"row"} alignItems={"center"} margin={"0px 10px"}>
                          <Box display={"flex"} justifyContent={"center"} textAlign={"center"}  padding={"6px"} alignItems={"center"}>
                          <Typography fontSize={"20px"} paddingRight={"10px"}>Saakuku</Typography>

                         <DashboardIconOutLine  fontSize='10px'/> <Typography padding={"5px"} fontSize='12px' color={"grey"}>Overview</Typography>
                         <MobiledataOffIcon  fontSize='10px'/><Typography padding={"5px"} fontSize='12px' color={"grey"}>Taransaction</Typography>
                         <DescriptionIcon fontSize='10px'/><Typography  padding={"5px"} fontSize='12px' color={"grey"}>Invoice</Typography>
                         <CircleNotificationsIcon fontSize='10px'/><Typography  padding={"5px"} fontSize='12px' color={"grey"}  >Activity</Typography>

                          </Box>
                         <Box display={"flex"}>
                            <IconButton>
                                <LightModeIcon/>
                            </IconButton>
                            <IconButton>
                            <NotificationsNoneIcon/>
                                </IconButton>
                                <IconButton>
                                <SettingsIcon/>
                                </IconButton>
                                <IconButton >
                                <Avatar  sx={{ width: 40, height: 40 }}/>
                                </IconButton>
                         </Box>
                        
                     
                      
                    </Box>     
                   
                    
                    
               
               
            </AppBar>
        
    )
}
export default Topbar