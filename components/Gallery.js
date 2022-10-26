import styles from '../styles/Gallery.module.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [
    "https://picsum.photos/2007/2070",
    "https://picsum.photos/2004/2060",
    "https://picsum.photos/2009/3050",
    "https://picsum.photos/2004/4040",
    "https://picsum.photos/2003/3020",
    "https://picsum.photos/2050/2011",
    "https://picsum.photos/3030/1001",
]

export default function Gallery() {
    return (
        <div className={styles.gallery}>
            <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
            <Masonry gutter="30px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                        alt=""
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    </div>
    )
}