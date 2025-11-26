"use client";

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Video, Camera, Send } from 'lucide-react';
import { Testimonial } from '@/app/_shared/types';
import { TESTIMONIALS } from '@/app/_shared/constants';

const TestimonialChatCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="w-[300px] h-[550px] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral-800 flex flex-col shrink-0 select-none">
      <div className="bg-neutral-900 text-background p-3 flex items-center justify-between border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <ChevronLeft size={20} className="text-background" />
          <img src={testimonial.avatar} alt={testimonial.author} className="w-8 h-8 rounded-full border border-neutral-600" />
          <div className="flex flex-col">
            <span className="text-xs font-bold leading-none">{testimonial.author}</span>
            <span className="text-[10px] text-neutral-400 leading-none mt-0.5">{testimonial.handle}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-neutral-300">
          <Phone size={18} />
          <Video size={18} />
        </div>
      </div>

      <div className="flex-1 bg-neutral-900 p-3 overflow-y-auto scrollbar-hide flex flex-col gap-3">
        <div className="text-center text-[10px] text-neutral-500 font-medium py-2">
          {testimonial.time}
        </div>

        {testimonial.messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.isUser ? 'items-start' : 'items-end'}`}>
            {msg.image && (
              <div className={`mb-1 overflow-hidden rounded-2xl max-w-[70%] border border-neutral-800 ${msg.isUser ? 'rounded-tl-none' : 'rounded-tr-none'}`}>
                <img src={msg.image} alt="Attachment" className="w-full h-auto pointer-events-none" />
              </div>
            )}

            {msg.text && (
              <div 
                className={`px-3 py-2 rounded-2xl max-w-[80%] text-xs leading-relaxed
                ${msg.isUser 
                  ? 'bg-neutral-800 text-neutral-100 rounded-tl-none' 
                  : 'bg-primary-600 text-background rounded-tr-none'}`
                }
              >
                {msg.text}
              </div>
            )}
          </div>
        ))}
        <div className="mt-auto text-right text-[10px] text-neutral-600 font-medium">Seen</div>
      </div>
      
      <div className="p-3 bg-neutral-900 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-primary">
          <Camera size={16} />
        </div>
        <div className="flex-1 h-9 bg-neutral-800 rounded-full border border-neutral-700 flex items-center px-3 text-neutral-500 text-xs">
          Message...
        </div>
        <div className="text-neutral-500">
          <Send size={18}/>
        </div>
      </div>
    </div>
  );
};

export const TestimonialSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const autoScroll = () => {
      if (scrollRef.current && !isDragging && !isHovering) {
        const { scrollLeft: currentScrollLeft, scrollWidth } = scrollRef.current;
        const maxScroll = scrollWidth / 2;
        
        if (currentScrollLeft >= maxScroll) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 0.8;
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, isHovering]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovering(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="relative group px-4 md:px-12">
      <button 
        onClick={() => scroll('left')} 
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/90 shadow-xl rounded-full items-center justify-center text-neutral-800 hover:text-primary transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      
      <div 
        ref={scrollRef}
        className="flex gap-6 md:gap-8 overflow-x-auto pb-12 pt-4 scrollbar-hide"
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          scrollBehavior: 'auto'
        }}
        onMouseDown={handleMouseDown}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
          <div key={`${t.id}-${index}`} className="snap-start shrink-0 transition-transform duration-300 hover:scale-[1.02]">
            <TestimonialChatCard testimonial={t} />
          </div>
        ))}
      </div>

      <button 
        onClick={() => scroll('right')} 
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/90 shadow-xl rounded-full items-center justify-center text-neutral-800 hover:text-primary transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};