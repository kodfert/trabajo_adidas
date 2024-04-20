import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import { CiHeart } from 'react-icons/ci'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  boxShadow: "none",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1 }} px={10}>
      <Grid container spacing={2}>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Item>
            <Stack position="relative" >
             <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3518912b29e44df9a1f5ada800ec382c_9366/Playera_adidas_SPRT_Pocket_Negro_HE4723_01_laydown.jpg" alt="" />
              
              <Box sx={{ position:"absolute", right:"12px", top:"12px"}}>
              <CiHeart  size={20} color='#000000'/>
              </Box>
              <Box sx={{ position:"absolute", bottom: 0, left: "5px", background: "white", px:"5px", display:"flex", flexDirection:"row-reverse", gap:"10px"}}>
              <Typography fontSize="14px" color="#D20000" fontWeight="300">$529.920</Typography>
                <Typography sx={{textDecoration: "line-through"}} fontSize="14px" color="#000000" fontWeight="400">$529.920</Typography>
                
              </Box>
            </Stack>
            <Stack padding="10px">
              <typography fontSize="17px" color="#000000" fontWeight="400">tenis inder</typography>
              <typography fontSize="12px" color="767677">training</typography>

              <Box display="flex" flexDirection="row" gap={1} >
              <typography fontSize="12px" color="#767677">2 colores</typography>            
                <span>&#8226; </span>
                <typography fontSize="12px" color="#000000">envio gratis</typography>
              </Box>              
            </Stack>
          </Item>
        </Grid>    



        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Item>
            <Stack position="relative" >
             <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3518912b29e44df9a1f5ada800ec382c_9366/Playera_adidas_SPRT_Pocket_Negro_HE4723_01_laydown.jpg" alt="" />
              
              <Box sx={{ position:"absolute", right:"12px", top:"12px"}}>
              <CiHeart  size={20} color='#000000'/>
              </Box>
              <Box sx={{ position:"absolute", bottom: 0, left: "5px", background: "white", px:"5px", display:"flex", flexDirection:"row-reverse", gap:"10px"}}>
              <Typography fontSize="14px" color="#D20000" fontWeight="300">$529.920</Typography>
                <Typography sx={{textDecoration: "line-through"}} fontSize="14px" color="#000000" fontWeight="400">$529.920</Typography>
                
              </Box>
            </Stack>
            <Stack padding="10px">
              <typography fontSize="17px" color="#000000" fontWeight="400">tenis inder</typography>
              <typography fontSize="12px" color="767677">training</typography>

              <Box display="flex" flexDirection="row" gap={1} >
              <typography fontSize="12px" color="#767677">2 colores</typography>            
                <span>&#8226; </span>
                <typography fontSize="12px" color="#000000">envio gratis</typography>
              </Box>              
            </Stack>
          </Item>
        </Grid>   

        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Item>
            <Stack position="relative" >
             <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3518912b29e44df9a1f5ada800ec382c_9366/Playera_adidas_SPRT_Pocket_Negro_HE4723_01_laydown.jpg" alt="" />
              
              <Box sx={{ position:"absolute", right:"12px", top:"12px"}}>
              <CiHeart  size={20} color='#000000'/>
              </Box>
              <Box sx={{ position:"absolute", bottom: 0, left: "5px", background: "white", px:"5px", display:"flex", flexDirection:"row-reverse", gap:"10px"}}>
              <Typography fontSize="14px" color="#D20000" fontWeight="300">$529.920</Typography>
                <Typography sx={{textDecoration: "line-through"}} fontSize="14px" color="#000000" fontWeight="400">$529.920</Typography>
                
              </Box>
            </Stack>
            <Stack padding="10px">
              <typography fontSize="17px" color="#000000" fontWeight="400">tenis inder</typography>
              <typography fontSize="12px" color="767677">training</typography>

              <Box display="flex" flexDirection="row" gap={1} >
              <typography fontSize="12px" color="#767677">2 colores</typography>            
                <span>&#8226; </span>
                <typography fontSize="12px" color="#000000">envio gratis</typography>
              </Box>              
            </Stack>
          </Item>
        </Grid>   




        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Item>
            <Stack position="relative" >
             <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/edad624afcc54209b01faf12008f12f6_9366/Camiseta_Adicolor_Classics_3_Rayas_Azul_IA4850_01_laydown.jpg" alt="" />
              
              <Box sx={{ position:"absolute", right:"12px", top:"12px"}}>
              <CiHeart  size={20} color='#000000'/>
              </Box>
              <Box sx={{ position:"absolute", bottom: 0, left: "5px", background: "white", px:"5px", display:"flex", flexDirection:"row-reverse", gap:"10px"}}>
              <Typography fontSize="14px" color="#D20000" fontWeight="300">$529.920</Typography>
                <Typography sx={{textDecoration: "line-through"}} fontSize="14px" color="#000000" fontWeight="400">$529.920</Typography>
                
              </Box>
            </Stack>
            <Stack padding="10px">
              <typography fontSize="17px" color="#000000" fontWeight="400">tenis inder</typography>
              <typography fontSize="12px" color="767677">training</typography>

              <Box display="flex" flexDirection="row" gap={1} >
              <typography fontSize="12px" color="#767677">2 colores</typography>            
                <span>&#8226; </span>
                <typography fontSize="12px" color="#000000">envio gratis</typography>
              </Box>              
            </Stack>
          </Item>
        </Grid>   



        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Item>
            <Stack position="relative" >
             <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/edad624afcc54209b01faf12008f12f6_9366/Camiseta_Adicolor_Classics_3_Rayas_Azul_IA4850_01_laydown.jpg" alt="" />
              
              <Box sx={{ position:"absolute", right:"12px", top:"12px"}}>
              <CiHeart  size={20} color='#000000'/>
              </Box>
              <Box sx={{ position:"absolute", bottom: 0, left: "5px", background: "white", px:"5px", display:"flex", flexDirection:"row-reverse", gap:"10px"}}>
              <Typography fontSize="14px" color="#D20000" fontWeight="300">$529.920</Typography>
                <Typography sx={{textDecoration: "line-through"}} fontSize="14px" color="#000000" fontWeight="400">$529.920</Typography>
                
              </Box>
            </Stack>
            <Stack padding="10px">
              <typography fontSize="17px" color="#000000" fontWeight="400">tenis inder</typography>
              <typography fontSize="12px" color="767677">training</typography>

              <Box display="flex" flexDirection="row" gap={1} >
              <typography fontSize="12px" color="#767677">2 colores</typography>            
                <span>&#8226; </span>
                <typography fontSize="12px" color="#000000">envio gratis</typography>
              </Box>              
            </Stack>
          </Item>
        </Grid>   


        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Item>
            <Stack position="relative" >
             <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/edad624afcc54209b01faf12008f12f6_9366/Camiseta_Adicolor_Classics_3_Rayas_Azul_IA4850_01_laydown.jpg" alt="" />
              
              <Box sx={{ position:"absolute", right:"12px", top:"12px"}}>
              <CiHeart  size={20} color='#000000'/>
              </Box>
              <Box sx={{ position:"absolute", bottom: 0, left: "5px", background: "white", px:"5px", display:"flex", flexDirection:"row-reverse", gap:"10px"}}>
              <Typography fontSize="14px" color="#D20000" fontWeight="300">$529.920</Typography>
                <Typography sx={{textDecoration: "line-through"}} fontSize="14px" color="#000000" fontWeight="400">$529.920</Typography>
                
              </Box>
            </Stack>
            <Stack padding="10px">
              <typography fontSize="17px" color="#000000" fontWeight="400">tenis inder</typography>
              <typography fontSize="12px" color="767677">training</typography>

              <Box display="flex" flexDirection="row" gap={1} >
              <typography fontSize="12px" color="#767677">2 colores</typography>            
                <span>&#8226; </span>
                <typography fontSize="12px" color="#000000">envio gratis</typography>
              </Box>              
            </Stack>
          </Item>
        </Grid>   


        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Item>
            <Stack position="relative" >
             <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/edad624afcc54209b01faf12008f12f6_9366/Camiseta_Adicolor_Classics_3_Rayas_Azul_IA4850_01_laydown.jpg" alt="" />
              
              <Box sx={{ position:"absolute", right:"12px", top:"12px"}}>
              <CiHeart  size={20} color='#000000'/>
              </Box>
              <Box sx={{ position:"absolute", bottom: 0, left: "5px", background: "white", px:"5px", display:"flex", flexDirection:"row-reverse", gap:"10px"}}>
              <Typography fontSize="14px" color="#D20000" fontWeight="300">$529.920</Typography>
                <Typography sx={{textDecoration: "line-through"}} fontSize="14px" color="#000000" fontWeight="400">$529.920</Typography>
                
              </Box>
            </Stack>
            <Stack padding="10px">
              <typography fontSize="17px" color="#000000" fontWeight="400">tenis inder</typography>
              <typography fontSize="12px" color="767677">training</typography>

              <Box display="flex" flexDirection="row" gap={1} >
              <typography fontSize="12px" color="#767677">2 colores</typography>            
                <span>&#8226; </span>
                <typography fontSize="12px" color="#000000">envio gratis</typography>
              </Box>              
            </Stack>
          </Item>
        </Grid>   


        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Item>
            <Stack position="relative" >
             <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/edad624afcc54209b01faf12008f12f6_9366/Camiseta_Adicolor_Classics_3_Rayas_Azul_IA4850_01_laydown.jpg" alt="" />
              
              <Box sx={{ position:"absolute", right:"12px", top:"12px"}}>
              <CiHeart  size={20} color='#000000'/>
              </Box>
              <Box sx={{ position:"absolute", bottom: 0, left: "5px", background: "white", px:"5px", display:"flex", flexDirection:"row-reverse", gap:"10px"}}>
              <Typography fontSize="14px" color="#D20000" fontWeight="300">$529.920</Typography>
                <Typography sx={{textDecoration: "line-through"}} fontSize="14px" color="#000000" fontWeight="400">$529.920</Typography>
                
              </Box>
            </Stack>
            <Stack padding="10px">
              <typography fontSize="17px" color="#000000" fontWeight="400">tenis inder</typography>
              <typography fontSize="12px" color="767677">training</typography>

              <Box display="flex" flexDirection="row" gap={1} >
              <typography fontSize="12px" color="#767677">2 colores</typography>            
                <span>&#8226; </span>
                <typography fontSize="12px" color="#000000">envio gratis</typography>
              </Box>              
            </Stack>
          </Item>
        </Grid>   

    











































      </Grid>
    </Box>
  );
}

export default App
