'use client'

import React from 'react';

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
    return (
        <div className={`bg-gray-100 shadow-lg overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

export const CardHeader: React.FC<CardProps> = ({ className, children }) => {
    return (
        <div className={`p-6 border-b border-gray-300 ${className}`}>
            {children}
        </div>
    );
};

export const CardTitle: React.FC<CardProps> = ({ className, children }) => {
    return (
        <h2 className={`text-xl font-bold text-gray-800 ${className}`}>
            {children}
        </h2>
    );
};

export const CardContent: React.FC<CardProps> = ({ className, children }) => {
    return (
        <div className={`p-6 text-gray-700 ${className}`}>
            {children}
        </div>
    );
};