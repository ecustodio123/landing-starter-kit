import { useEffect, useMemo, useRef, useState } from "react";

function LoopCarousel({ items, renderItem, visibleItems = 4, autoplayMs = 2800 }) {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const dragThreshold = 45;

  const total = items.length;

  useEffect(() => {
    if (total <= 1 || isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setStartIndex((prev) => (prev + 1) % total);
    }, autoplayMs);

    return () => window.clearInterval(timer);
  }, [autoplayMs, isPaused, total]);

  const visible = useMemo(() => {
    if (!total) {
      return [];
    }

    return Array.from({ length: visibleItems }, (_, offset) => {
      const index = (startIndex + offset) % total;
      return { item: items[index], index: `${index}-${offset}-${startIndex}` };
    });
  }, [items, startIndex, total, visibleItems]);

  const movePrev = () => setStartIndex((prev) => (prev - 1 + total) % total);
  const moveNext = () => setStartIndex((prev) => (prev + 1) % total);

  const onMouseDown = (event) => {
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = event.clientX;
  };

  const onMouseMove = (event) => {
    if (!isDragging) {
      return;
    }

    const delta = event.clientX - startXRef.current;
    if (delta >= dragThreshold) {
      movePrev();
      startXRef.current = event.clientX;
    }
    if (delta <= -dragThreshold) {
      moveNext();
      startXRef.current = event.clientX;
    }
  };

  const onDragEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <div className={`loop-carousel ${isDragging ? "dragging" : ""}`.trim()}>
      <div
        className="loop-carousel__viewport"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        <div className="loop-carousel__track">{visible.map(({ item, index }) => renderItem(item, index))}</div>
      </div>
    </div>
  );
}

export default LoopCarousel;
