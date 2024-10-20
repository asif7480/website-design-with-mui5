import { Box, Button, Stack, Typography } from '@mui/material'
import Grid from "@mui/material/Grid2"
import React from 'react'

function Hero() {
  return (
    <>
        <Grid container direction="row" alignItems="center"  sx={{ height: "80vh" }}>
            <Grid px={2} size={{ xs: 12, sm: 12, md: 6}} >
                <Typography variant='h2' mb={3}>
                    This is heading
                </Typography>
                <Typography mb={3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur porro praesentium. Enim consequuntur quaerat expedita! Iusto quaerat dolores voluptas totam magni esse iste optio earum, illo, asperiores soluta natus expedita accusamus et? Possimus incidunt ullam iusto ratione nulla similique pariatur impedit exercitationem totam tempore? Quibusdam cumque iure perferendis eligendi!
                </Typography>
                <Button variant='contained'>
                    Click me
                </Button>
            </Grid>
            <Grid px={2} size={{ xs: 12, sm: 12, md: 6 }} >
                <Box 
                    component="img" 
                    src='https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stywo-1054218.jpg&fm=jpg'
                    height="100%"
                    width="100%"
                    sx={{ borderRadius: 20}}
                >
                    {/* <img 
                        src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stywo-1054218.jpg&fm=jpg" 
                        alt=""
                        height="100%" 
                        width="100%"
                    /> */}
                </Box>
            </Grid>
        </Grid>
    </>
  )
}

export default Hero