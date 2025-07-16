import React from 'react';
import { BsHeadset } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
import { FaBusinessTime } from 'react-icons/fa';
import { FaCalendarAlt, FaRegClock } from 'react-icons/fa';
export default function Card({
  company,
  jobTitle,
  appliedDate,
  contactPerson,
  location,
  jobType,
  salary,
  website,
  daysSinceApply,
  status,
  workMode,
  interviewDate,
  interviewTime,
}) {
  return (
    <div className="bg-white rounded-xl p-5 shadow border text-sm space-y-2 font-inter">
      <h2 className="text-lg font-bold text-blue-700">{company}</h2>

      <div className="flex gap-6 justify-between">
        <p>
          <strong className="text-sm text-gray-400">{jobTitle}</strong>
        </p>
        <p>
          <strong className="text-sm text-gray-400">{appliedDate}</strong>
        </p>
      </div>

      <p>
        <span>
          <strong className="flex gap-2">
            <BsHeadset className="text-gray-900 text-lg" />
            {contactPerson}
          </strong>
        </span>
      </p>

      <div>
        <div className="flex gap-6 justify-between">
          <strong className="flex gap-2 mt-10">
            <TiLocation className="text-gray-900 text-lg" />
            {location}
          </strong>
          <p>
            <strong className="flex gap-2 mt-10">
              <FaBusinessTime className="text-gray-900 text-lg" />
              {jobType}
            </strong>
          </p>
        </div>
      </div>

      <p className="flex  justify-between pr-8 pl-1">
        <span className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-600" />
          {interviewDate}
        </span>
        <span className="flex items-center gap-2">
          <FaRegClock className="text-gray-600" />
          {interviewTime}
        </span>
      </p>
    </div>
  );
}
