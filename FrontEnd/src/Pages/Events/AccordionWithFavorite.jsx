import * as React from "react";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";

export default function AccordionWithFavorite({ event }) {
  const [favorite, setFavorite] = React.useState(false);
  const [spam_counter, setSpamCounter] = React.useState(2);
  const [broken, setBroken] = React.useState(false);
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
          setSpamCounter(spam_counter + 1);
          if (spam_counter % 11 == 0) {
            // change the fav icon to a heart broken icon and change the color to black
            // and change the text to "you are a spammer"
            // and disable the button
            setBroken(!broken);
          }
        }}
      >
        {favorite ? (
          <>
            {!broken ? (
              <>
                <FavoriteIcon sx={{ color: "red" }} />
                <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
                  {event.likes + 1}
                </Typography>
              </>
            ) : (
              <>
                <HeartBrokenIcon sx={{ color: "red" }} />
                <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
                  &nbsp;To much presure
                </Typography>
              </>
            )}
          </>
        ) : (
          <>
            {!broken ? (
              <>
                <FavoriteBorderIcon />
                <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
                  {event.likes}
                </Typography>
              </>
            ) : (
              <>
                <HeartBrokenOutlinedIcon />
                <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
                  &nbsp;To much presure
                </Typography>
              </>
            )}
          </>
        )}
      </IconButton>
    </>
  );
}
