import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
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
        
        {/* 虹色エフェクト */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(45deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6, #ec4899, #ef4444)',
            borderRadius: '50%',
            opacity: 0.2,
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
        
        {/* 内側のグラデーションオーバーレイ */}
        <div
          style={{
            position: 'absolute',
            inset: '2px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%, rgba(0,0,0,0.3) 100%)',
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
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.9))',
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
            top: '20%',
            left: '20%',
            width: '60%',
            height: '60%',
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
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
        
        {/* 境界線の光効果 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: '2px solid rgba(255,255,255,0.4)',
            borderRadius: '50%',
          }}
        />
        
        {/* 内側の境界線 */}
        <div
          style={{
            position: 'absolute',
            inset: '2px',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%',
          }}
        />
        
        {/* ロケットの光の尾 - メイン */}
        <div
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '6px',
            background: 'linear-gradient(to top, #f97316, #eab308, transparent)',
            borderRadius: '1px',
          }}
        />
        
        {/* ロケットの光の尾 - 追加レイヤー */}
        <div
          style={{
            position: 'absolute',
            bottom: '-3px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1px',
            height: '4px',
            background: 'linear-gradient(to top, #ef4444, #f97316, transparent)',
            borderRadius: '0.5px',
          }}
        />
        
        {/* エネルギー波の光の尾 */}
        <div
          style={{
            position: 'absolute',
            bottom: '-4px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3px',
            height: '3px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* パーティクルエフェクト */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              background: 'rgba(255,255,255,0.8)',
              borderRadius: '50%',
              left: `${25 + i * 15}%`,
              top: `${20 + (i % 2) * 15}%`,
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