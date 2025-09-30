// src/app/page.tsx
'use client';

import Image from 'next/image';
import Slider from 'react-slick';

// Interface
interface SliderItem {
  id: number;
  imageSrc: string;
  headline: string;
  description: string;
  link: string;
}

// Data
const mediaCoverageData: SliderItem[] = [
  {
    id: 1,
    imageSrc: 'https://sowash.pk/wp-content/uploads/2023/10/banner-1.jpg',
    headline: 'SkyElectric and SoWash Partner...',
    description:
      'SkyElectric and SoWash Partner to Deliver Premium Solar Maintenance Services Across Pakistan.',
    link: 'https://sowash.pk/link-1',
  },
  {
    id: 2,
    imageSrc: 'https://sowash.pk/wp-content/uploads/2023/10/banner-2.jpg',
    headline: 'SoWash, Pakistan’s first company...',
    description:
      'SoWash, Pakistan’s first company delivering unmatched professionalism and expertise in Solar Panel cleaning.',
    link: 'https://sowash.pk/link-2',
  },
  {
    id: 3,
    imageSrc: 'https://sowash.pk/wp-content/uploads/2023/10/banner-3.jpg',
    headline: 'Solar cleaning service claims 30% energy...',
    description:
      'Solar cleaning service launches in Pakistan and claims an increase upto 30% energy after using its service – SoWash',
    link: 'https://sowash.pk/link-3',
  },
  {
    id: 4,
    imageSrc: 'https://sowash.pk/wp-content/uploads/2023/10/banner-4.jpg',
    headline: 'First Professional Solar Cleaning Service...',
    description:
      'First Professional Solar Cleaning Service is now operational in Pakistan – SoWash',
    link: 'https://sowash.pk/link-4',
  },
];

// Card Component
const SliderCard: React.FC<{ item: SliderItem }> = ({ item }) => {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full h-full bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-300"
    >
      {/* Image */}
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

      {/* Text */}
      <div className="p-4 flex flex-col justify-start">
        <p className="text-sm font-semibold uppercase text-green-600 mb-1 line-clamp-2">
          {item.headline}
        </p>
        <p className="text-sm text-gray-700 line-clamp-3">
          {item.description}
        </p>
      </div>
    </a>
  );
};

// Main Component
export default function MediaCoverageSection() {
 const sliderSettings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3, // default (desktop)
  dots: true,
  speed: 500,
 // default (desktop)
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024, // tablet
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      },
    },
    {
      breakpoint: 1024, // mobile
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false, // ✅ remove extra space
      },
    },
  ],
};


  return (
    <section className="bg-white py-12 w-full">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-light text-sky-400">
          Media Coverage
        </h2>
        <div className="mt-2 mx-auto h-1 w-20 bg-green-500 rounded"></div>
      </div>

      {/* Slider */}
     <div className="w-full max-w-7xl mx-auto px-4">
  <Slider {...sliderSettings} className="w-full">
    {mediaCoverageData.map((item) => (
      <div key={item.id} className="!flex !h-full px-2 w-full">
        <SliderCard item={item} />
      </div>
    ))}
  </Slider>
</div>

    </section>
  );
}
