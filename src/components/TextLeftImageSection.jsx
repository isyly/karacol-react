
const TextLeftImageSection = ({ title, text, imageSrc, imageAlt }) => {
  return (
    <section className="text-image-section container">
      <div className=" text-image-section__content">
        <h2 className="text-image-section__title">{title}</h2>
        <p className="text-image-section__text">{text}</p>
      </div>
      <div className="text-image-section__image-wrapper">
        <img className="text-image-section__image" src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  );
};

export default TextLeftImageSection;
