import { Container } from "react-bootstrap"
import { GalleryYear } from "./GalleryYear"
import './GalleryPage.css'
import { gallery2022, gallery2023 } from './constans_gallery'


export function GalleryPage (){
    return (
        <>
        <Container className='galleryPage mt-5'>
          <h1 className='gallery-title'>Galeria Futuristic Minds 2023</h1>
          <GalleryYear year={gallery2023} />
          <h1 className='gallery-title mt-5 pt-5'>Galeria Futuristic Minds 2022</h1>
          <GalleryYear year={gallery2022} />
        </Container>
      </> 
     )
}