import { useSelector } from 'react-redux';

function ProgressBar() {
  const list = useSelector((state) => state.todoListReducer.list);
  const listCount = list.length;
  const finishCount = list.filter((item) => item.isFinish).length;
  let percent = +((finishCount / listCount) * 100).toFixed(0);
  if (!percent) percent = 0;
  console.log(percent);
  return (
    <div className="progress-bar">
      <p>{percent}%</p>
      <div className="slider">
        <div className="progress" style={{ width: percent + '%' }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
