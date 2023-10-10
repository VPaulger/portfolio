import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import acmpTorontoSlider from '../assets/acmpToronto/1.png';
import acuityPartnersSlider from '../assets/acuityPartners/1.png';
import mozaikGlobalSlider from '../assets/mozaikGlobal/1.png';
import quilHealthSlider from '../assets/quilHealth/1.webp';
import r10TechConferenceSlider from '../assets/r10TechConference/1.png';
import plannedParenthoodSlider from '../assets/plannedParenthood.png';
import leaNelsonSlider from '../assets/leaNelson.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import '../styles/experience.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const Experience = () => {
  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 700,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 1380,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 1440,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
    ],
  };
  const imageArray = (data) => {
    const imagePaths = [];
    Object.values(data).forEach(({ default: path }) => {
      const url = new URL(path, import.meta.url);
      const data = url.pathname;
      imagePaths.push(data);
    });
    return imagePaths;
  };
  const acmpToronto = imageArray(
    import.meta.glob('../assets/acmpToronto/*', { eager: true })
  );
  const quilHealth = imageArray(
    import.meta.glob('../assets/quilHealth/*', { eager: true })
  );
  const r10TechConference = imageArray(
    import.meta.glob('../assets/r10TechConference/*', { eager: true })
  );
  const mozaikGlobal = imageArray(
    import.meta.glob('../assets/mozaikGlobal/*', { eager: true })
  );
  const acuityPartners = imageArray(
    import.meta.glob('../assets/acuityPartners/*', { eager: true })
  );

  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [images, setImages] = useState([]);
  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;
  const openLightbox = (selectedImageArray) => {
    setImages(selectedImageArray);
    setLightboxOpen(true);
  };
  const handleClose = () => {
    setImages([]);
    setIndex(0);
    setLightboxOpen(false);
  };
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className='experience_sliderContainer'>
      {lightboxOpen && (
        <Lightbox
          mainSrc={currentImage}
          mainSrcThumbnail={currentImage}
          nextSrc={nextImage}
          nextSrcThumbnail={nextImage}
          prevSrc={prevImage}
          prevSrcThumbnail={prevImage}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
      <Slider {...settings}>
        <div className='experience_Block'>
          <div
            className='experience_BlockBox'
            onClick={() => openLightbox(quilHealth)}
          >
            <div className='experience_BlockBox_img'>
              <img src={quilHealthSlider} />
            </div>
            <h3>Quil Health</h3>
            <p>React Web, Android & iOS App</p>
          </div>
        </div>
        <div className='experience_Block'>
          <div
            className='experience_BlockBox'
            onClick={() => openLightbox(mozaikGlobal)}
          >
            <div className='experience_BlockBox_img'>
              <img src={mozaikGlobalSlider} />
            </div>
            <h3>Mozaik Global</h3>
            <p>React Native iOS App</p>
          </div>
        </div>
        <div className='experience_Block'>
          <div
            className='experience_BlockBox'
            onClick={() => openLightbox(acmpToronto)}
          >
            <div className='experience_BlockBox_img full-width'>
              <img src={acmpTorontoSlider} />
            </div>
            <h3>ACMP Toronto</h3>
            <p>Custom WordPress Theme</p>
          </div>
        </div>
        <div className='experience_Block'>
          <a
            className='experience_BlockBox'
            href='http://www.ppt.on.ca/'
            target='_blank'
          >
            <div className='experience_BlockBox_img full-width'>
              <img src={plannedParenthoodSlider} />
            </div>
            <h3>Planned Parenthood</h3>
            <p>Custom WordPress Theme</p>
          </a>
        </div>
        <div className='experience_Block'>
          <div
            className='experience_BlockBox'
            onClick={() => openLightbox(acuityPartners)}
          >
            <div className='experience_BlockBox_img'>
              <img src={acuityPartnersSlider} />
            </div>
            <h3>Acuity Partners</h3>
            <p>Custom WordPress Theme</p>
          </div>
        </div>
        <div className='experience_Block'>
          <div
            className='experience_BlockBox'
            onClick={() => openLightbox(r10TechConference)}
          >
            <div className='experience_BlockBox_img'>
              <img src={r10TechConferenceSlider} />
            </div>
            <h3>R10 Tech Conference</h3>
            <p>React Native iOS App</p>
          </div>
        </div>
        <div className='experience_Block'>
          <a
            className='experience_BlockBox'
            href='http://leanelson.com/'
            target='_blank'
          >
            <div className='experience_BlockBox_img full-width'>
              <img src={leaNelsonSlider} />
            </div>
            <h3>Lea Nelson</h3>
            <p>Wordpress Website</p>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Experience;
