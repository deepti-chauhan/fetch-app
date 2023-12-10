import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function NewsCard(props) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography gutterBottom variant='h4' component='div'>
          {props.title}
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          {props.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>
          <a href={props.newsUrl} target='_blank' rel='noreferrer'>
            READ MORE
          </a>
        </Button>
        <Button size='small' onClick={() => props.removePost(props.id)}>
          DELETE
        </Button>
      </CardActions>
    </Card>
  )
}
