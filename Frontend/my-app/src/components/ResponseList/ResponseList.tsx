import React, { useState } from 'react';
import { ResponseModel } from '../../models/ResponseModel';
import './ResponseList.scss';

type ResponseListProps = {
  initialResponses?: ResponseModel[];
};

const ResponseList = ({ initialResponses = [] }: ResponseListProps) => {
  const [responses, setResponses] = useState<ResponseModel[]>(initialResponses);

  const [newName, setNewName] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleAddResponse = () => {
    if (!newName.trim() || !newContent.trim()) return;

    const newResponse: ResponseModel = {
      CustomerName: newName,
      content: newContent,
      like: 0,
      dislike: 0,
      date: new Date(),
    };

    setResponses([newResponse, ...responses]);
    setNewName('');
    setNewContent('');
  };

  const handleLike = (index: number) => {
    const updated = [...responses];
    updated[index].like++;
    setResponses(updated);
  };

  const handleDislike = (index: number) => {
    const updated = [...responses];
    updated[index].dislike++;
    setResponses(updated);
  };

  return (
    <div className="response-list">
      <h3>תגובות</h3>

      <div className="new-response">
        <input
          type="text"
          placeholder="השם שלך"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <textarea
          placeholder="כתוב/י תגובה..."
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button onClick={handleAddResponse}>שלח תגובה</button>
      </div>

      {responses.map((res, index) => (
        <div key={index} className="response">
          <div className="response-header">
            <strong>{res.CustomerName}</strong> - {res.date.toLocaleDateString()}
          </div>
          <div className="response-content">{res.content}</div>
          <div className="response-actions">
            <button onClick={() => handleLike(index)}>👍 {res.like}</button>
            <button onClick={() => handleDislike(index)}>👎 {res.dislike}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponseList;
