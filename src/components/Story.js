import React, { useEffect, useState } from 'react';
import { getStory } from '../services/hnApi';

export const Story = ({storyId}) => {
  useEffect(() => {}, []);

  return <p>I am a story {storyId}</p>
  
}