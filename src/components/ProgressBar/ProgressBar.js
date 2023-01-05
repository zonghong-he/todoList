import { useEffect, useState } from 'react';

function ProgressBar({ progressPercent }) {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    if (progressPercent === percent) return;
    let currentPercent = percent;
    let smooth = 0.5; //動畫速度

    //進度條動畫
    function timer() {
      if (progressPercent === currentPercent) return;

      if (progressPercent > percent) {
        setPercent((cur) => cur + smooth);
        currentPercent += smooth;
      } else if (progressPercent < percent) {
        setPercent((cur) => cur - smooth);
        currentPercent -= smooth;
      }

      window.requestAnimationFrame(timer);
    }

    window.requestAnimationFrame(timer);
  }, [progressPercent]);
  return (
    <div className="progress-bar">
      <p>{percent.toFixed(0)}%</p>
      <div className="slider">
        <div className="progress" style={{ width: percent + '%' }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
