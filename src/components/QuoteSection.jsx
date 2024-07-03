import hojaizq from '/public/images/hojaizq.png';
import hojader from '/public/images/hojader.png';

const QuoteSection = ({ quote, author }) => {
  return (
    <div className="relative flex items-center justify-center h-1/3 min-h-1/3 bg-[#F7F7F7] p-4 mx-auto" style={{ minHeight: '33vh' }}>
      <div className="text-center mx-auto mt-16">
        <p className="px-0 md:text-2xl xl:text-3xl text-custom-green font-semibold md:px-80">
          {quote}
        </p>
        <p className="text-md md:text-lg xl:text-xl text-custom-green font-medium mt-4">
          {author}
        </p>
      </div>
    </div>
  );
};

export default QuoteSection;