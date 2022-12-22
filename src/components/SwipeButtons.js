import React from 'react'
import "../styling/SwipeButtons.css"

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function SwipeButtons() {
  return (
    <div className="swipeButtons">
        <ReplayIcon fontSize="large" />
        <CloseIcon fontSize="large" />
        <StarRateIcon fontSize="large" />
        <FavoriteIcon fontSize="large" />
        <FlashOnIcon fontSize="large" />
    </div>
  )
}

export default SwipeButtons