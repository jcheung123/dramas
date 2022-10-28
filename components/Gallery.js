import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import axios from 'axios';

export default function Gallery() {
    
    const [photos, setPhotos] = useState([])

    useEffect(() => {
      const url = "https://api.unsplash.com"
      const key = process.env.NEXT_PUBLIC_REACT_APP_API_KEY;
  
      axios.get(`${url}/photos/random?client_id=${key}&count=5`)
      .then(res => setPhotos([...photos, ...res.data]))
    },[])
  
    return (  
        <div className={styles.gallery}>
            <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
            <Masonry gutter="30px">
                {photos.map((photo) => (
                    <img
                        className={styles.image}
                        src={photo.urls.full}
                        key={photo.id}
                        alt="photo goes here"
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    </div>
    )
}