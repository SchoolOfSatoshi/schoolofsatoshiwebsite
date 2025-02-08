'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const cardData = [
  {
    title: 'Blockchain Fundamentals',
    description: 'Comprehensive introduction to blockchain technology and core concepts.',
    icon: '🔗',
    color: 'bg-blue-50',
    difficulty: 'Beginner'
  },
  {
    title: 'Smart Contract Development',
    description: 'Advanced Solidity programming and contract deployment strategies.',
    icon: '📝',
    color: 'bg-green-50',
    difficulty: 'Intermediate'
  },
  {
    title: 'DeFi Ecosystem',
    description: 'Deep dive into decentralized finance protocols and mechanisms.',
    icon: '💰',
    color: 'bg-purple-50',
    difficulty: 'Advanced'
  }
];

const CardCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => setCurrentCard((prev) => (prev + 1) % cardData.length);
  const prevCard = () => setCurrentCard((prev) => (prev - 1 + cardData.length) % cardData.length);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative flex items-center justify-center">
        {cardData.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.8, x: index === currentCard ? 0 : 100 }}
            animate={{
              opacity: index === currentCard ? 1 : 0,
              scale: index === currentCard ? 1 : 0.8,
              x: index === currentCard ? 0 : 100
            }}
            transition={{ duration: 0.5 }}
            className={`absolute w-full max-w-md ${index !== currentCard ? 'z-0' : 'z-10'}`}
          >
            <div className={`
              ${card.color} 
              rounded-2xl 
              shadow-xl 
              p-6 
              transform 
              transition-all 
              duration-300 
              hover:scale-105 
              hover:shadow-2xl
            `}>
              <div className="flex justify-between items-center mb-4">
                <span className="text-4xl">{card.icon}</span>
                <span className="text-sm px-3 py-1 bg-white/50 rounded-full">
                  {card.difficulty}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                Learn More <ArrowUpRight className="ml-2" size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center space-x-4 mt-64">
        <button 
          onClick={prevCard}
          className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={nextCard}
          className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {cardData.map((_, index) => (
          <div 
            key={index}
            className={`
              w-2 h-2 rounded-full 
              ${index === currentCard ? 'bg-blue-600' : 'bg-gray-300'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
