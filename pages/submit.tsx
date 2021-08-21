import React from 'react';
import Head from 'next/head';


export default function Submit() {
    return (
        <>
            <Head>
                <title>GeckoImages | Submit</title>
            </Head>

            <div className="subtitle">
                <h1>Submit</h1>
            </div>

            <div className="section">
                <h2>Guidelines</h2>
                <p>
                    Geckoimages are usually 512x512 pngs but they can also be other formats and sizes.<br/>
                    They must be constructed out of an existing gecko image or they must resemble a gecko.<br/><br/>
                    good examples:
                </p>
                <table>
                    <tr>
                        <td>
                            <div>
                                <img src="385_sunset.png" alt="a sunset with a gecko shaped border"/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="660_pythagorean_triple.png" alt="many geckos forming a triangle"/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="175_PHYSICAL_FORM.jpg" alt="a picture of a 3D printed gecko"/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="304_youexpectedthisimagetomakesenseright.png"
                                     alt="a random mismash of geckos"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Resembles a gecko, and has a cool sunset.
                        </td>
                        <td>
                            Constructed using many existing geckos.
                        </td>
                        <td>
                            Resembles a gecko despite being in another plane of existence.
                        </td>
                        <td>
                            Constructed using an existing gecko.
                        </td>
                    </tr>
                </table>

                <p>bad examples:</p>
                <table>
                    <tr>
                        <td>
                            <div>
                                <img src="lemonthink.png" alt="a picture of a lemon thinking"/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="anti-example 1.png" alt="a 512x512 image with the letter 'E' on it"/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="gecc.png" alt="a real gecko"/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="Group 10.png" alt="example image not shown"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Does not resemble a gecko, nor is it assembled from an existing gecko.
                        </td>
                        <td>
                            Whilst you could argue that this was created from the original gecko image, it does not
                            contain any part of the original, nor does it resemble a gecko.
                        </td>
                        <td>
                            Yes, it is a gecko. Yes, the gecko is very cool. But not the type of gecko {"we're"} looking
                            for. (However, adding a gecko-shaped border would qualify it)
                        </td>
                        <td>
                            Anything that might upset others or NSFW. Use your common sense.
                        </td>
                    </tr>
                </table>

                <h2>Other Info</h2>
                <p>
                    Geckos whose number is preceded by a {"'b'"} are alternate geckos. Usually this is an uncropped or
                    variation of {"it's"} non-alternate counterpart. They are not required and are optional.
                    <br/><br/>
                    A year has 367 geckos (reminder that geckos are 0-indexed!). The last few geckos of a year are
                    usually reserved along with geckos which are multiples of 100. If you would like a specific number
                    for your gecko, please specify in the file name.
                </p>

            </div>

            <div className="subtitle">
                <h1>Understood?<br/><a href="https://forms.gle/CeNkM2aHcdrcidvX6">Submit Here</a></h1>
            </div>
        </>
    )
}