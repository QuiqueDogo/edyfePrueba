import { useState, useCallback } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T,>(url: string) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = useCallback((): Promise<T> => {
    setState(before => ({ ...before, loading: true }));

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data: T) => {
        setState({ data, loading: false, error: null });
        return data;
      })
      .catch(error => {
        setState({ data: null, loading: false, error: error.message });
        return Promise.reject(error);
      });
  }, [url]);

  return { ...state, fetchData };
};

export default useFetch;