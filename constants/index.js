// colors

// all project colors
export const primaryBlack = '#131213';
export const primaryWhite = '#ffffff';
export const primaryGrey = '#969696';
export const secondaryGrey = '#D9D9D9';

export const termsGrey = '#BABABA';

// navigation menu colors
export const navMenuItem = '#A8A8A8';
export const navMenuItemActive = '#19191B';
export const navBarBackgroundColor = '#FEFEFE';

// number colors
export const numberOneColor = '#DAA520';
export const numberTwoColor = '#C0C0C0';
export const numberThreeColor = '#CC6633';
export const defaultNumberColor = '#D6D7DD';

// icon colors
export const approveColor = '#31A451';
export const cancelColor = '#E01B20';

export const adButtonColor = '#FF8A00';

// alerts
export const warningBackground = '#FFF6E3';
export const warningText = '#FF8A00';

export const TYPE_PRIMARY = 'primary';
export const TYPE_SECONDARY = 'secondary';

export const TYPE_AD = 'ad';

// footer
export const FOOTER_BACKGROUND = '#F5F5F5';

export const API_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
    ? 'https://www.thegamblr.com/api'
    : 'http://localhost:3000/api';

export const PROD_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
    ? 'https://www.thegamblr.com'
    : 'http://localhost:3000';

export const IMAGE_URL =
  'https://ams3.digitaloceanspaces.com/thegamblr-storage/';
