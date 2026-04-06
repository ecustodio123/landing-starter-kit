import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useRef, useState } from "react";

function MainNavDropdown({ label, options }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutside = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className={`main-nav__item ${open ? "is-open" : ""}`} ref={wrapperRef}>
      <button className="main-nav__trigger" type="button" onClick={() => setOpen((prev) => !prev)}>
        {label}
        <KeyboardArrowDownIcon sx={{ fontSize: 14 }} />
      </button>
      {open ? (
        <div className="main-nav__menu" role="menu">
          {options.map((option) => (
            <button className="main-nav__option" type="button" key={option}>
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default MainNavDropdown;
