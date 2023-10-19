import Row from 'components/common/Row';
import Column from 'components/common/Column';
import Typography from 'components/common/Typography';
import { titleStyles, subTitleStyles } from './FooterDisclaimerBlock.styles';

export default function FooterDisclaimerBlock({ title, content, links }) {
  return (
    <Column>
      <Typography sx={titleStyles}>{title}</Typography>
      {content ? <Typography sx={subTitleStyles}>{content}</Typography> : null}
      {links ? (
        <Row
          sx={{
            gap: '10px',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          {links}
        </Row>
      ) : null}
    </Column>
  );
}
