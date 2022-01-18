import Link from 'next/link';
import Layout from '../components/Layout';
import { RoverFeed } from '../components/RoverFeed';

export default function Home() {
  return (
    <Layout>
      <Link href="/rover">
        <a>Mars Rover Photos</a>
      </Link>
      <Link href="/apod">
        <a>Astronomy Picture of the Day</a>
      </Link>
    </Layout>
  );
}
