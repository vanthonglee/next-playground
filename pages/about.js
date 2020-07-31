import Link from 'next/link';
import Image from 'components/image';

export default () => (
  <div style={{ fontSize: '20px', color: '#32CD32' }}>
    <h1>About</h1>
    <Link href='/'>
      <button>Back</button>
    </Link>
    <Image />
    <p>I love nature.</p>
  </div>
)
