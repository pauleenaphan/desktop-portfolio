import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { DesktopShortcut } from '../components/desktopShortcut';
import DesktopBar from './desktop/desktopBar';

const Desktop = () => {
    const [shortcuts, setShortcuts] = useState([
        {
            id: '1',
            name: "About",
            position: { x: 50, y: 50 },
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
            )
        }
    ]);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, delta } = event;
        const shortcutId = active.id as string;
        
        setShortcuts(prev => 
            prev.map(shortcut => 
                shortcut.id === shortcutId 
                    ? { 
                        ...shortcut, 
                        position: { 
                            x: (shortcut.position?.x || 0) + delta.x, 
                            y: (shortcut.position?.y || 0) + delta.y 
                        } 
                    }
                    : shortcut
            )
        );
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className='bg-desktop-bg-color h-screen w-screen relative overflow-hidden'>
                {shortcuts.map(shortcut => (
                    <DesktopShortcut 
                        key={shortcut.id}
                        id={shortcut.id}
                        name={shortcut.name}
                        icon={shortcut.icon}
                        position={shortcut.position}
                        onClick={() => console.log(`${shortcut.name} clicked`)}
                    />
                ))}
                <DesktopBar />
            </div>
        </DndContext>
    )
}

export default Desktop;