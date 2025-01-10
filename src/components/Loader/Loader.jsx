import { LineWave } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <LineWave
        visible={true}
        height="200"
        width="200"
        color="#0FBA83"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};
