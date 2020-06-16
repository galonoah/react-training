import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnAPi';

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, [storyId]);

  return story && story.url ? (
    <>
      <a href={story.url}>
        <p>{story.title}</p>
      </a>
      <p> By: {story.by}</p>
      <p>Posted: {story.time}</p>
    </>
  ) : null;
};