function TestimonialCard({ item }) {
  return (
    <article className="surface-card">
      <div className="surface-card__body">
        <h3>{item.name}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  );
}

export default TestimonialCard;
