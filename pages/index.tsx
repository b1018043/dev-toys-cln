import type { NextPage } from 'next';
import * as React from "react";
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Link href="/textconv">
        <p>text conv</p>
      </Link>
      <Link href="/markdown">
        <p>markdown</p>
      </Link>
    </div>
  )
}

export default Home
