import React from 'react';
import Image from 'next/image';


type GeckoExampleProps = { src: string, alt: string, children: React.ReactNode }
export default function GeckoExample(props: GeckoExampleProps) {
    const {src, alt, children} = props;

    return (
        <div className="bg-white rounded shadow-xl p-4">
            <Image src={src} width={512} height={512} alt={alt} />
            <p>{children}</p>
        </div>
    )
}
