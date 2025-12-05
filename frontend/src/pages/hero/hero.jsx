import { useEffect, useState } from "react";
import "./hero.css";
export default function Hero() {
  {
    /* 
        <section  className='hero'>
            <h1 data-text = "Let's_bring_your_vision_to_life..!">
                Let's bring your vision to life
            </h1>
        </section>*/
  }

  const displayTexts = ["Explore_Innovation..!", "Unleash_Potential..!",'Logic_Unlocked..!',"Next_Shift..!"];
  const [currIndx, setCurrIndx] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      if (currIndx == displayTexts.length - 1) {
        setCurrIndx(0);
      } else {
        setCurrIndx((prev) => prev + (1 % displayTexts.length));
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [currIndx]);

  return (
    <section className="hero">
      <h1 data-text={`${displayTexts[currIndx]}`}>{displayTexts[currIndx]}</h1>
    </section>
  );
}
