import styles from './SearchBox.module.scss'

const SearchBox = () => {
    return (
        <div className={styles.searchContainer}>
            <input type="text" name="search" placeholder="Rechercher..." className={styles.searchInput} />
                <a href="#" className={styles.searchBtn}>
                    <i className={'fas fa-search'}></i>
                </a>
        </div>
    );
}

export default SearchBox;