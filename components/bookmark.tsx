import utilStyles from "../styles/utils.module.css";

export default function bookmark({title, url}: {title:string, url:string}) {
    return url.length != 0 ?
        (<li className={utilStyles.listItem}>
            <a href={url}>{title}</a>
        </li>) :
        (<li>{title}</li>);

}