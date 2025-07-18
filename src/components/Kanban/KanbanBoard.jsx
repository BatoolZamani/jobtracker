import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Card from './Card';
import DroppableColumn from './DroppableColumn';
import jobs from '../../data/jobs';
import Colors from '../color';

export default function KanbanBoard() {
  const [columns, setColumns] = useState({
    Backlog: ['0', '1'],
    interviewing: ['2', '3'],
    'In Progress': ['4', '5'],
    'Maybe later': [],
    'No answer': [],
    Rejected: [],
    Job: [],
  });

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    const from = Object.keys(columns).find((col) => columns[col].includes(active.id));
    const to = over.id;

    if (from && to && from !== to) {
      setColumns((prev) => ({
        ...prev,
        [from]: prev[from].filter((id) => id !== active.id),
        [to]: [...prev[to], active.id],
      }));
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="space-y-6 p-4 bg-gray-100 min-h-screen">
        {Object.entries(columns).map(([colTitle, cardIds]) => (
          <div key={colTitle} className="flex items-center gap-4">
            <div
              className={`w-10 h-32 flex items-center justify-center font-bold text-white text-xs rounded-tl-full rounded-bl-full ${Colors[colTitle] || 'bg-blue-400'}`}
            >
              <span className="vertical-text">{colTitle}</span>
            </div>

            <DroppableColumn id={colTitle} color={Colors[colTitle]}>
              {cardIds.map((id) => {
                const job = jobs[parseInt(id)];
                return job ? <Card key={id} id={id} {...job} /> : null;
              })}
              {/* دکمه افزودن */}
              <button
                className="w-[250px] flex flex-col items-center justify-center p-5 bg-white/60 border border-dashed border-blue-400 text-blue-600 rounded-xl hover:bg-white hover:underline transition-all shadow"
                onClick={() => alert(`Add job to ${colTitle}`)}
              >
                + Add Job
              </button>
            </DroppableColumn>
          </div>
        ))}
      </div>
    </DndContext>
  );
}
