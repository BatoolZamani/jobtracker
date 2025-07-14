import React from 'react';

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
}) {
  return (
    <div className="bg-white rounded-xl p-5 shadow border text-sm space-y-2">
      <h2 className="text-lg font-bold text-blue-700">{company}</h2>

      <p>
        <strong>Job Title:</strong> {jobTitle}
      </p>
      <p>
        <strong>Applied On:</strong> {appliedDate}
      </p>
      <p>
        <strong>Contact Person:</strong> {contactPerson}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Job Type:</strong> {jobType}
      </p>
      <p>
        <strong>Salary:</strong> {salary}
      </p>
      <p>
        <strong>Website:</strong>{' '}
        <a className="text-blue-600 hover:underline" href={website} target="_blank">
          {website}
        </a>
      </p>
      <p>
        <strong>Days Since Application:</strong> {daysSinceApply} days ago
      </p>
      <p>
        <strong>Work Mode:</strong> {workMode}
      </p>
    </div>
  );
}
