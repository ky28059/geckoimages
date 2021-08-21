import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';


export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href="/"><a className={styles.except}><img src="./icon.png" alt="gecko"/></a></Link>
            <a href="https://drive.google.com/drive/folders/1Omwv0NNV0k_xlECZq3d4r0MbSbuHC_Og?usp=sharing">browse</a>
            <Link href="/submit"><a>submit</a></Link>
            <Link href="/#about"><a>about</a></Link>
        </div>
    )
}
