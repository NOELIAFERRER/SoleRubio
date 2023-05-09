import style from './ImageCampaigns.module.css'
import Image from 'next/image'
import Link from 'next/link'



export function ImageCampaigns({data}) {

    return (
        <div className={style["container-main"]}>
            <h1>SHOOTING</h1>
            <div className={style["container-campaigns"]}>
                {data.map((el, i) => {
                    let separate = el.name.split(' ')
                    let complete = separate.join('_')
                    return(
                        <Link key={el} href={'/campaigns/' + complete} className={style.Link}>
                            <Image src={el.url} alt={el.name} className={style["img"]} width={300} height={300}/>
                            <p>{el.name}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

