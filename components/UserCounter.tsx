import React from 'react';

export interface RecentUser {
  initial: string;
  color: string;
}

interface UserCounterProps {
  count: number;
  users: RecentUser[];
}

export const UserCounter: React.FC<UserCounterProps> = ({ count, users }) => {
  return (
    <div className="flex items-center gap-4 mt-2">
      <div className="flex -space-x-3">
        {users.map((user, i) => (
          <div 
            key={i} 
            className={`w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm transition-all duration-500 animate-fade-in-up ${user.color}`}
            title={`User starting with ${user.initial}`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
             {user.initial}
          </div>
        ))}
        <div className="w-9 h-9 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-500 shadow-sm z-10">
          +
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
            <span className="font-bold text-brand-navy text-lg tabular-nums transition-all duration-500">
                {count.toLocaleString()}
            </span>
            <span className="text-gray-500 text-sm">makers waiting</span>
        </div>
        <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] uppercase font-semibold text-gray-400 tracking-wide">Live</span>
        </div>
      </div>
    </div>
  );
};