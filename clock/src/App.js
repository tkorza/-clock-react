import style from './style.module.css'
import { useState, useEffect } from 'react'
function App() {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const data = new Date()
    let interval = setInterval(() => setTime(data), 1000)
    return () => clearInterval(interval)
  }, [time])


  return (
    <div className={style.wrapper}>
      <div className={style.window}>
        <div className={style.clockWrapper}>
          <div className={style.iconWrapper}></div>
          <h1>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h1>
          <p>{time.getDate()}.{time.getMonth()}.{time.getFullYear()}</p>
        </div>
      </div>
    </div>
  )
}
export default App