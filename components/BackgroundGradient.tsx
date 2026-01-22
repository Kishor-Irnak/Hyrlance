import React from 'react';

export const BackgroundGradient: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Top Left - Light Cyan */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #57F6E7 0%, rgba(255,255,255,0) 70%)' }}
      ></div>

      {/* Center Right - Teal */}
      <div 
        className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #30B2BE 0%, rgba(255,255,255,0) 70%)' }}
      ></div>

      {/* Bottom Left - Navy Hint */}
      <div 
        className="absolute bottom-[-10%] left-[10%] w-[40%] h-[40%] rounded-full opacity-10 blur-[130px]"
        style={{ background: 'radial-gradient(circle, #032D4D 0%, rgba(255,255,255,0) 70%)' }}
      ></div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{ 
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
        }}
      ></div>
    </div>
  );
};