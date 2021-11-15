import Link from 'next/link'
import styles from '../styles/Navigator.module.css'
export default function Navigator({ destination, name, cor }) {
    return (
        <div>
            <Link href={destination}>
                <div className={styles.navigator} style={{
                    backgroundColor: cor ?? 'dodgerblue'
                }}>
                    {name}
                </div>
            </Link>
        </div>
    )
}