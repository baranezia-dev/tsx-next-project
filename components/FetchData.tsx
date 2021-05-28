import layout from '../styles/Layout.module.css';

interface FetchDataProps {}

const FetchData: React.FC<FetchDataProps> = () => {
  return (
    <>
      <h3 className={layout.fetch__data}>Fetching Data . . .</h3>
    </>
  );
};

export default FetchData;
