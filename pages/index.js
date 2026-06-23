// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// This function enables Server-Side Rendering (SSR)
export async function getServerSideProps() {
  const currentTime = new Date().toLocaleString();
  return {
    props: {
      currentTime, // Passed to the component below
    },
  };
}

export default function Home({ currentTime }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Suzanne's Portfolio</title>
      </Head>
      
      <h1 className={styles.title}>Welcome to My Portfolio</h1>
      
      {/* Using the Next.js Image component */}
      <div className={styles.imageWrapper}>
        <Image 
          src="/profile.jpg" // Make sure to add an image named profile.jpg to your 'public' folder!
          alt="Profile Picture" 
          width={200} 
          height={200} 
          className={styles.profileImg}
        />
      </div>

      <p>Server-Side Rendered at: <strong>{currentTime}</strong></p>
    </div>
  );
}