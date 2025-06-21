'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HologramIconProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function HologramIcon({ children, className = '', onClick }: HologramIconProps) {
  return (
    <motion.div
      className={`relative rounded-full overflow-hidden group ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* メインのホログラム背景 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-hologram-rotate" />
      
      {/* 追加の光のレイヤー */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-cyan-500/40 animate-hologram-rotate" />
      
      {/* パーティクルエフェクト */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-0.5 h-0.5 bg-white/80 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-cyan-400/90 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-pink-400/90 rounded-full animate-pulse" style={{ animationDelay: '1.4s' }} />
      </div>
      
      {/* 内側のグラデーションオーバーレイ */}
      <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white/10 via-transparent to-black/40 backdrop-blur-[1px]" />
      
      {/* アイコンコンテンツ */}
      <div className="relative z-10 flex items-center justify-center h-full animate-rocket-fly">
        <div className="text-white drop-shadow-lg relative z-20">
          {children}
        </div>
      </div>
      
      {/* ホバー時の追加エフェクト */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-hologram-hover" />
      
      {/* 境界線の光効果 */}
      <div className="absolute inset-0 rounded-full border border-white/30 group-hover:border-white/50 transition-colors duration-300" />
      
      {/* ロケット特有の光の尾 */}
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-t from-orange-400 via-yellow-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-rocket-trail" />
      
      {/* 追加の光の尾（複数レイヤー） */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-t from-red-400 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300 animate-rocket-trail" style={{ animationDelay: '0.3s' }} />
      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-t from-pink-400 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-rocket-trail" style={{ animationDelay: '0.6s' }} />
    </motion.div>
  );
} 