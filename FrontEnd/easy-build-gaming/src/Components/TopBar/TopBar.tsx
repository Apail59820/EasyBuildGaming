import styles from './TopBar.module.scss'
import Link from "next/link";
import SearchBox from "@/Components/SearchBox/SearchBox";

const TopBar = () => {

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
                    <Link href={'/cart'} className={styles.shoppingCart}>
                        <i className="fas fa-shopping-cart fa-lg" style={{color: '#002559'}}></i>
                    </Link>
                </div>

            </nav>
        </div>
    );
}

export default TopBar;