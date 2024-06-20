import React, { useRef, useEffect } from 'react';

const IframeComponent = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const frame = iframeRef.current;

    function loadHandler() {
      if (frame.contentDocument) {
        frame.contentDocument.addEventListener('click', e => {
          console.log('clicked', e.target);
        });
      }
    }

    frame.addEventListener('load', loadHandler);

    return () => {
      frame.removeEventListener('load', loadHandler);
    };
  }, []);

  return (
    <div className="flex justify-center bg-black-87 h-screen">
      <iframe
        ref={iframeRef}
        data-id="nbi-widget"
        src="https://bookings.nowbookit.com/?accountid=01ef376f-9a34-42b0-a930-87a37b427ef2&venueid=12083&theme=light&colors=hex,0d5302&font=Barlow"
        width="800"
        height="600"
        style={{ border: 'none' }}
      ></iframe>
      <script src="https://plugins.nowbookit.com/iframe-resizer-build/bundle.js"></script>
    </div>
  );
};

export default IframeComponent;