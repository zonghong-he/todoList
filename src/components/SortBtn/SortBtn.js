import { useState } from 'react';

function SortBtn() {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div className="sortBtn-wrap">
      <p className='subtitle'>Move done things to end?</p>
      <button
        className="toggle"
        onClick={() => {
          setIsCheck(!isCheck);
        }}
      >
        <i
          className={
            isCheck ? 'fa-solid fa-toggle-on' : 'fa-solid fa-toggle-off'
          }
        ></i>
      </button>
    </div>
  );
}

export default SortBtn;
