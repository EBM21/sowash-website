// src/app/page.tsx
'use client'; 

import Image from 'next/image';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';

// NOTE: Aapko yeh CSS imports 'globals.css' mein karne honge
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// 1. Data Structure (Interface)
interface TestimonialItem {
  id: number;
  name: string;
  designation: string;
  text: string;
  avatarSrc: string; 
}

// 2. Data 
const testimonialData: TestimonialItem[] = [
  {
    id: 1,
    name: 'Tariq Mehmood',
    designation: 'Solar Plant Owner, Lahore',
    text: "SoWash ki professional service ne mere solar panel ki efficiency waqai barha di. Pehle lagta tha paani se saaf ho jayenge, lekin inki cleaning ke baad output mein faraq saaf nazar aaya. Highly recommend!",
    avatarSrc: 'https://randomuser.me/api/portraits/men/32.jpg', // Dummy Image 1
  },
  {
    id: 2,
    name: 'Ayesha Khan',
    designation: 'Home User, Karachi',
    text: "Mera roof-top solar system ab pehle se zyada bijli bana raha hai. SoWash ki team bohat time-efficient aur expert hai. Har 3 mahine baad inhi se service leti hoon. Behtareen!",
    avatarSrc: 'https://randomuser.me/api/portraits/women/44.jpg', // Dummy Image 2
  },
  {
    id: 3,
    name: 'Fahad Riaz',
    designation: 'Industrial Client, Islamabad',
    text: "Humari large-scale solar farm ke liye SoWash ki unmatched professionalism aur expertise zaroori thi. Inki advanced techniques ne humari maintenance cost kam ki aur energy gain behtar kiya.",
    avatarSrc: 'https://randomuser.me/api/portraits/men/19.jpg', // Dummy Image 3
  },
];


// 3. Main Component 
export default function TestimonialSliderSection() {
  const [nav1, setNav1] = useState<Slider | null>(null); 
  const [nav2, setNav2] = useState<Slider | null>(null); 
  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);
  
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);


  // Settings for the main testimonial text slider (Nav1)
  const textSliderSettings = {
    // === AUTO-PLAY PROPERTIES ===
    infinite: true, 
    autoplay: true, 
    autoplaySpeed: 4000, 
    // =============================
    asNavFor: nav2!, 
    ref: (slider: Slider) => setSlider1(slider), 
    arrows: false,
    fade: true, 
    speed: 600, 
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true, 
  };

  // Settings for the thumbnail image slider (Nav2)
  const thumbSliderSettings = {
    asNavFor: nav1!, 
    ref: (slider: Slider) => setSlider2(slider), 
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: '0px',
    focusOnSelect: true,
    arrows: false,
    className: 'slick-thumbs', 
  };

  return (
    <main className="min-h-screen bg-white py-5">
      
      {/* Testimonials Heading (Shadow Removed) */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-sky-400">
          Testimonials
        </h2>
        {/* Simple line, no shadow/hover effects */}
        <div className="mt-2 mx-auto h-1 w-20 bg-green-500 rounded"></div> 
        <p className="text-xl text-gray-500 mt-4 italic">
          Hear what our Customers say about us
        </p>
      </div>
      
      {/* 1. Main Testimonial Text Slider (Nav1) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Slider {...textSliderSettings}>
          {testimonialData.map((item) => (
            // === Simple CARD STRUCTURE (Shadows Removed) ===
            <div key={item.id} className="p-4 outline-none">
              <div 
                className="bg-gray-100 p-10 transition-all duration-700 transform hover:scale-[1.01] relative" // Shadow and hover shadow removed
                style={{ borderTop: '4px solid #38bdf8', border: '1px solid #e5e7eb' }} // Simple border added for definition
              >
                {/* Quote Icon */}
                <svg className="w-10 h-10 text-sky-400 absolute top-4 left-4 opacity-70" fill="currentColor" viewBox="0 0 30 30">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.548 1.109 23.974 1L23.974 1.258C17.653 1.258 15.017 5.093 15.017 10.609L15.017 18L14.017 18ZM0.017000000000001 18L0.017000000000001 10.609C0.017000000000001 4.905 3.548 1.109 9.974 1L9.974 1.258C3.653 1.258 1.017 5.093 1.017 10.609L1.017 18L0.017000000000001 18Z" />
                </svg>
                
                {/* Testimonial Text */}
                <p className="text-xl italic text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed text-center pt-6 pb-2">
                  {item.text}
                </p>

                {/* Separator */}
                <div className="w-16 h-1 bg-green-500 mx-auto my-4 rounded"></div>

                {/* User Details */}
                <div className="text-center">
                  <div className="font-bold text-lg text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-sm text-green-600">
                    {item.designation}
                  </div>
                </div>
                     {/* 2. Thumbnail Image Slider (Nav2 - Syncing Slider) */}
      <div className="mt-12 max-w-sm mx-auto">
        <Slider {...thumbSliderSettings}>
          {testimonialData.map((item) => (
            <div key={item.id} className="px-3 cursor-pointer">
              <div className="relative w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-transparent transition-all duration-300">
                <Image 
                  src={item.avatarSrc} 
                  alt={item.name} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="thumb-image rounded-full" 
                  unoptimized 
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

              </div>
              
            </div>
            // === END OF CARD STRUCTURE ===
            
          ))}
          
        </Slider>
      </div>

 
      
    </main>
  );
}