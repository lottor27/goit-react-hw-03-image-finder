import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ arrayResults, onOpenModal, }) => {
    return (
        <ul className="ImageGallery" id='gallery'>
            {arrayResults.map(image => {
                return (
                    <ImageGalleryItem
                        key={image.id}
                        imageId={image.id}
                        imageWeb={image.webformatURL}
                        onOpenModal={onOpenModal}
                    />
                )
            })}
        </ul>
    )
}

export default ImageGallery;

ImageGallery.propTypes = {
    arrayResults: PropTypes.array,
    onOpenModal: PropTypes.func,
    key: PropTypes.number,
}
