import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function App() {
  const heading = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heading.current,
      { opacity: 0, y: 30 },  // start
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" } // end
    );
  }, []);

  return (
    <h1 ref={heading} style={{ textAlign: "center", marginTop: "50px" }}>
      Hello GSAP in React 🚀
    </h1>
  );
}
