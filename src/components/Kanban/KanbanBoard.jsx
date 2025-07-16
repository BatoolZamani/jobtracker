import React from 'react';
import Card from './Card';
import jobs from '../../data/jobs';
import Colors from '../color';

const tasks = {
  Backlog: [{ title: 'Task 9' }, { title: 'Task 8' }],
  interviewing: [{ title: 'Task 7' }, { title: 'Task 3' }],
  'In Progress': [{ title: 'Task 4' }, { title: 'Task 5' }],
  'Maybe later': [{ title: 'Task 2' }, { title: 'Task 1' }],
  'No answer': [{ title: 'Task 2' }, { title: 'Task 1' }],
  Rejected: [{ title: 'Task 2' }, { title: 'Task 1' }],
  Job: [{ title: 'Task 2' }, { title: 'Task 1' }],
};

export default function KanbanBoard() {
  return (
    <div className="space-y-6 p-1 bg-gray-100 min-h-screen">
      {Object.entries(tasks).map(([columnTitle, taskList]) => (
        <div key={columnTitle} className="flex items-center gap-4">
          {/* ستون رنگی با متن عمودی */}
          <div
            className={`w-10 h-32 flex items-center justify-center font-bold text-white shadow-md text-xs md:text-sm lg:text-base ${Colors[columnTitle] || 'bg-white'} rounded-tl-full rounded-bl-full`}
          >
            <span className="vertical-text">{columnTitle}</span>
          </div>

          {/* کارت‌ها */}
          <div
            className={`flex gap-3 flex-wrap p-3 rounded-lg shadow border w-full ${Colors[columnTitle] || 'bg-white'}`}
          >
            {taskList.map((task, index) => (
              <Card key={index} {...jobs[index]} />
            ))}
            <button className="w-[250px] flex items-center bg-white/30 backdrop-blur-md justify-center text-blue-600 border border-dashed border-blue-400 rounded-md bg-transparent text-sm hover:underline">
              + Add New Job
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
