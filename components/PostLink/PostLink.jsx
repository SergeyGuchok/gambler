import Link from 'next/link';
import styles from './PostLink.module.css';

export default function PostLink({ children, href }) {
  const isOwnSiteLink = href.includes('thegamblr');
  const rel = isOwnSiteLink ? '' : 'noopener noreferrer nofollow';

  return (
    <Link href={href} rel={rel} target="_blank" className={styles.link}>
      {children}
    </Link>
  );
}
