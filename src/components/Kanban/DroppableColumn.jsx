import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export default function DroppableColumn({ id, children, color }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-wrap gap-3 p-3 w-full rounded-lg shadow border min-h-[180px] ${color || 'bg-white'}`}
    >
      {children}
    </div>
  );
}
