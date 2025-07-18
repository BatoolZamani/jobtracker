import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { BsHeadset } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
import { FaBusinessTime, FaCalendarAlt, FaRegClock } from 'react-icons/fa';

export default function Card({ id, ...data }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;

  const { company, jobTitle, appliedDate, contactPerson, location, jobType, interviewDate, interviewTime } = data;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white rounded-xl p-5 shadow border text-sm space-y-2 font-inter w-[250px]"
    >
      <h2 className="text-lg font-bold text-blue-700">{company}</h2>

      <div className="flex justify-between gap-6">
        <strong className="text-sm text-gray-400">{jobTitle}</strong>
        <strong className="text-sm text-gray-400">{appliedDate}</strong>
      </div>

      <div className="flex items-center gap-2">
        <BsHeadset className="text-gray-900 text-lg" />
        {contactPerson}
      </div>

      <div className="flex justify-between mt-3">
        <span className="flex items-center gap-2">
          <TiLocation className="text-gray-900 text-lg" />
          {location}
        </span>
        <span className="flex items-center gap-2">
          <FaBusinessTime className="text-gray-900 text-lg" />
          {jobType}
        </span>
      </div>

      <div className="flex justify-between pt-2">
        <span className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-600" />
          {interviewDate}
        </span>
        <span className="flex items-center gap-2">
          <FaRegClock className="text-gray-600" />
          {interviewTime}
        </span>
      </div>
    </div>
  );
}
