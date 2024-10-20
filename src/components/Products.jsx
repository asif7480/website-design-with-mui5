import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'

function Products() {
  return (
    <>
        <Typography variant='h2' textAlign={'center'} my={10}>
            Products Section
        </Typography>
        <Stack direction="row" gap={2}  >
            <Card>
                <CardMedia
                    component={"img"}
                    src='https://img.freepik.com/free-photo/beautiful-japanese-forest-landscape_23-2151498032.jpg'
                />
                <CardContent>
                    <Typography variant='h4' mb={2}>Card 1</Typography>
                    <Typography variant='body2' mb={2}> 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quis distinctio accusamus, nam veniam provident delectus incidunt labore quisquam laborum.
                    </Typography>
                    <Button variant='contained'>Read More</Button>
                </CardContent>
            </Card>

                <Card>
                <CardMedia
                    component={"img"}
                    src='https://img.freepik.com/free-photo/beautiful-japanese-forest-landscape_23-2151498032.jpg'
                />
                <CardContent>
                    <Typography variant='h4' mb={2}>Card 1</Typography>
                    <Typography variant='body2' mb={2}> 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quis distinctio accusamus, nam veniam provident delectus incidunt labore quisquam laborum.
                    </Typography>
                    <Button variant='contained'>Read More</Button>
                </CardContent>
            </Card>

                <Card>
                <CardMedia
                    component={"img"}
                    src='https://img.freepik.com/free-photo/beautiful-japanese-forest-landscape_23-2151498032.jpg'
                />
                <CardContent>
                    <Typography variant='h4' mb={2}>Card 1</Typography>
                    <Typography variant='body2' mb={2}> 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quis distinctio accusamus, nam veniam provident delectus incidunt labore quisquam laborum.
                    </Typography>
                    <Button variant='contained'>Read More</Button>
                </CardContent>
            </Card> 
        </Stack>
        
    </>
  )
}

export default Products