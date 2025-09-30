// src/app/page.tsx
'use client'; 

import Image from 'next/image';
import Slider from 'react-slick';

interface SliderItem {
  id: number;
  imageSrc: string;
  headline: string;
  description: string;
  link: string;
}

const mediaCoverageData: SliderItem[] = [
  {
    id: 1,
    imageSrc: 'https://sowash.pk/wp-content/uploads/2023/10/banner-1.jpg',
    headline: 'SkyElectric and SoWash Partner...',
    description: 'SkyElectric and SoWash Partner to Deliver Premium Solar Maintenance Services Across Pakistan.',
    link: 'https://sowash.pk/link-1',
  },
  {
    id: 2,
    imageSrc: 'https://sowash.pk/wp-content/uploads/2023/10/banner-2.jpg',
    headline: 'SoWash, Pakistan’s first company...',
    description: 'SoWash, Pakistan’s first company delivering unmatched professionalism and expertise in Solar Panel cleaning.',
    link: 'https://sowash.pk/link-2',
  },
  {
    id: 3,
    imageSrc: 'https://sowash.pk/wp-content/uploads/2023/10/banner-3.jpg',
    headline: 'Solar cleaning service claims 30% energy...',
    description: 'Solar cleaning service launches in Pakistan and claims an increase upto 30% energy after using its service – SoWash',
    link: 'https://sowash.pk/link-3',
  },
  {
    id: 4,
    imageSrc: 'https://sowash.pk/wp-content/uploads/2023/10/banner-4.jpg',
    headline: 'First Professional Solar Cleaning Service...',
    description: 'First Professional Solar Cleaning Service is now operational in Pakistan – SoWash',
    link: 'https://sowash.pk/link-4',
  },
];

const SliderCard: React.FC<{ item: SliderItem }> = ({ item }) => {
  return (
    <a 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group block w-full bg-white shadow-md rounded-lg overflow-hidden duration-300 h-full"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-video bg-gray-100">
        <Image 
          src={item.imageSrc} 
          alt={item.description.substring(0, 50)} 
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-105"
          unoptimized 
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-start"> 
        <p className="text-xs font-semibold uppercase text-green-600 mb-1 line-clamp-2">
          {item.headline}
        </p>
        <p className="text-sm text-gray-700 line-clamp-3">
          {item.description}
        </p>
      </div>
    </a>
  );
};

export default function MediaCoverageSection() {
  const sliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: true, 
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true } 
      },
      { 
        breakpoint: 640, 
        settings: { 
          slidesToShow: 1, 
          slidesToScroll: 1, 
          arrows: false, 
          dots: true, 
          centerMode: true, 
          centerPadding: "0px" 
        } 
      },
    ],
  };

  return (
    <main className="bg-white py-10">
      {/* Media Coverage Heading */}
      <div className="text-center py-8">
        <h2 className="text-4xl font-light text-sky-400">
          Media Coverage
        </h2>
        <div className="mt-2 mx-auto h-1 w-20 bg-green-500 rounded"></div>
      </div>
      
      {/* Slider Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {mediaCoverageData.map((item) => (
              <div key={item.id} className="px-3 py-6"> 
                <SliderCard item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
}
