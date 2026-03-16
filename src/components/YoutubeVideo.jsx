import React from 'react';

const YoutubeVideo = ({ videoId }) => {
  return (
            <section className="presentation" id="presentation">
            <div className="container">

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&showinfo=0&controls=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />
    </div>
  </div>
</section>
  );
};

export default YoutubeVideo;
