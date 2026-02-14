import { useEffect } from "react"
import { getAssetPath } from "../../lib/utils"

export function SupportCommunity() {
       useEffect(() => {
      document.body.classList.add("communitysupport-body")
      return () => document.body.classList.remove("communitysupport-body")
    }, [])


          useEffect(() => {
      document.title = "Solpire - 社区支持";
    }, []);

  return (


    <div className="community-container">
  <div className="community-header">
    <h1 className="community-title">
      GeoOptix
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={22}
        height={22}
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M10.5185 13.2687L7.19561 9.94579C7.14977 9.89996 7.11555 9.85046 7.09294 9.79729C7.07033 9.74413 7.05872 9.68668 7.05811 9.62496C7.05811 9.50274 7.10027 9.39579 7.18461 9.30413C7.26894 9.21246 7.37955 9.16663 7.51644 9.16663L14.4831 9.16663C14.6206 9.16663 14.7315 9.21246 14.8159 9.30413C14.9002 9.39579 14.942 9.50274 14.9414 9.62496C14.9414 9.65552 14.8956 9.76246 14.8039 9.94579L11.481 13.2687C11.4046 13.3451 11.3282 13.3986 11.2519 13.4291C11.1755 13.4597 11.0914 13.475 10.9998 13.475C10.9081 13.475 10.8241 13.4597 10.7477 13.4291C10.6713 13.3986 10.5949 13.3451 10.5185 13.2687Z"
          fill="#525252"
        />
      </svg>
    </h1>
    <button className="filter-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M23.3333 4.66663L23.3333 18.6666L26.8333 18.6666L22.1667 24.4999L17.5 18.6666L21 18.6666L21 4.66663L23.3333 4.66663ZM14 20.9999L14 23.3333L3.5 23.3333L3.5 20.9999L14 20.9999ZM16.3333 12.8333L16.3333 15.1666L3.5 15.1666L3.5 12.8333L16.3333 12.8333ZM16.3333 4.66663L16.3333 6.99996L3.5 6.99996L3.5 4.66663L16.3333 4.66663Z"
          fill="#3B3B3B"
        />
      </svg>
      最新
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={22}
        height={22}
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M10.5185 13.2687L7.19561 9.94579C7.14977 9.89996 7.11555 9.85046 7.09294 9.79729C7.07033 9.74413 7.05872 9.68668 7.05811 9.62496C7.05811 9.50274 7.10027 9.39579 7.18461 9.30413C7.26894 9.21246 7.37955 9.16663 7.51644 9.16663L14.4831 9.16663C14.6206 9.16663 14.7315 9.21246 14.8159 9.30413C14.9002 9.39579 14.942 9.50274 14.9414 9.62496C14.9414 9.65552 14.8956 9.76246 14.8039 9.94579L11.481 13.2687C11.4046 13.3451 11.3282 13.3986 11.2519 13.4291C11.1755 13.4597 11.0914 13.475 10.9998 13.475C10.9081 13.475 10.8241 13.4597 10.7477 13.4291C10.6713 13.3986 10.5949 13.3451 10.5185 13.2687Z"
          fill="#525252"
        />
      </svg>
    </button>
  </div>
  <hr className="first-hr" />
  <div className="community-posts">
    <div className="post-row orange">
      <div className="post-title">使用问题1-20</div>
      <div className="post-meta">
        <span className="post-author">By : Rayaesthe</span>
        <span className="post-date">2025.6.23</span>
        <button className="edit-icon-btn">
          <img src={getAssetPath('/assets/images/registration/edit-icon.svg')} alt="Edit" />
        </button>
      </div>
    </div>
    <div className="post-row light-blue">
      <div className="post-title">First_Post</div>
      <div className="post-meta">
        <span className="post-author">By : Rayaesthe</span>
        <span className="post-date">2025.6.23</span>
        <button className="edit-icon-btn">
          <img src={getAssetPath('/assets/images/registration/edit-icon.svg')} alt="Edit" />
        </button>
      </div>
    </div>
    <div className="post-row light-blue">
      <div className="post-title">Second_Post</div>
      <div className="post-meta">
        <span className="post-author">By : Rayaesthe</span>
        <span className="post-date">2025.6.23</span>
        <button className="edit-icon-btn">
          <img src={getAssetPath('/assets/images/registration/edit-icon.svg')} alt="Edit" />
        </button>
      </div>
    </div>
    <div className="post-row light-blue">
      <div className="post-title">Second_Post</div>
      <div className="post-meta">
        <span className="post-author">By : Rayaesthe</span>
        <span className="post-date">2025.6.23</span>
        <button className="edit-icon-btn">
          <img src={getAssetPath('/assets/images/registration/edit-icon.svg')} alt="Edit" />
        </button>
      </div>
    </div>
    <div className="post-row green">
      <div className="post-title">使用场景讨论</div>
      <div className="post-meta">
        <span className="post-author">By : Rayaesthe</span>
        <span className="post-date">2025.6.23</span>
        <button className="edit-icon-btn">
          <img src={getAssetPath('/assets/images/registration/edit-icon.svg')} alt="Edit" />
        </button>
      </div>
    </div>
    <div className="post-row green">
      <div className="post-title">使用问题讨论</div>
      <div className="post-meta">
        <span className="post-author">By : Rayaesthe</span>
        <span className="post-date">2025.6.23</span>
        <button className="edit-icon-btn">
          <img src={getAssetPath('/assets/images/registration/edit-icon.svg')} alt="Edit" />
        </button>
      </div>
    </div>
  </div>
  <div className="background-image-section">
    <div className="background-image-wrapper">
      <img src={getAssetPath('/assets/images/主页首页背景_1.png')} alt="Background" />
    </div>
  </div>
  <div className="form-divider" />
  <div className="form-section">
    <div className="background-image-overlay" />
    <div className="form-labels">
      <span className="form-label-text">
        主题
        <svg
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="form-label-text">
        类型
        <svg
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
    <div className="form-inputs">
      <div className="main-form-box">
        <input type="text" className="form-input" placeholder="标题" />
        <hr />
        <textarea
          className="form-textarea"
          placeholder="内容"
          defaultValue={""}
        />
      </div>
      <button className="send-icon-btn">
        <img src={getAssetPath('/assets/images/send-icon.svg')} alt="Send" />
      </button>
    </div>
  </div>
</div>



  )
}
