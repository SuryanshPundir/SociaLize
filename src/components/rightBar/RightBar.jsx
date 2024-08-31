import './RightBar.scss'
const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggested</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1526816/pexels-photo-1526816.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <span>Shinzo Hikaru</span>
            </div>
            <div className="buttons">
              <button className="button">Follow</button>
              <button className="button">Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1526815/pexels-photo-1526815.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <span>Ito Kazuya</span>
            </div>
            <div className="buttons">
              <button className="button">Follow</button>
              <button className="button">Dismiss</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1526816/pexels-photo-1526816.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <p><span>Shinzo Hikaru</span> added a photo</p>
            </div>
            <span>1 hour ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1526815/pexels-photo-1526815.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <p><span>Ito Kazuya </span>
                Followed you</p>
            </div>
            <span>2 hours ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1526812/pexels-photo-1526812.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <p><span>Ito Kazuya </span>
                Followed you</p>
            </div>
            <span>2 hours ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1526813/pexels-photo-1526813.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <p><span>Ron Don </span>
                changed their cover picture</p>
            </div>
            <span>2 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar