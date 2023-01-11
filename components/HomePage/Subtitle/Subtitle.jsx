import React from 'react';
import Typography from 'components/Typography';
import { primaryGrey } from 'constants/index';

const subtitleStyles = {
  maxWidth: 820,
  textAlign: 'center',
  margin: '0 auto',
  fontSize: 20,
  color: primaryGrey,
  marginTop: '30px',
  lineHeight: '30px',
};

export default function Subtitle() {
  return (
    <Typography sx={subtitleStyles}>
      Thegamblr.com is a website that
      collects and consolidates information about multiple online casino
      websites, allowing players to easily
      compare different casino sites and join the one that
      best fits their needs.
      The website provides a comprehensive overview of each casino,
      including information about the games, bonuses, and
      promotions offered, as well as reviews and ratings from
      customers. Players can use Thegamblr.com to quickly find the
      best casino for them and enjoy secure, real money gambling
      at expert-approved sites offering big bonuses,
      hundreds of games and mobile compatibility.
    </Typography>
  );
}
