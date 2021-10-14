import s from './Search.module.css';

function Search() {
    return (
        <div className={s.search}>
            <input className={s.searchInput} placeholder="Search for anything…" type="text" />
        </div>
    );
  }
  
  export default Search;