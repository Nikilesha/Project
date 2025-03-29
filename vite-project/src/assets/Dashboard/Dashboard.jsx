import "./Dashboard.css";
import "../News/news";
function Dashboard() {
  return (
    <>
      <div className="main">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="logo">
              <div className="logo-icon">
                <svg
                  width="213"
                  height="214"
                  viewBox="0 0 213 214"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_760_470)">
                    <ellipse
                      cx="106.5"
                      cy="107"
                      rx="106.5"
                      ry="107"
                      fill="#D8E7FF"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M113.749 61C113.749 60.4477 113.301 60 112.749 60H96.4277C95.8754 60 95.4277 60.4477 95.4277 61V152C95.4277 152.552 94.98 153 94.4277 153H54C53.4477 153 53 153.448 53 154V171C53 171.552 53.4477 172 54 172H160C160.552 172 161 171.552 161 171V154C161 153.448 160.552 153 160 153H114.749C114.197 153 113.749 152.552 113.749 152V61Z"
                    fill="url(#paint0_linear_760_470)"
                  />
                  <g filter="url(#filter1_i_760_470)">
                    <rect
                      x="119"
                      y="101"
                      width="19"
                      height="52"
                      fill="#4182EA"
                    />
                    <rect
                      x="141"
                      y="90"
                      width="19"
                      height="63"
                      fill="#4182EA"
                    />
                    <rect
                      x="53"
                      y="139"
                      width="19"
                      height="14"
                      fill="#4182EA"
                    />
                    <rect
                      x="74"
                      y="116"
                      width="19"
                      height="37"
                      fill="#4182EA"
                    />
                  </g>
                  <path
                    d="M103 34L93.3135 40.2853L103.6 45.5314L103 34ZM52.8908 134.454L99.8019 42.4718L98.0202 41.5632L51.1092 133.546L52.8908 134.454Z"
                    fill="black"
                  />
                  <defs>
                    <filter
                      id="filter0_i_760_470"
                      x="0"
                      y="0"
                      width="223"
                      height="224"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="4"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_innerShadow_760_470"
                      />
                      <feOffset dx="10" dy="10" />
                      <feGaussianBlur stdDeviation="16" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0.405167 0 0 0 0 0.736667 0 0 0 0.71 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_760_470"
                      />
                    </filter>
                    <filter
                      id="filter1_i_760_470"
                      x="53"
                      y="90"
                      width="109"
                      height="65"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="2" dy="2" />
                      <feGaussianBlur stdDeviation="3.15" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.172549 0 0 0 0 0.345098 0 0 0 0 0.631373 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_760_470"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_760_470"
                      x1="107"
                      y1="75"
                      x2="107"
                      y2="172"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0342A8" />
                      <stop offset="0.23" stop-color="#2B508C" />
                      <stop offset="0.77" stop-color="#316AC6" />
                      <stop offset="1" stop-color="#274C88" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="logo-text">Trade Plus</span>
            </div>
          </div>

          <div className="side-items">
            <ul>
              <li>
                <a href="/#">Dashboard</a>
              </li>
              <li>
                <a href="">Stocks</a>
              </li>
              <li>
                <a href="">F&O</a>
              </li>
              <li>
                <a href="">Mutual Funds</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="../News/news.jsx">News</a>
              </li>
              <li>
                <a href="">WatchList</a>
              </li>
              <li>
                <a href="">Notifications</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="dashboard">
          <div className="dash-in">
            <div className="navbar">
              <div className="searchbox">
                <input type="text" placeholder="Search for stock market..." />
                <box-icon name="search"></box-icon>
              </div>
              <div className="user-profile">
                <div className="profile"></div>
                <div className="name">Nikilesha</div>
              </div>
            </div>

            <div className="main-dash">
              <div className="dash">
                <div className="content-area">
                  <div className="header">
                    <h1>Indices</h1>
                    <p>Trending Stock Market</p>
                  </div>

                  <div className="indices-container">
                    <div className="index-card">
                      <div className="index-name">NIFTY</div>
                      <div className="index-value">
                        <span className="main-value">21,014.15</span>
                        <span className="per-value negative">0.97%</span>
                      </div>
                      <div className="index-chart"></div>
                      <div className="index-details">
                        <div className="shares">
                          <div className="share">Total Shares</div>
                          <div className="share-value">₹21,014</div>
                        </div>
                        <div className="closes">
                          <div className="close">Prev Close</div>
                          <div className="close-value">21,245.75</div>
                        </div>
                      </div>
                    </div>

                    <div className="index-card">
                      <div className="index-name">SENSEX</div>
                      <div className="index-value">
                        <span className="main-value">68,488.26</span>
                        <span className="per-value negative">0.97%</span>
                      </div>
                      <div className="index-chart"></div>
                      <div className="index-details">
                        <div className="shares">
                          <div className="share">Total Shares</div>
                          <div className="share-value">₹68,488.26</div>
                        </div>
                        <div className="closes">
                          <div className="close">Prev Close</div>
                          <div className="close-value">69,154.92</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="header">
                    <h2>Top Gainers</h2>
                  </div>

                  {/*Start of top gainers*/}
                  <div className="indices-container">
                    {/*Card 1 */}
                    <div className="mini-index-card">
                      <div className="top-gainer-logo"></div>
                      <div className="top-gainer-header">
                        <p>Zomato</p>
                      </div>
                      <div className="top-gainer-rate">
                        <div className="top-gainer-amount">
                          <p className="rates">₹483.50</p>
                        </div>
                        <div className="top-gainer-per positive">
                          <p className="per">30.15(6.65%)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End of top gainers*/}
                </div>
              </div>
              {/*Start of news section*/}
              <div className="side-news">
                <div className="news-header">
                  <h3>Market News</h3>
                </div>

                <div className="news-card">
                  <div className="news-card-source">
                    <p>Financial Times</p>
                    <p>3hr ago</p>
                  </div>
                  <div className="news-card-main">
                    <p className="main-news">
                      Fed Signals Rate Cut Plans for Coming Months
                    </p>

                    <div className="news-card-desc">
                      <p className="desc">
                        Federal Reserve officials indicated they expect to cut
                        interest rates later this year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End of news section*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
