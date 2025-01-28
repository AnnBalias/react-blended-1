import style from './StatisticsItem.module.css';

const StatisticsItem = ({ logo, data, dataName } ) => {
  
  return (
    <>
  {logo()}
  <span className={style.counter}>{data}</span>
  <p className={style.text}>{dataName}</p>
    </>
  )
};

export default StatisticsItem;
