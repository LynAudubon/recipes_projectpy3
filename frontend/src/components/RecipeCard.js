import * as React from 'react';
import  { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import RestaurantRoundedIcon from '@material-ui/icons/RestaurantRounded';
import '../css/global.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function Label(props) {
    return (
        <label class="contained">{props.data} 
            <input type="checkbox"/>
            <span class="checkmark"></span>
        </label>
    )
};

export default function RecipeCard(props) {
  const location = useLocation();
  const id = location.state.from;  
//   console.log('id', id);
  const items = useSelector(state => state.recipes);
//   console.log('items', items)
  const recipe = items.filter((x)=> x.id === id)[0];
  const ingredientsList = recipe.ingredients.split(',');
    
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {recipe.name[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={recipe.name}
        subheader={recipe.date_added}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.imageUrl}
        alt={recipe.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {recipe.notes}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <CardActions style={{ margin: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <CardContent style={{display: 'flex', flexDirection: 'row'}}>
                <MenuBookRoundedIcon/> 
                <p style={{marginLeft: '5px', position:'relative', bottom: '11px'}}>{recipe.category}</p>
            </CardContent>
            <CardContent style={{display: 'flex', flexDirection: 'row'}}>
                <RestaurantRoundedIcon/> 
                <p style={{marginLeft: '5px', position:'relative', bottom: '10px'}}>Servings: {recipe.serving_size}</p>
            </CardContent>
        </CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><h2>Ingredients:</h2></Typography>
          <hr></hr>
          <Typography paragraph>
            {ingredientsList.map((item, index) => (
            <Label key={index} data={item}/>))}
          </Typography>
          <Typography paragraph>
            <h2>Instructions:</h2>
          </Typography>
          <hr></hr>
          <Typography paragraph>
           {recipe.instructions}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
