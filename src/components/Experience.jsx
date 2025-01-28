import React, { useState } from 'react';
import acmpToronto from '../assets/acmpToronto/1.png';
import dealsy from '../assets/dealsy.png';
import acuityPartners from '../assets/acuityPartners/1.png';
import mozaikGlobal from '../assets/mozaikGlobal/1.png';
import quilHealth from '../assets/quilHealth/1.webp';
import r10TechConference from '../assets/r10TechConference/1.png';
import plannedParenthood from '../assets/plannedParenthood.png';
import intentSolutionsGroup from '../assets/intentSolutionsGroup.png';
import lexus from '../assets/lexus.jpeg';
import jdeesMarketGrill from '../assets/jdeesMarketGrill.png';
import leaNelson from '../assets/leaNelson.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import '../styles/experience.scss';

const Experience = () => {
  const imageArray = (data) => {
    const imagePaths = [];
    Object.values(data).forEach(({ default: path }) => {
      const url = new URL(path, import.meta.url);
      const data = url.pathname;
      imagePaths.push(data);
    });
    return imagePaths;
  };
  const acmpTorontoArray = imageArray(import.meta.glob('../assets/acmpToronto/*', { eager: true }));
  const quilHealthArray = imageArray(import.meta.glob('../assets/quilHealth/*', { eager: true }));
  const r10TechConferenceArray = imageArray(import.meta.glob('../assets/r10TechConference/*', { eager: true }));
  const acuityPartnersArray = imageArray(import.meta.glob('../assets/acuityPartners/*', { eager: true }));

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
    <div className='experience_container'>
      <div className='experience_containerWrap'>
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
        <a
          className='experience_block'
          href='https://www.dealsy.ca/'
          target='_blank'
        >
          <div className='experience_blockImg full-width'>
            <img src={dealsy} />
          </div>
          <h3>Dealsy</h3>
          <p>React, Android & iOS App</p>
        </a>
        <div
          className='experience_block'
          onClick={() => openLightbox(quilHealthArray)}
        >
          <div className='experience_blockImg'>
            <img src={quilHealth} />
          </div>
          <h3>Quil Health</h3>
          <p>React, Android & iOS App</p>
        </div>
        <a
          className='experience_block'
          href='https://www.mozaik.global/'
          target='_blank'
        >
          <div className='experience_blockImg'>
            <img src={mozaikGlobal} />
          </div>
          <h3>Mozaik Global</h3>
          <p>React Native iOS App</p>
        </a>
        <div
          className='experience_block'
          onClick={() => openLightbox(acmpTorontoArray)}
        >
          <div className='experience_blockImg full-width'>
            <img src={acmpToronto} />
          </div>
          <h3>ACMP Toronto</h3>
          <p>Custom WordPress Theme</p>
        </div>
        <div className='experience_block'>
          <div className='experience_blockImg full-width'>
            <img src={lexus} />
          </div>
          <h3>Lexus & Toyota</h3>
          <p>Web Ads, Interactive Displays & Email Templates</p>
        </div>
        <a
          className='experience_block'
          href='https://www.intentsg.com/'
          target='_blank'
        >
          <div className='experience_blockImg full-width'>
            <img src={intentSolutionsGroup} />
          </div>
          <h3>Intent Solutions Group</h3>
          <p>WordPress Website</p>
        </a>
        <a
          className='experience_block'
          href='https://jdeesmarketgrill.com/'
          target='_blank'
        >
          <div className='experience_blockImg'>
            <img src={jdeesMarketGrill} />
          </div>
          <h3>JDee's Market Grill</h3>
          <p>Website</p>
        </a>
        <a
          className='experience_block'
          href='http://www.ppt.on.ca/'
          target='_blank'
        >
          <div className='experience_blockImg full-width'>
            <img src={plannedParenthood} />
          </div>
          <h3>Planned Parenthood</h3>
          <p>Custom WordPress Theme</p>
        </a>
        <div
          className='experience_block'
          onClick={() => openLightbox(acuityPartnersArray)}
        >
          <div className='experience_blockImg'>
            <img src={acuityPartners} />
          </div>
          <h3>Acuity Partners</h3>
          <p>Custom WordPress Theme</p>
        </div>
        <a
          className='experience_block'
          href='http://leanelson.com/'
          target='_blank'
        >
          <div className='experience_blockImg full-width'>
            <img src={leaNelson} />
          </div>
          <h3>Lea Nelson</h3>
          <p>Wordpress Website</p>
        </a>
      </div>
    </div>
  );
};

export default Experience;
