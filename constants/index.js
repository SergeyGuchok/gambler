// colors

// all project colors
export const primaryBlack = '#131213';
export const primaryWhite = '#ffffff';
export const primaryGrey = '#969696';
export const secondaryGrey = '#D9D9D9';

// navigation menu colors
export const navMenuItem = '#A8A8A8';
export const navMenuItemActive = '#19191B';
export const navBarBackgroundColor = '#F9F8F8';

// number colors
export const numberOneColor = '#DAA520';
export const numberTwoColor = '#C0C0C0';
export const numberThreeColor = '#CC6633';
export const defaultNumberColor = '#D6D7DD';

// icon colors
export const approveColor = '#31A451';
export const cancelColor = '#E01B20';

// alerts
export const warningBackground = '#FFF6E3';
export const warningText = '#FF8A00';

export const TYPE_PRIMARY = 'primary';
export const TYPE_SECONDARY = 'secondary';

// footer
export const FOOTER_BACKGROUND = '#F5F5F5';

export const API_URL =
  process.env.ENVIRONMENT === 'production'
    ? 'https://thegamblr.com/api'
    : 'http://localhost:3000/api';

export const PROD_URL =
  process.env.ENVIRONMENT === 'production'
    ? 'https://thegamblr.com'
    : 'http://localhost:3000';
