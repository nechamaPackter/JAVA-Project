import React, { useEffect, useState } from 'react';
import { ResponseModel } from '../../models/ResponseModel';
import './ResponseList.scss';

const ResponseList = () => {
  const [responses, setResponses] = useState<ResponseModel[]>([]);
  const [loading, setLoading] = useState(true);

  const [newName, setNewName] = useState('');
  const [newContent, setNewContent] = useState('');

  // טעינת תגובות מהשרת
  useEffect(() => {
    fetch('http://localhost:8080/api/replays')
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((item: any) => ({
          ...item,
          date: new Date(item.date),
        }));
        setResponses(mapped);
        setLoading(false);
      })
      .catch((err) => {
        console.error('שגיאה בטעינת תגובות:', err);
        setLoading(false);
      });
  }, []);

  const handleAddResponse = () => {
    if (!newName.trim() || !newContent.trim()) return;

    const newResponse: ResponseModel = {
      CustomerName: newName,
      content: newContent,
      like: 0,
      dislike: 0,
      date: new Date(),
    };

    // שליחה לשרת
    fetch('http://localhost:8080/api/replays', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newResponse,
        date: newResponse.date.toISOString().split('T')[0] // תאריך בפורמט yyyy-MM-dd
      }),
    })
      .then((res) => res.json())
      .then((savedResponse) => {
        savedResponse.date = new Date(savedResponse.date);
        setResponses([savedResponse, ...responses]);
        setNewName('');
        setNewContent('');
      })
      .catch((err) => {
        console.error('שגיאה בשליחת תגובה:', err);
      });
  };

  if (loading) return <div>טוען תגובות...</div>;

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
            <span>👍 {res.like}</span>
            <span style={{ marginInlineStart: '1rem' }}>👎 {res.dislike}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponseList;
