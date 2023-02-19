import Image from 'next/image';
import Paper from 'components/common/Paper';

export default function CustomImage({ src }) {
  return (
    <Image
      src={src}
      alt="Casino Logo"
      style={{ objectFit: 'contain' }}
      fill
    ></Image>
  );
}
