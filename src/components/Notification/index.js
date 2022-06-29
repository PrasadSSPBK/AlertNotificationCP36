import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notificationContainer">
      <div className="notification">{children}</div>
      <GrFormClose className="cross" />
    </div>
  )
}

export default Notification
