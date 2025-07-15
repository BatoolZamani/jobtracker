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
  console.log(jobs);
  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      {Object.entries(tasks).map(([columnTitle, taskList]) => (
        <div
          key={columnTitle}
          className={`w-72 flex-shrink-0 ${Colors[columnTitle] || 'bg-white'} rounded-xl p-4 shadow-md border`}
        >
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">{columnTitle}</h2>

          <div className="flex flex-col gap-3">
            {taskList.map((task, index) => (
              <Card
                key={index}
                {...jobs[index]} // روش خلاصه برای پاس دادن همه props
              />
            ))}

            <button className="mt-2 text-sm text-blue-600 hover:underline text-left">+ Add Task</button>
          </div>
        </div>
      ))}
    </div>
  );
}
