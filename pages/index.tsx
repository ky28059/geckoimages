import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
    return (
        <>
            <Head>
                <title>GeckoImages</title>
            </Head>

            <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500" style={{marginTop: '-56px'}}>
                <h1 className="bg-geckos bg-contain bg-clip-text text-transparent text-8xl p-4 md:text-12xl md:p-8 lg:text-15xl lg:p-12 break-words">Gecko​images</h1>
            </div>

            <div className="bg-white text-black text-center p-8">
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
