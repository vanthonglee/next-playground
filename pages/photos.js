import Link from 'next/link';
import fetch from 'node-fetch';

let Photos = ({ photos }) => {
  return (
    <div>
      <h1>Photos</h1>
      <Link href='/'>
        <button>Home</button>
      </Link>
      <div>Photos Data
  {
          photos.map(photo => (
            <li key={photo.id}>
              <Link href={`photos/${photo.id}`}>
                <a>
                  {photo.title}
                </a>
              </Link>
              <img src={photo.thumbnailUrl} alt="" />
            </li>
          ))
        }
      </div>
    </div>
  )
}

Photos.getInitialProps = async (ctx) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos = await res.json();
  console.log(photos)
  photos.splice(5, photos.length - 6);
  return {
    photos
  }
}

export default Photos;