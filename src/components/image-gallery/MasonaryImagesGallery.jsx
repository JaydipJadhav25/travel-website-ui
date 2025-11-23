import galleryImages from './GalleryImages'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'

const MasonaryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
      <Masonry gutter='1rem'>
        {
          galleryImages.map((item,index) => (
            <img 
              className='masonry__img' // Ensure this CSS class doesn't override sizes
              src={item} 
              key={index} 
              alt={`Trip Gallery Image ${index + 1}`} // Added alt attribute
              style={{
                width:"100%",
                display:"block",
                borderRadius:"10px",
              }}
            /> // Self-closing tag is preferred for <img>
          ))
        }
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonaryImagesGallery