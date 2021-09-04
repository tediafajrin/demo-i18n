import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/Layout.module.css'

const Layout: NextPage = ({ children }) => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/" locale="en">
                            <a>English</a>
                        </Link>

                        <Link href="/" locale="id">
                            <a>Indonesia</a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <hr />

            {children}
        </div>
    )
}

export default Layout