const Pixel = {
    init: function() {
      !function(f,b,e,v,n,t,s) {
        if(f.fbq) return; n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq) f._fbq=n; n.push=n; n.loaded=true; n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=true;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '2247139852310760'); // Reemplaza con tu ID de Pixel
      fbq('track', 'PageView');
    }
  };
  
  export default Pixel;