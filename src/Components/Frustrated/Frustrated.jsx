import React from 'react';
import css from '../Frustrated/Frustrated.module.css';
import frustrate from '../../Resources/landing page element.avif';
import help from '../../Resources/100_000.avif';

const Frustrated = () => {
  return (
    <>
    <div className={css.frustratedContainer}>
        <div className={css.frustratedImage}>
            <img src={frustrate} alt='frustratedImage'/>
        </div>
        <div className={css.help}>
           <img src={help} alt='help text'/>
        </div>
    </div>
    </>
  )
}

export default Frustrated