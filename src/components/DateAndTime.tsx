'use client';
import React from 'react';

export default function DateAndTime() {
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: 'numeric' });

    return (
        <div className="flex flex-col w-max md:items-end font-semibold">
            {/* Current Date */}
            <div>{currentDate}</div>

            {/* Current Time */}
            <div>{currentTime}</div>
        </div>
    );
}
