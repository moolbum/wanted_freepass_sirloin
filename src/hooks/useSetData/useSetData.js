import { useState, useEffect } from 'react';

export const useSetData = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const data = await fetch('data/setData.json');
    const res = await data.json();
    setData(res);
  };

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  return data;
};
