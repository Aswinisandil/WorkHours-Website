import React from "react";
import css from "../Question/Question.module.css";
import option1 from "../../Resources/who is this for OPTIONS A.avif";
import option2 from "../../Resources/who is this for OPTIONS B.avif";
import option3 from "../../Resources/who is this for OPTIONS C.avif";
import option4 from "../../Resources/who is this for OPTIONS D.avif";
import option5 from "../../Resources/who is this for OPTIONS E.avif";
import option6 from "../../Resources/who is this for OPTIONS F.avif";
import option7 from "../../Resources/who is this for OPTIONS G.avif";
import option8 from "../../Resources/who is this for OPTIONS H.avif";
import option9 from "../../Resources/who is this for OPTIONS I.avif";




const Question = () => {
  return (
    <div className={css.QuestionContainer}>
     
      <h1 className={css.heading}>WHO IS THIS FOR ?</h1>

      <div className={css.options}>
        <div className={css.option}>
          <img src={option1} alt="students"/>
        </div>

        <div className={css.option}>
          <img src={option2} alt="students"/>
        </div>
        <div className={css.option}>
          <img src={option3} alt="students"/>
        </div>
        <div className={css.option}>
          <img src={option4} alt="students"/>
        </div>
        <div className={css.option}>
          <img src={option5} alt="students"/>
        </div>
        <div className={css.option}>
          <img src={option6} alt="students"/>
        </div>
        <div className={css.option}>
          <img src={option7} alt="students"/>
        </div>
        <div className={css.option}>
          <img src={option8} alt="students"/>
        </div>
        <div className={css.option}>
          <img src={option9} alt="students"/>
        </div>

      </div>
      


    </div>
  );
};

export default Question;
