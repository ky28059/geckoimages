import {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import GeckoImage from '../components/GeckoImage';
import {listAllAsGeckoImages} from '../util/driveUtils';


export default function Browse(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Browse | GeckoImages</title>
            </Head>

            <div className="flex flex-wrap">
                {props.geckos!.map(x => <GeckoImage key={x.name} {...x} />)}
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
