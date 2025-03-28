import "./sidebar.css";

function Sidebar() {

  return (
    <>
    <div className="main">

      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">
              <img src="./tradeplus-logo.jpg" alt="T" />
            </div>
            <span className="logo-text">Trade Plus</span>
          </div>
        </div>
      </div>
       
      <div className="dashboard">
        <div className="dash-in">
          <div className="navbar">

            <div className="searchbox">
            
            <input type="text" placeholder="Search for stock market... "/>
            <box-icon name='search'></box-icon>
            </div>

            <div className="user-profile">
              <div className="profile"></div>
              <div className="name">Nikilesha</div>
            </div>

          </div>

          <div className="main-dash">
            <div className="dash">

            </div>
            <div className="side-news">
              
            </div>
          </div>
        </div>
      </div>
      

    </div>
    </>
  );
}

export default Sidebar;
