import Image from 'next/image';
import {GeckoImage as GeckoImageProps} from '../util/driveUtils';


export default function GeckoImage(props: GeckoImageProps) {
    const {name, number, author, created, url, driveUrl} = props;

    return (
        <a href={driveUrl} target="_blank" rel="noopener noreferrer" className="m-4">
            <div className="relative border border-black border-opacity-50 hover:border-opacity-100 max-w-md rounded">
                <Image layout="fill" src={url} alt={name} />
                <h2 className="text-lg break-words">{name}</h2>
                <p>{author} - {created}</p>
            </div>
        </a>
    )
}
