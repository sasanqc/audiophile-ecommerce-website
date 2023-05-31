import React from "react";

const Feature = () => {
  return (
    <section className="feature">
      <div className="feature__textBox">
        <h2 className="heading--2">
          Bringing you the <span>best</span> audio gear
        </h2>
        <p className="body">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="feature__imageContainer">
        <picture>
          <source
            srcset="/images/shared/mobile/image-best-gear.jpg"
            media="(max-width: 600px)"
          />
          <source
            srcset="/images/shared/tablet/image-best-gear.jpg"
            media="(max-width: 900px)"
          />
          <img
            className="feature__image"
            src="/images/shared/desktop/image-best-gear.jpg"
            alt="best audio gear"
          />
        </picture>
      </div>
    </section>
  );
};

export default React.memo(Feature);
