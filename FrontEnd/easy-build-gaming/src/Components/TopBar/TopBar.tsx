import styles from './TopBar.module.scss'
import Link from "next/link";
import SearchBox from "../SearchBox/SearchBox";
import {Dropdown} from "antd";

const UserDropdownItems = [
{key: '1', label: (<b>Mon profil</b>),},
{key: '2', label: (<b>Se déconnecter</b>), danger: true}
];

const CartDropdownItems = [
    {key: '1', label: (<b>Mon panier</b>),},
    {key: '2', label: (<b>Mes commandes</b>)}
];

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

                <Link href={'/my-profile'} className={`${styles.userProfile} ${styles.iconContainer}`}>
                    <Dropdown menu={{items: UserDropdownItems}} arrow={true} placement={"topLeft"}>
                        <i className="fas fa-user fa-lg iconContainer"></i>
                    </Dropdown>
                </Link>


                <Link href={'/cart'} className={`${styles.shoppingCart} ${styles.iconContainer}`}>
                    <Dropdown menu={{items: CartDropdownItems}} arrow={true} placement={"topRight"}>
                        <i className="fas fa-shopping-cart fa-lg"></i>
                    </Dropdown>
                </Link>

                </div>
            </nav>
        </div>
    );
}

export default TopBar;