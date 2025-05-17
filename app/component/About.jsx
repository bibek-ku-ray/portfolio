import Link from 'next/link';
import React from 'react'

const About = () => {
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-2xl font-semibold mb-3">About</h2>
        <p className="text-gray-300 text-xl leading-normal">
          I'm a full-stack developer specializing in the{" "}
          <span className="text-gray-50">MERN stack</span> , with strong
          experience in both NoSQL and SQL databases including{" "}
          <span className="text-gray-50">PostgreSQL</span> and{" "}
          <span className="text-gray-50">MySQL</span>. I enjoy building scalable
          web applications, solving real-world problems through code, and
          continuously exploring new technologies to grow as a developer
        </p>
      </div>

      <div className="mb-8">
        <p className="text-gray-400 text-xl">
          You can find me on{" "}
          <Link
            href="https://www.linkedin.com/in/bibek-ray-8ba1b22ba/"
            className="text-gray-50 hover:underline"
          >
            LinkedIn
          </Link>
          ,{" "}
          <Link
            href="https://github.com/bibek-ku-ray"
            className="text-gray-50 hover:underline"
          >
            Github
          </Link>
          , or{" "}
          <Link
            href="https://x.com/bibekray1225"
            className="text-gray-50 hover:underline"
          >
            X
          </Link>
        </p>
      </div>
    </div>
  );
}

export default About