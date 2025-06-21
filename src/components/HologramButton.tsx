'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HologramButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function HologramButton({ children, className = '', onClick }: HologramButtonProps) {
  // サイズに基づいてテキストサイズを決定
  const getTextSize = () => {
    if (className.includes('w-[120px]')) return 'text-xs';
    if (className.includes('w-[150px]')) return 'text-sm';
    return 'text-lg';
  };

  return (
    <motion.button
      className={`relative rounded-full overflow-hidden group ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* メインのホログラム背景 */}
      <div className="absolute inset-0 hologram-button" />
      
      {/* 追加の光のレイヤー */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 animate-hologram-rotate" />
      
      {/* パーティクルエフェクト */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-cyan-400/80 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-pink-400/80 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* 内側のグラデーションオーバーレイ */}
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/5 via-transparent to-black/30 backdrop-blur-[1px]" />
      
      {/* テキストコンテンツ */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <span className={`text-white font-bold tracking-wide drop-shadow-lg ${getTextSize()} relative z-20`}>
          {children}
        </span>
      </div>
      
      {/* ホバー時の追加エフェクト */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-hologram-hover" />
      
      {/* 境界線の光効果 */}
      <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
    </motion.button>
  );
} 