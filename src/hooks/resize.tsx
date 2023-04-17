import { useEffect, useState } from 'preact/hooks';
import { getWindowHeight, getWindowWidth } from '../helpers/dom';

const CHARACTER_PIXEL_WIDTH = 16;

// stolen from https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c
export const useColumns = () => {
  // save current window width in the state object
  const [width, setWidth] = useState(getWindowWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWindowWidth()), 150);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return Math.ceil(width / CHARACTER_PIXEL_WIDTH);
};

// stolen from https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c
export const useRows = () => {
  // save current window width in the state object
  const [height, setHeight] = useState(getWindowHeight());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setHeight(getWindowHeight()), 150);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return Math.ceil(height / CHARACTER_PIXEL_WIDTH);
};
