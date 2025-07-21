
import { useDraggable } from '@dnd-kit/core';

interface DesktopShortcutProps {
    name: string;
    icon: React.ReactNode;
    onClick: () => void;
    id: string;
    position?: { x: number; y: number };
    onDragEnd?: (id: string, position: { x: number; y: number }) => void;
}

export const DesktopShortcut = ({ name, icon, onClick, id, position, onDragEnd }: DesktopShortcutProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        position: 'absolute' as const,
        left: position?.x || 0,
        top: position?.y || 0,
    } : {
        position: 'absolute' as const,
        left: position?.x || 0,
        top: position?.y || 0,
    };

    return (
        <div 
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            onClick={onClick} 
            className="cursor-pointer flex flex-col items-center hover:bg-pink-300 rounded-md p-2 w-fit"
        >
            <div className="text-outline-text-color"> {icon} </div>
            <span className='text-outline-text-color font-bold bg-white-color rounded-md border-4 border-outline-text-color px-2'> {name} </span>
        </div>
    );
}