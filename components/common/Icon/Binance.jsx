import React from 'react';
import { SvgIcon } from '@mui/material';

function BinanceIcon(props) {
  return (
    <SvgIcon width="100" height="100" viewBox="0 0 100 100" {...props}>
      <rect width="100" height="100" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1789_27654" transform="scale(0.00390625)" />
        </pattern>
        <image
          id="image0_1789_27654"
          width="256"
          height="256"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </SvgIcon>
  );
}

export default BinanceIcon;
