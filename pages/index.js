import Head from 'next/head';
import { useEffect } from 'react';
import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin"

gsap.registerPlugin(TextPlugin)

export default function Home() {

  useEffect(() => {
    window.addEventListener('click', () => {
      gsap.from("#text", {y:500, opacity:0, duration:1})
      gsap.to("#element", {
        duration: 2,
        text: {
            value: "テキストアニメーション",
            delimiter: ""
        },
        ease: "power2"
    });
    console.log('clicked')
    });
  }, []);

  return (
    <>
    <Head>
      <title>CSS Effects!!</title>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
    </Head>
    <main>
      <p id="text">test</p>
      <p id="element">TYPEtestsetset</p>
    </main>
    </>
  )
}
