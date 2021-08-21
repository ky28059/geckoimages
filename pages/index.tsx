import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
    return (
        <>
            <Head>
                <title>GeckoImages</title>
            </Head>

            <div className="title">
                <h1>Geckoimages</h1>
            </div>

            <div className="Mainsection">
                <h2><a id="about">About</a></h2>

                <p>
                    The geckoimage collection is a collection of various artwork centered around{' '}
                    <a href="https://drive.google.com/file/d/1MaiGMlL30bWnxqOQgfXj5p1Tbx1hdWnj/view?usp=sharing">gecko 000</a>.
                </p>
                <p>The collection is divided into years, each containing 367 images.</p>
                <p>Anyone is allowed to submit images, just keep the <Link href="/submit"><a>guidelines</a></Link> in mind.</p>
            </div>
        </>
    )
}
