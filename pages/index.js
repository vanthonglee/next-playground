import Link from 'next/link';

export default () => (
  <div>
    <h1>SSR Magician</h1>
    <Link href="/about" >
      <button>About</button>
    </Link>
    <Link href="/photos" >
      <button>Photos</button>
    </Link>
    {/* <a href="./about">About</a> */}
  </div>
)
