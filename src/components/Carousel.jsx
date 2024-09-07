export default function Carousel({
  carouselData,
  selectedId,
  matches,
  children,
}) {
  return (
    <div className="carousel">
      {carouselData.map((item) => (
        <img
          key={item.id}
          className={`pic ${item.id === selectedId ? "showing" : ""}`}
          src={matches ? item.desktop : item.mobile}
          style={{ translate: `${-100 * selectedId}%` }}
          alt=""
        />
      ))}
      {children}
    </div>
  );
}
