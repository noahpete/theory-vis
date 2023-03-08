import { useEffect, useRef } from "react";
import "./styles.css";
import Typed from "typed.js";

const Quote = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        '"Every complex problem has a clear, simple and wrong solution."',
      ],
      typeSpeed: 40,
      showCursor: false,
    };

    Typed.current = new Typed(el.current, options);

    return () => {
      Typed.current.destroy();
    };
  }, []);

  return (
    <div className="theory__quote-wrapper">
      <div className="theory__quote">
        <span className="theory__quote-text" ref={el} />
        <p className="quote-author">— H.L. Mencken</p>
      </div>
    </div>
  );
};

export default Quote;
