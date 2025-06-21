import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4)',
          borderRadius: '50%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* メインのグラデーション背景 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)',
            borderRadius: '50%',
          }}
        />
        
        {/* 追加の光のレイヤー */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4), rgba(6, 182, 212, 0.4))',
            borderRadius: '50%',
          }}
        />
        
        {/* 第三のグラデーションレイヤー */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(236, 72, 153, 0.3), rgba(6, 182, 212, 0.3))',
            borderRadius: '50%',
          }}
        />
        
        {/* 第四のグラデーションレイヤー */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(225deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.2), rgba(6, 182, 212, 0.2))',
            borderRadius: '50%',
          }}
        />
        
        {/* 虹色エフェクト */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(45deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6, #ec4899, #ef4444)',
            borderRadius: '50%',
            opacity: 0.15,
          }}
        />
        
        {/* エネルギー波エフェクト */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* 追加のエネルギー波 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 40%, rgba(255,255,255,0.05) 60%, transparent 80%)',
            borderRadius: '50%',
          }}
        />
        
        {/* 内側のグラデーションオーバーレイ */}
        <div
          style={{
            position: 'absolute',
            inset: '8px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%, rgba(0,0,0,0.2) 100%)',
            borderRadius: '50%',
          }}
        />
        
        {/* 3D深度エフェクト */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle, transparent 0%, transparent 70%, rgba(255,255,255,0.05) 100%)',
            borderRadius: '50%',
          }}
        />
        
        {/* ロケットアイコン - シンプルで明確なデザイン */}
        <svg
          width="90"
          height="90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.9))',
            zIndex: 10,
          }}
        >
          {/* ロケット本体 */}
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
          {/* ロケットの翼 */}
          <path d="M12 2L8 6L12 10L16 6L12 2Z" />
          {/* ロケットの先端 */}
          <path d="M12 2L12 0L10 2L12 4L14 2L12 0Z" />
        </svg>
        
        {/* 光の反射エフェクト */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '15%',
            width: '70%',
            height: '70%',
            background: 'linear-gradient(45deg, transparent 20%, rgba(255,255,255,0.25) 50%, transparent 80%)',
            borderRadius: '50%',
            transform: 'rotate(45deg)',
          }}
        />
        
        {/* 追加の反射エフェクト */}
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '25%',
            width: '50%',
            height: '50%',
            background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.15) 60%, transparent 80%)',
            borderRadius: '50%',
            transform: 'rotate(-30deg)',
          }}
        />
        
        {/* 第三の反射エフェクト */}
        <div
          style={{
            position: 'absolute',
            top: '35%',
            left: '35%',
            width: '30%',
            height: '30%',
            background: 'linear-gradient(225deg, transparent 30%, rgba(255,255,255,0.1) 70%, transparent 90%)',
            borderRadius: '50%',
            transform: 'rotate(60deg)',
          }}
        />
        
        {/* 境界線の光効果 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: '4px solid rgba(255,255,255,0.4)',
            borderRadius: '50%',
          }}
        />
        
        {/* 内側の境界線 */}
        <div
          style={{
            position: 'absolute',
            inset: '4px',
            border: '2px solid rgba(255,255,255,0.2)',
            borderRadius: '50%',
          }}
        />
        
        {/* 第三の境界線 */}
        <div
          style={{
            position: 'absolute',
            inset: '8px',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50%',
          }}
        />
        
        {/* ロケットの光の尾 - メイン */}
        <div
          style={{
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '8px',
            height: '24px',
            background: 'linear-gradient(to top, #f97316, #eab308, #fde047, transparent)',
            borderRadius: '4px',
          }}
        />
        
        {/* ロケットの光の尾 - 追加レイヤー */}
        <div
          style={{
            position: 'absolute',
            bottom: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '20px',
            background: 'linear-gradient(to top, #ef4444, #f97316, transparent)',
            borderRadius: '2px',
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            bottom: '-16px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '16px',
            background: 'linear-gradient(to top, #ec4899, #ef4444, transparent)',
            borderRadius: '1px',
          }}
        />
        
        {/* 第四の光の尾 */}
        <div
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1px',
            height: '12px',
            background: 'linear-gradient(to top, #8b5cf6, #ec4899, transparent)',
            borderRadius: '0.5px',
          }}
        />
        
        {/* エネルギー波の光の尾 */}
        <div
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '12px',
            height: '12px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* 追加のエネルギー波 */}
        <div
          style={{
            position: 'absolute',
            bottom: '-24px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '8px',
            height: '8px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* パーティクルエフェクト */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: 'rgba(255,255,255,0.8)',
              borderRadius: '50%',
              left: `${15 + i * 10}%`,
              top: `${10 + (i % 3) * 15}%`,
              filter: 'blur(1px)',
            }}
          />
        ))}
        
        {/* 追加の小さなパーティクル */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`small-${i}`}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: 'rgba(255,255,255,0.6)',
              borderRadius: '50%',
              left: `${20 + i * 12}%`,
              top: `${25 + (i % 2) * 20}%`,
            }}
          />
        ))}
      </div>
    ),
    {
      ...size,
    }
  )
} 