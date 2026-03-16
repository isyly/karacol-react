

export default function FullImage({ imageSrc, imageAlt }) {
    return (

            <div className="container">
                <div className="full-image">
                    <div className="full-image--img">
                        <img src={imageSrc} alt={imageAlt} />
                    </div>
                </div>
            </div>
    );
}
