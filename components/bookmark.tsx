import utilStyles from "../styles/utils.module.css";

export default function bookmark({folder, bookmarkItems}: {folder:string, bookmarkItems:any}) {
    return (
      <div className={utilStyles.folder}>
          <h3>{folder}</h3>
          <ul className={utilStyles.list}>
              {bookmarkItems.map(({title, url}:{title:string, url:string}) =>
                <li className={utilStyles.listItem}><a href={url}>{title}</a></li>
              )}
          </ul>
      </div>
    );
}