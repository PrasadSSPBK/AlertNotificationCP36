import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notifications from '../Notification'

import './index.css'

const AlertNotification = () => (
  <div className="app-container">
    <div className="responsive-container">
      <h1 className="heading">Alert Notifications</h1>
      <Notifications>
        <AiFillCheckCircle className="icon success" />
        <div className="Container">
          <h1 className="success">Success</h1>
          <p className="para">You can access all the files in the folder</p>
        </div>
      </Notifications>

      <Notifications>
        <RiErrorWarningFill className="icon warning" />
        <div className="Container">
          <h1 className="warning">Error</h1>
          <p className="para">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notifications>
      <Notifications>
        <MdWarning className="icon mdwar" />
        <div className="Container">
          <h1 className="mdwarn">Warning</h1>
          <p className="para">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notifications>
      <Notifications>
        <MdInfo className="icon info" />
        <div className="Container">
          <h1 className="info">info</h1>
          <p className="para"> Anyone on the internet can view these files</p>
        </div>
      </Notifications>
    </div>
  </div>
)

export default AlertNotification
