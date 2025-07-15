import React from 'react';
import Card from './Card';
import jobs from '../../data/jobs';
import Colors from '../color';

const tasks = {
  Backlog: [{ title: 'Task 9' }, { title: 'Task 8' }, { title: 'Task 11' }, { title: 'Task 12' }],
  interviewing: [{ title: 'Task 7' }, { title: 'Task 3' }],
  'In Progress': [{ title: 'Task 4' }, { title: 'Task 5' }, { title: 'Task 6' }, { title: 'Task 10' }],
  'Maybe later': [{ title: 'Task 2' }, { title: 'Task 1' }],
  'No answer': [{ title: 'Task 2' }, { title: 'Task 1' }],
  Rejected: [{ title: 'Task 2' }, { title: 'Task 1' }],
  Job: [{ title: 'Task 2' }, { title: 'Task 1' }],
};

export default function KanbanBoard() {
  return (
    <div className="space-y-6 p-1 bg-gray-100 min-h-screen">
      {Object.entries(tasks).map(([columnTitle, taskList]) => (
        <div key={columnTitle} className="flex items-start gap-4">
          {/* عنوان ستون سمت راست */}
          <div
            className={`h-32 w-80 flex items-center justify-center transform -rotate-90 text-center font-bold text-white whitespace-nowrap text-sm md:text-base lg:text-lg shadow-md rounded-tl-full rounded-tr-full  ${Colors[columnTitle] || 'bg-white'}`}
          >
            {columnTitle}
          </div>

          {/* لیست کارت‌ها افقی */}
          <div
            className={`flex gap-3 flex-wrap p-3 rounded-lg shadow border w-full ${Colors[columnTitle] || 'bg-white'}`}
          >
            {taskList.map((task, index) => (
              <Card key={index} {...jobs[index]} />
            ))}

            <button className="w-[250px]  flex items-center bg-white/30 backdrop-blur-md justify-center text-blue-600 border border-dashed border-blue-400 rounded-md bg-transparent text-sm hover:underline">
              + Add New Job
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
