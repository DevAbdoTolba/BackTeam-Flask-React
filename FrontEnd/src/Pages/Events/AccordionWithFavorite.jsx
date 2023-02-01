import * as React from "react";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";

export default function AccordionWithFavorite({ event }) {
  const [favorite, setFavorite] = React.useState(false);

  return (
    <>
      {/* handel every favorite button alone if clicked or not */}
      <IconButton
        className="favorite-button"
        aria-label="favorite"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setFavorite(!favorite);
        }}
      >
        {favorite ? (
          <>
            <FavoriteIcon sx={{ color: "red" }} />
            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
              {event.likes + 1}
            </Typography>
          </>
        ) : (
          <>
            <FavoriteBorderIcon />
            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
              {event.likes}
            </Typography>
          </>
        )}
      </IconButton>
    </>
  );
}
