import Head from 'next/head';
import Header from '../components/Header';
import Main from '../containers/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main>
        <Main />
      </main>
    </div>
  );
}
