import styles from './TopBar.module.scss'
import Link from "next/link";
import SearchBox from "../SearchBox/SearchBox";

import { message } from "antd";
import {useEffect} from "react";

const TopBar = () => {

    useEffect(() => {
        message.info("yoo");
    }, []);

    return(
        <div className={styles.topBarContainer}>
            <nav className={styles.navigation}>
                <Link href={'/'} style={{textDecoration: 'none'}}>
                    <div className={styles.title}>
                        EasyBuild
                    </div>
                </Link>

                <div className={styles.searchBoxContainer}>
                    <SearchBox />
                </div>

                <div className={styles.rightSide}>
                    <Link href={'/my-profile'} className={`${styles.userProfile} ${styles.iconContainer}`}>
                        <i className="fas fa-user fa-lg iconContainer"></i>
                    </Link>

                    <Link href={'/cart'} className={`${styles.shoppingCart} ${styles.iconContainer}`}>
                        <i className="fas fa-shopping-cart fa-lg"></i>
                    </Link>

                </div>
            </nav>
        </div>
    );
}

export default TopBar;