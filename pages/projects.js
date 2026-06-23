// pages/projects.js
import Head from 'next/head';

export default function Projects() {
  return (
    <div>
      <Head><title>My Projects</title></Head>
      <h1>My Projects</h1>
      <ul>
        <li><strong>Project 1:</strong> A responsive e-commerce dashboard.</li>
        <li><strong>Project 2:</strong> A real-time chat application.</li>
      </ul>
    </div>
  );
}