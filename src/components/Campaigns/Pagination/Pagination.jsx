
//styles
import styles from './Pagination.module.css'

const Pagination = ({ campaigns, campaignsPerPage, paging, page }) => {
  //preparo los valores para los botones de navegación

  console.log('campaigns', campaigns)
  console.log('campaignsPerPage', campaignsPerPage)
  console.log('paging', paging)
  console.log('page', page)


  const pages = [];
  for (let i = 1; i <= Math.ceil(campaigns / campaignsPerPage); i++) {
    pages.push(i);
  }

  return (

      <div>
      <nav className={styles.pages}>
        <ul>
          {pages?.map((el, key) => (
            <button className={page -1 === key? styles.btnActive : styles.btnPasive} key={key} onClick={() => paging(el)}>
              {el}
            </button>
          ))}
        </ul>
      </nav>
    </div>

  );
};

export default Pagination;