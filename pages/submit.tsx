import Head from 'next/head';
import GeckoExample from '../components/GeckoExample';
import Card from '../components/Card';


export default function Submit() {
    return (
        <>
            <Head>
                <title>Submit | GeckoImages</title>
            </Head>

            <div className="subtitle text-center my-20">
                <h1>Submit</h1>
            </div>

            <div className="text-center p-4">
                <Card className="mx-auto">
                    <h2>Guidelines</h2>
                    <p>
                        Geckoimages are usually 512x512 pngs but they can also be other formats and sizes.<br/>
                        They must be constructed out of an existing gecko image or they must resemble a gecko.<br/><br/>
                    </p>
                </Card>

                <h2 className="mb-4">good examples:</h2>
                <div className="grid grid-cols-4 gap-4 mb-8">
                    <GeckoExample src="/385_sunset.png" alt="a sunset with a gecko shaped border">
                        Resembles a gecko, and has a cool sunset.
                    </GeckoExample>
                    <GeckoExample src="/660_pythagorean_triple.png" alt="many geckos forming a triangle">
                        Constructed using many existing geckos.
                    </GeckoExample>
                    <GeckoExample src="/175_PHYSICAL_FORM.jpg" alt="a picture of a 3D printed gecko">
                        Resembles a gecko despite being in another plane of existence.
                    </GeckoExample>
                    <GeckoExample src="/304_youexpectedthisimagetomakesenseright.png" alt="a random mishmash of geckos">
                        Constructed using an existing gecko.
                    </GeckoExample>
                </div>

                <h2 className="mb-4">bad examples:</h2>
                <div className="grid grid-cols-4 gap-4">
                    <GeckoExample src="/lemonthink.png" alt="a picture of a lemon thinking">
                        Does not resemble a gecko, nor is it assembled from an existing gecko.
                    </GeckoExample>
                    <GeckoExample src="/anti-example 1.png" alt="a 512x512 image with the letter 'E' on it">
                        Whilst you could argue that this was created from the original gecko image, it does not
                        contain any part of the original, nor does it resemble a gecko.
                    </GeckoExample>
                    <GeckoExample src="/gecc.png" alt="a real gecko">
                        Yes, it is a gecko. Yes, the gecko is very cool. But not the type of gecko {"we're"} looking
                        for. (However, adding a gecko-shaped border would qualify it)
                    </GeckoExample>
                    <GeckoExample src="/Group 10.png" alt="example image not shown">
                        Anything that might upset others or NSFW. Use your common sense.
                    </GeckoExample>
                </div>

                <h2>Other Info</h2>
                <p>
                    Geckos whose number is preceded by a {"'b'"} are alternate geckos. Usually this is an uncropped or
                    variation of {"it's"} non-alternate counterpart. They are not required and are optional.
                    <br/><br/>
                    A year has 367 geckos (reminder that geckos are 0-indexed!). The last few geckos of a year are
                    usually reserved along with geckos which are multiples of 100.
                </p>

                <h2>Form Info</h2>
                <p>
                    Make sure the file is named what the submitted gecko will be named.
                    <br/>
                    If you would like a specific number for your gecko, please specify in the file name.
                    <br/><br/>
                    the email you enter will be recorded as the author.
                </p>

            </div>

            <div className="subtitle">
                <h1>Understood?<br/><a href="https://forms.gle/CeNkM2aHcdrcidvX6">Submit Here</a></h1>
            </div>
        </>
    )
}