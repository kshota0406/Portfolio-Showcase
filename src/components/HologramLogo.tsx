'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useTheme } from 'next-themes';

interface HologramLogoProps {
  className?: string;
  onClick?: () => void;
}

export default function HologramLogo({ className = '', onClick }: HologramLogoProps) {
  const { theme } = useTheme();
  
  // テーマに基づいて色を決定
  const getGradientColors = () => {
    if (theme === 'dark') {
      return {
        primary: 'from-purple-500 via-pink-500 to-cyan-500',
        secondary: 'from-purple-500/40 via-pink-500/40 to-cyan-500/40',
        tertiary: 'from-violet-500 via-fuchsia-500 to-cyan-500',
        quaternary: 'from-indigo-500 via-purple-500 to-pink-500',
        quinary: 'from-teal-400 via-blue-500 to-fuchsia-500',
        particle1: 'bg-white/80',
        particle2: 'bg-cyan-400/90',
        particle3: 'bg-pink-400/90',
        particle4: 'bg-yellow-400/90',
        particle5: 'bg-purple-400/90',
        particle6: 'bg-emerald-400/90',
        particle7: 'bg-blue-400/90',
        particle8: 'bg-red-400/90',
        trail1: 'from-orange-400 via-yellow-400 to-transparent',
        trail2: 'from-red-400 to-transparent',
        trail3: 'from-pink-400 to-transparent',
        trail4: 'from-purple-400 to-transparent',
        animation: 'animate-hologram-rotate-dark',
        textColor: 'text-white',
        iconColor: 'text-white',
        borderColor: 'border-white/40 group-hover:border-white/60',
        borderColor3D: 'border-white/20 group-hover:border-white/40',
      };
    } else {
      return {
        primary: 'from-yellow-300 via-orange-400 to-red-500',
        secondary: 'from-yellow-300/50 via-orange-400/50 to-red-500/50',
        tertiary: 'from-amber-400 via-orange-500 to-pink-500',
        quaternary: 'from-red-400 via-pink-500 to-purple-500',
        quinary: 'from-lime-400 via-emerald-500 to-cyan-500',
        particle1: 'bg-yellow-200/90',
        particle2: 'bg-orange-200/90',
        particle3: 'bg-red-200/90',
        particle4: 'bg-pink-200/90',
        particle5: 'bg-amber-200/90',
        particle6: 'bg-rose-200/90',
        particle7: 'bg-purple-200/90',
        particle8: 'bg-indigo-200/90',
        trail1: 'from-yellow-400 via-orange-400 to-transparent',
        trail2: 'from-red-400 to-transparent',
        trail3: 'from-pink-400 to-transparent',
        trail4: 'from-purple-400 to-transparent',
        animation: 'animate-hologram-rotate-light',
        textColor: 'text-gray-800',
        iconColor: 'text-gray-800',
        borderColor: 'border-gray-600/40 group-hover:border-gray-600/60',
        borderColor3D: 'border-gray-600/20 group-hover:border-gray-600/40',
      };
    }
  };

  const colors = getGradientColors();

  return (
    <motion.div
      className={`relative rounded-full overflow-hidden group ${className} animate-hologram-wave`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ animationDelay: '-6s' }}
    >
      {/* 3D深度エフェクト - 背景 */}
      <div className="absolute inset-0 bg-gradient-radial from-black/20 via-transparent to-transparent" />
      
      {/* メインのホログラム背景 */}
      <div className={`absolute inset-0 bg-gradient-to-r ${colors.primary} ${colors.animation} bg-[length:200%_200%]`} />
      
      {/* 追加の光のレイヤー */}
      <div className={`absolute inset-0 bg-gradient-to-r ${colors.secondary} ${colors.animation} bg-[length:200%_200%]`} />
      
      {/* 第三のグラデーションレイヤー */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.tertiary} ${colors.animation} bg-[length:200%_200%]`} style={{ animationDelay: '2s' }} />
      
      {/* 第四のグラデーションレイヤー */}
      <div className={`absolute inset-0 bg-gradient-to-bl ${colors.quaternary} ${colors.animation} bg-[length:200%_200%]`} style={{ animationDelay: '3s' }} />
      
      {/* 第五のグラデーションレイヤー */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${colors.quinary} ${colors.animation} bg-[length:200%_200%]`} style={{ animationDelay: '4s' }} />
      
      {/* 虹色エフェクト */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 opacity-20 animate-rainbow-rotate" style={{ animationDelay: '1s' }} />
      
      {/* エネルギー波エフェクト */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-energy-wave" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-energy-wave" style={{ animationDelay: '1.5s' }} />
      
      {/* 量子エフェクト - ランダムな光の点 */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/70 rounded-full animate-quantum-flicker"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* パーティクルエフェクト - より多くのパーティクル */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-1 h-1 ${colors.particle1} rounded-full animate-particle-float`} />
        <div className={`absolute top-3/4 right-1/4 w-1 h-1 ${colors.particle2} rounded-full animate-particle-float`} style={{ animationDelay: '0.7s' }} />
        <div className={`absolute top-1/2 left-1/2 w-1 h-1 ${colors.particle3} rounded-full animate-particle-float`} style={{ animationDelay: '1.4s' }} />
        <div className={`absolute top-1/3 right-1/3 w-1 h-1 ${colors.particle4} rounded-full animate-particle-float`} style={{ animationDelay: '2.1s' }} />
        <div className={`absolute bottom-1/4 left-1/3 w-0.5 h-0.5 ${colors.particle5} rounded-full animate-particle-float`} style={{ animationDelay: '0.3s' }} />
        <div className={`absolute top-1/6 right-1/6 w-0.5 h-0.5 ${colors.particle6} rounded-full animate-particle-float`} style={{ animationDelay: '1.7s' }} />
        <div className={`absolute bottom-1/6 left-1/6 w-0.5 h-0.5 ${colors.particle7} rounded-full animate-particle-float`} style={{ animationDelay: '0.9s' }} />
        <div className={`absolute top-2/3 left-2/3 w-0.5 h-0.5 ${colors.particle8} rounded-full animate-particle-float`} style={{ animationDelay: '1.1s' }} />
        
        {/* 追加の小さなパーティクル */}
        <div className="absolute top-1/8 left-1/8 w-0.5 h-0.5 bg-white/60 rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/8 right-1/8 w-0.5 h-0.5 bg-white/60 rounded-full animate-glow-pulse" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-3/4 left-1/6 w-0.5 h-0.5 bg-white/60 rounded-full animate-glow-pulse" style={{ animationDelay: '0.9s' }} />
        <div className="absolute top-1/2 right-1/8 w-0.5 h-0.5 bg-white/60 rounded-full animate-glow-pulse" style={{ animationDelay: '1.6s' }} />
      </div>
      
      {/* 光の反射エフェクト */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-hologram-shine" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent animate-hologram-shine" style={{ animationDelay: '1.5s' }} />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/15 to-transparent animate-hologram-shine" style={{ animationDelay: '2.5s' }} />
      
      {/* ホログラム投影エフェクト */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent animate-hologram-project" />
      
      {/* 内側のグラデーションオーバーレイ */}
      <div className={`absolute inset-1 rounded-full bg-gradient-to-br ${theme === 'dark' ? 'from-white/10 via-transparent to-black/30' : 'from-white/40 via-transparent to-black/5'} backdrop-blur-[2px]`} />
      
      {/* 3D深度エフェクト - 前面 */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/5" />
      
      {/* ロゴコンテンツ */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 gap-2">
        {/* ロケットアイコン */}
        <div className="animate-rocket-fly">
          <RocketLaunchIcon className={`h-5 w-5 ${colors.iconColor} drop-shadow-lg`} />
        </div>
        
        {/* Portfolio テキスト */}
        <span className={`font-bold text-sm tracking-wide drop-shadow-lg ${colors.textColor}`}>
          Portfolio
        </span>
      </div>
      
      {/* ホバー時の追加エフェクト */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-hologram-hover" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/0 via-white/15 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-hologram-hover" style={{ animationDelay: '0.5s' }} />
      <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-hologram-hover" style={{ animationDelay: '1s' }} />
      
      {/* 境界線の光効果 */}
      <div className={`absolute inset-0 rounded-full border-2 ${colors.borderColor} transition-colors duration-300`} />
      
      {/* 3D境界線エフェクト */}
      <div className={`absolute inset-0 rounded-full border ${colors.borderColor3D} transition-colors duration-300`} />
      
      {/* ロケット特有の光の尾 */}
      <div className={`absolute -bottom-1 left-1/4 transform -translate-x-1/2 w-1.5 bg-gradient-to-t ${colors.trail1} opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-rocket-trail`} />
      
      {/* 追加の光の尾（複数レイヤー） */}
      <div className={`absolute -bottom-2 left-1/4 transform -translate-x-1/2 w-1 bg-gradient-to-t ${colors.trail2} opacity-50 group-hover:opacity-90 transition-opacity duration-300 animate-rocket-trail`} style={{ animationDelay: '0.3s' }} />
      <div className={`absolute -bottom-3 left-1/4 transform -translate-x-1/2 w-0.5 bg-gradient-to-t ${colors.trail3} opacity-40 group-hover:opacity-80 transition-opacity duration-300 animate-rocket-trail`} style={{ animationDelay: '0.6s' }} />
      <div className={`absolute -bottom-1.5 left-1/4 transform -translate-x-1/2 w-0.5 bg-gradient-to-t ${colors.trail2} opacity-30 group-hover:opacity-70 transition-opacity duration-300 animate-rocket-trail`} style={{ animationDelay: '0.9s' }} />
      <div className={`absolute -bottom-2.5 left-1/4 transform -translate-x-1/2 w-0.5 bg-gradient-to-t ${colors.trail4} opacity-25 group-hover:opacity-60 transition-opacity duration-300 animate-rocket-trail`} style={{ animationDelay: '1.2s' }} />
      
      {/* エネルギー波の光の尾 */}
      <div className="absolute -bottom-4 left-1/4 transform -translate-x-1/2 w-2 bg-gradient-to-t from-white/20 via-white/10 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-energy-wave" />
    </motion.div>
  );
} 