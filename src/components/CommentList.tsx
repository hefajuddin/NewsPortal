import React from 'react';
import { Clock, User } from 'lucide-react';
import { Comment } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const { language } = useLanguage();
  
  if (comments.length === 0) {
    return <div className="text-gray-500 dark:text-gray-400 italic">No comments yet.</div>;
  }
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString(language === 'en' ? 'en-US' : 'bn-BD', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6 mb-6">
      {comments.map(comment => (
        <div 
          key={comment.id} 
          className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-3">
                <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200">
                {comment.name}
              </h4>
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Clock className="h-3 w-3 mr-1" />
              <span>{formatDate(comment.createdAt)}</span>
            </div>
          </div>
          <div className="pl-9">
            <p className="text-gray-600 dark:text-gray-300">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;