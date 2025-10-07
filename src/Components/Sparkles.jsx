import React from "react";

export function Sparkles() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {[...Array(100)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-40 animate-sparkle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${2 + Math.random() * 3}s`,
                    }}
                />
            ))}
        </div>
    );
}