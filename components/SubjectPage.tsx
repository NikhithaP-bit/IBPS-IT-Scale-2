
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SYLLABUS } from '../constants';
import TopicContent from './TopicContent';

const SubjectPage: React.FC = () => {
  const { subjectId, topicId } = useParams<{ subjectId: string; topicId: string }>();

  const subject = SYLLABUS.find((s) => s.id === subjectId);
  const selectedTopic = subject?.topics.find((t) => t.id === topicId);

  if (!subject) {
    return <div className="text-center text-red-500">Subject not found.</div>;
  }

  return (
    <div>
      <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">{subject.name}</h2>
      <p className="mt-2 text-lg text-gray-500">Select a topic to start learning.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subject.topics.map((topic) => (
          <Link
            key={topic.id}
            to={`/${subject.id}/${topic.id}`}
            className={`block p-4 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
              topic.id === topicId
                ? 'bg-indigo-600 text-white ring-2 ring-indigo-300'
                : 'bg-white hover:bg-indigo-50'
            }`}
          >
            <h4 className="font-semibold text-center">{topic.name}</h4>
          </Link>
        ))}
      </div>

      {selectedTopic && (
        <TopicContent subjectName={subject.name} topicName={selectedTopic.name} />
      )}
    </div>
  );
};

export default SubjectPage;
