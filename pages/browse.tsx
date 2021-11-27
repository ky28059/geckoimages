import {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import Head from 'next/head';


type Gecko = {
    name: string, number: string, url: string,
    author: string, created: string, driveUrl: string
}
export default function Browse(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Browse | GeckoImages</title>
            </Head>

            <div>
                {props.geckos.map(x => <p key={x.number}>{x.name}</p>)}
            </div>
        </>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const geckos: Gecko[] = await (await fetch('https://geckoimages.ddns.net/api')).json();

    return {
        props: {geckos}
    }
}
