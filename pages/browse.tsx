import {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import {listAllAsGeckoImages} from '../util/driveUtils';


export default function Browse(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Browse | GeckoImages</title>
            </Head>

            <div>
                {props.geckos!.map(x => <img key={x.number} alt={x.name} src={x.url}/>)}
            </div>
        </>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const geckos = await listAllAsGeckoImages();

    return {
        props: {geckos}
    }
}
