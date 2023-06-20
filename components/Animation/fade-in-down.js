import React from 'react';

function FadeInDown(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fadeInDown ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
export default FadeInDown;