export default function Clicker({ nextImage, prevImage }) {
  return (
    <div className="clicker">
      <span className="prev" onClick={prevImage}>
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 0L1 12l12 12"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </span>
      <span className="next" onClick={nextImage}>
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0l12 12L1 24"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
}
