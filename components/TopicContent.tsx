import React, { useState, useEffect } from 'react';
import { getTopicExplanation } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';

interface TopicContentProps {
  subjectName: string;
  topicName: string;
}

const TopicContent: React.FC<TopicContentProps> = ({ subjectName, topicName }) => {
  const [explanation, setExplanation] = useState<string>('');
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);
      setExplanation('');
      setShowPlaceholder(false);
      try {
        const response = await getTopicExplanation(subjectName, topicName);
        setExplanation(response.explanation);
        setShowPlaceholder(response.visualAidNeeded);
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [subjectName, topicName]);

  return (
    <div className="mt-6 bg-white p-6 md:p-8 rounded-xl shadow-lg min-h-[300px]">
      {showPlaceholder && !isLoading && !error && (
        <div className="mb-6 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center flex flex-col justify-center items-center h-64">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-gray-500 text-sm">Image/Diagram Placeholder</p>
          <p className="text-gray-400 text-xs mt-1">A visual aid would be beneficial for this topic.</p>
        </div>
      )}

      <h3 className="text-3xl font-bold text-gray-800 mb-4">{topicName}</h3>
      
      {isLoading && <LoadingSpinner />}
      
      {error && <p className="text-red-500 bg-red-100 p-4 rounded-lg">{error}</p>}
      
      {!isLoading && !error && (
        <div
          className="prose prose-indigo max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: explanation }}
        />
      )}
    </div>
  );
};

export default TopicContent;