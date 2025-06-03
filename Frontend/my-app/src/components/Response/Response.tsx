import React, { useState } from 'react';
import {ResponseModel} from '../../models/ResponseModel'
import './Response.scss';

type ResponseProps = {
  response: ResponseModel;
};

const Response = ({ response }: ResponseProps) => {
  const [likeCount, setLikeCount] = useState(response.like);
  const [dislikeCount, setDislikeCount] = useState(response.dislike);

  return (
    <div className="response">
      <div className="response-header">
        <strong>{response.CustomerName}</strong>
        <span className="response-date">
          {new Date(response.date).toLocaleDateString()}
        </span>
      </div>

      <div className="response-content">
        {response.content}
      </div>

      <div className="response-reactions">
        <button className="reaction-button" onClick={() => setLikeCount(likeCount + 1)}>
          👍 <span className="count">{likeCount}</span>
        </button>
        <button className="reaction-button" onClick={() => setDislikeCount(dislikeCount + 1)}>
          👎 <span className="count">{dislikeCount}</span>
        </button>
      </div>
    </div>
  );
};

export default Response;
