import { useState } from 'react';
import LightGallery from 'lightgallery/react';
import './Gallery.css'
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { Container } from 'react-bootstrap';

export function Gallery() {


const imagesPerGroup = 9;
const totalImages = 12; // Cambia esto según el número total de imágenes

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * imagesPerGroup;

  const images = [];
  for (let i = startIndex + 1; i <= startIndex + imagesPerGroup; i++) {
    if (i <= totalImages) {
      images.push({
        src: `public/img/gallery/itm_${i}.webp`,
        thumb: `public/img/gallery/itm_${i}.webp`,
      });
    }
  }

  const totalPages = Math.ceil(totalImages / imagesPerGroup);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Container className='' id='gallery'>
        <div><h2 className='text-center p-5' style={{ color: '#052672' }}>GALERIA FUTURISTIC MINDS</h2></div>
        <div>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            {images.map((img, index) => {
              return (
                <div
                  key={index}
                  data-src={img.src}
                  data-sub-html=' '
                  className='row gallery-item'
                >
                  <img
                    src={img.src}
                    alt={`Imagen ${startIndex + index + 1}`}
                    className='col-sm-2 w-100 p-3'
                    loading='lazy'
                  />
                </div>
              )
            })}
          </LightGallery>
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <li
                  className={`page-item ${page === currentPage ? 'active' : ''}`}
                  key={page}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </>

    );

}
