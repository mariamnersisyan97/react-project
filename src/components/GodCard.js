import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function GodCard({ god, handleDeleteGod }) {
  const { name, power, symbol, father, mother, url, likes } = god;
  const [count, setCount] = useState(likes);

  const incrementLikes = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  const onClickDelete = () => {
    handleDeleteGod(god.id);
  };

  return (
    // <li className="god-card">
    //   <h4>{god.name}</h4>
    //   <img src={url} alt={name} />
    //   <p>Power: {power}</p>
    //   <p>Symbol: {symbol}</p>
    //   <p>
    //     Mother: {mother}
    //     <br />
    //     Father: {father}
    //   </p>
    //   <button onClick={incrementLikes}>
    //     ❤️ Likes:
    //     {count}
    //   </button>
    //   <button onClick={handleDeleteListing}> 🗑️ </button>
    // </li>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={god.name} height="140" image={god.url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {god.name}
        </Typography>
        <Typography variant="body2" color="white">
          Power: {god.power}
        </Typography>
        <Typography>Mother: {god.mother}</Typography>
        <Typography>Father: {god.father}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={onClickDelete}>
          🗑️ Delete
        </Button>
        <Button variant="contained" onClick={incrementLikes}>
          ❤️ Likes: {count}
        </Button>
      </CardActions>
    </Card>
  );
}
export default GodCard;
