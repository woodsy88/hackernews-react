import React, { useEffect, useState, memo } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';


export const StoriesContainer = () => {
  const {count} = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    console.log('count: ', count);
    getStoryIds().then(data => setStoryIds(data));
  }, [count]);

  // console.log(typeof storyIds);
  // console.table(storyIds);

  return (
  <>
  <GlobalStyle />
  <StoriesContainerWrapper data-test-id="stories-container">
      <h1>HackerNews with style</h1>
        {
          storyIds.slice(0, count).map(storyId => <Story key={storyId} storyId={storyId} />)
        }
  </StoriesContainerWrapper>
  </>)
}
