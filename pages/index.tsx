import type { NextPage } from 'next';
import * as React from "react";
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="">
      <p>Hello</p>
      <Link href="/textconv">
        <p>text conv</p>
      </Link>
    </div>
  )
}

export default Home
