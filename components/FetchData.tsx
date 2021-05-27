import layout from '../styles/Layout.module.css';

interface FetchDataProps {}

const FetchData: React.FC<FetchDataProps> = () => {
  return (
    <>
      <div className={layout.fetch__data}></div>
      <div className={layout.fetch__data}></div>
      <div className={layout.fetch__data}></div>
      <div className={layout.fetch__data}></div>
    </>
  );
};

export default FetchData;
