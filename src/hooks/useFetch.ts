import { useEffect, useState } from 'react';
import { Pokemon } from '../interfaces/pokemon';

interface FetchResponse {
  data: Pokemon | null;
  isLoading: boolean;
  hasError: boolean | null;
}
interface FetchState extends FetchResponse {
  error: { [key: string]: string | number } | null;
}

const localCache: { [key: string]: Pokemon } = {};

export const useFetch = (url: string): FetchResponse => {
  const [state, setState] = useState<FetchState>({
    data: null,
    isLoading: true,
    hasError: null,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {
      console.log('Fetching from cache');

      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });

      return;
    }

    setLoadingState();

    const response = await fetch(url);
    if (!response.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: response.status,
          message: response.statusText,
        },
      });

      return;
    }

    const data = await response.json();

    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
