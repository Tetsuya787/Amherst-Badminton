import React, { useEffect, useState } from "react";
import "./Gallery.css";

const groupPhotoModules = import.meta.glob(
  "./assets/AmherstInvitational2025/optimized/group/*.jpg",
  { eager: true, import: "default" }
);
const actionPhotoModules = import.meta.glob(
  "./assets/AmherstInvitational2025/optimized/player/*.jpg",
  { eager: true, import: "default" }
);

const teamPhotoLabels = {
  "amherst-college": "Amherst College",
  "boston-college": "Boston College",
  brown: "Brown University",
  dartmouth: "Dartmouth College",
  "team-2": "All Teams",
  umass: "UMass Amherst",
  williams: "Williams College",
  yale: "Yale University",
};

const slugFromPath = (path) => path.split("/").pop().replace(/\.[^/.]+$/, "");

const teamPhotos = Object.keys(groupPhotoModules)
  .sort()
  .map((path) => {
    const slug = slugFromPath(path);
    return { src: groupPhotoModules[path], caption: teamPhotoLabels[slug] || slug };
  });

const actionPhotos = Object.keys(actionPhotoModules)
  .sort()
  .map((path) => ({
    src: actionPhotoModules[path],
    caption: "Amherst Badminton Invitational 2025",
  }));

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // { photos, index }

  const openLightbox = (photos, index) => setLightbox({ photos, index });
  const closeLightbox = () => setLightbox(null);
  const showRelative = (delta) => {
    setLightbox((current) => {
      if (!current) return current;
      const total = current.photos.length;
      const index = (current.index + delta + total) % total;
      return { ...current, index };
    });
  };

  useEffect(() => {
    if (!lightbox) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showRelative(-1);
      if (e.key === "ArrowRight") showRelative(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <p className="gallery-intro">
        Highlights from the 2025 Amherst Badminton Invitational — team photos
        and action shots from the courts.
      </p>

      <h3 className="gallery-subheading">Team Photos</h3>
      <div className="gallery-grid gallery-grid-teams">
        {teamPhotos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className="gallery-item"
            onClick={() => openLightbox(teamPhotos, index)}
          >
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            <span className="gallery-caption">{photo.caption}</span>
          </button>
        ))}
      </div>

      <h3 className="gallery-subheading">Action Shots</h3>
      <div className="gallery-grid gallery-grid-action">
        {actionPhotos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className="gallery-item"
            onClick={() => openLightbox(actionPhotos, index)}
          >
            <img src={photo.src} alt={photo.caption} loading="lazy" />
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            type="button"
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              showRelative(-1);
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <img
            src={lightbox.photos[lightbox.index].src}
            alt={lightbox.photos[lightbox.index].caption}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              showRelative(1);
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
