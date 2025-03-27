'use client';

import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaFigma,
  FaWindows
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiThreedotjs, 
  SiFramer, 
  SiGreensock, 
  SiChartdotjs,
  SiSwift,
  SiKotlin,
  SiGo,
  SiRust,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiReactquery,
  SiGraphql,
  SiAmazon,
  SiGooglecloud,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiFlutter,
  SiElectron,
  SiDjango,
  SiExpress,
  SiNestjs,
  SiSpring,
  SiLaravel,
  SiDotnet,
  SiUnity,
  SiTensorflow,
  SiPytorch,
  SiJest,
  SiCypress,
  SiStorybook,
  SiWebpack,
  SiVite,
  SiEslint,
  SiPrettier
} from 'react-icons/si';

// 技術アイコンのマッピング
const techIcons: Record<string, { icon: React.ElementType; color: string }> = {
  // フロントエンド技術
  'react': { icon: FaReact, color: "#61DAFB" },
  'next.js': { icon: SiNextdotjs, color: "#000000" },
  'vue.js': { icon: SiVuedotjs, color: "#4FC08D" },
  'vue': { icon: SiVuedotjs, color: "#4FC08D" },
  'angular': { icon: SiAngular, color: "#DD0031" },
  'svelte': { icon: SiSvelte, color: "#FF3E00" },

  // 言語
  'typescript': { icon: SiTypescript, color: "#007ACC" },
  'javascript': { icon: FaJs, color: "#F7DF1E" },
  'python': { icon: FaPython, color: "#3776AB" },
  'java': { icon: FaJava, color: "#007396" },
  'php': { icon: FaPhp, color: "#777BB4" },
  'go': { icon: SiGo, color: "#00ADD8" },
  'golang': { icon: SiGo, color: "#00ADD8" },
  'rust': { icon: SiRust, color: "#000000" },
  'swift': { icon: SiSwift, color: "#F05138" },
  'kotlin': { icon: SiKotlin, color: "#7F52FF" },

  // マークアップ
  'html': { icon: FaHtml5, color: "#E34F26" },
  'html5': { icon: FaHtml5, color: "#E34F26" },
  'css': { icon: FaCss3Alt, color: "#2965F1" },
  'css3': { icon: FaCss3Alt, color: "#2965F1" },
  'tailwindcss': { icon: SiTailwindcss, color: "#06B6D4" },

  // モバイル・デスクトップ
  'react native': { icon: FaReact, color: "#61DAFB" },
  'flutter': { icon: SiFlutter, color: "#02569B" },
  'electron': { icon: SiElectron, color: "#47848F" },

  // バックエンド
  'node.js': { icon: FaNodeJs, color: "#339933" },
  'express': { icon: SiExpress, color: "#000000" },
  'nest.js': { icon: SiNestjs, color: "#E0234E" },
  'nestjs': { icon: SiNestjs, color: "#E0234E" },
  'django': { icon: SiDjango, color: "#092E20" },
  'spring': { icon: SiSpring, color: "#6DB33F" },
  'laravel': { icon: SiLaravel, color: "#FF2D20" },
  '.net': { icon: SiDotnet, color: "#512BD4" },
  'dotnet': { icon: SiDotnet, color: "#512BD4" },

  // データベース
  'postgresql': { icon: SiPostgresql, color: "#4169E1" },
  'postgres': { icon: SiPostgresql, color: "#4169E1" },
  'mongodb': { icon: SiMongodb, color: "#47A248" },
  'redis': { icon: SiRedis, color: "#DC382D" },
  'firebase': { icon: SiFirebase, color: "#FFCA28" },
  'sql': { icon: FaDatabase, color: "#4479A1" },
  'mysql': { icon: FaDatabase, color: "#4479A1" },

  // API・データフェッチ
  'graphql': { icon: SiGraphql, color: "#E10098" },
  'react query': { icon: SiReactquery, color: "#FF4154" },

  // クラウド
  'aws': { icon: FaAws, color: "#FF9900" },
  'azure': { icon: FaWindows, color: "#0078D4" },
  'gcp': { icon: SiGooglecloud, color: "#4285F4" },
  'google cloud': { icon: SiGooglecloud, color: "#4285F4" },

  // デブオプス
  'docker': { icon: FaDocker, color: "#2496ED" },
  'git': { icon: FaGitAlt, color: "#F05032" },

  // 可視化・アニメーション
  'three.js': { icon: SiThreedotjs, color: "#000000" },
  'gsap': { icon: SiGreensock, color: "#88CE02" },
  'chart.js': { icon: SiChartdotjs, color: "#FF6384" },
  'framer motion': { icon: SiFramer, color: "#0055FF" },

  // テスト・デザイン
  'jest': { icon: SiJest, color: "#C21325" },
  'cypress': { icon: SiCypress, color: "#17202C" },
  'storybook': { icon: SiStorybook, color: "#FF4785" },
  'figma': { icon: FaFigma, color: "#F24E1E" },

  // ビルドツール
  'webpack': { icon: SiWebpack, color: "#8DD6F9" },
  'vite': { icon: SiVite, color: "#646CFF" },

  // リンター・フォーマッター
  'eslint': { icon: SiEslint, color: "#4B32C3" },
  'prettier': { icon: SiPrettier, color: "#F7B93E" },

  // AI・機械学習
  'tensorflow': { icon: SiTensorflow, color: "#FF6F00" },
  'pytorch': { icon: SiPytorch, color: "#EE4C2C" },
  'unity': { icon: SiUnity, color: "#000000" }
};

interface TechIconProps {
  tech: string;
  className?: string;
}

export default function TechIcon({ tech, className = 'h-4 w-4' }: TechIconProps) {
  // 技術名を小文字に変換
  const techLower = tech.toLowerCase();
  
  // クラス名からサイズを抽出
  const size = className.includes('h-') ? parseInt(className.match(/h-(\d+(?:\.\d+)?)/)?.[1] || '4') : 4;
  const sizeInPx = size * 4; // Tailwindのh-4は16px相当
  
  // アイコンのスタイル
  const iconStyle = { width: sizeInPx, height: sizeInPx };
  
  // マッピングから適切なアイコンを取得
  const iconData = techIcons[techLower];
  
  if (iconData) {
    const { icon: Icon, color } = iconData;
    return <Icon style={iconStyle} color={color} />;
  }
  
  // アイコンがない場合はデフォルトアイコンを返す
  return <AdjustmentsHorizontalIcon className={className} />;
} 