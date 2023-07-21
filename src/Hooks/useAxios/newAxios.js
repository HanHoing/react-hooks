//newAxios.js
import defaultAxios from "axios";
import { useEffect, useState } from "react";

//axiosClient 요청
//defaultAxios default URL 설정
const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  //trigger 변경시 데이터 재요청
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now()); //랜덤 데이터 위해 사용
  };

  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      }).catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  if (!opts.url) {
    return;
  }
  return { ...state, refetch };
};

export default useAxios;