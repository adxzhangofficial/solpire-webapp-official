import { useEffect } from "react"

export function DuplicateChecker2() {

      useEffect(() => {
        document.body.classList.add("duplicate-checker-2-body")
        return () => document.body.classList.remove("duplicate-checker-2-body")
      }, [])

      useEffect(() => {
      document.title = "Solpire - 重复检查器";
    }, []);
  return (


    <>
  {/* Main Content */}
  <main className="duplicate-checker-main">
    {/* Top Section - Preview, Info, and Similarity Boxes */}
    <section className="top-section">
      <div className="top-container">
        {/* Red Box 1 - Preview Box */}
        <div className="preview-box" />
        {/* File Info and Similarity */}
        <div className="info-similarity-wrapper">
          {/* File Info Text */}
          <div className="file-info-text">
            <p>文件名称: 脚座</p>
            <p>文件大小: 10MB</p>
            <p>相似文件: 5个</p>
            <p>文件格式: SLDPRT</p>
            <p>分析速度: 0.00135s</p>
          </div>
          {/* Similarity Grid - 3 boxes top row, 2 boxes bottom row */}
          <div className="similarity-grid">
            <div className="similarity-box box-99">相似性99%</div>
            <div className="similarity-box box-95">相似性95%</div>
            <div className="similarity-box box-31">相似性31%</div>
            <div className="similarity-box box-95-2">相似性95%</div>
            <div className="similarity-box box-80">相似性80%</div>
          </div>
        </div>
      </div>
    </section>
    {/* File List Section */}
    <section className="file-list-section">
      <div className="geoptix-brand pos-element">
        <img
          src="/assets/images/small_img_logo.png"
          alt="GeoOptix"
          className="geoptix-logo"
        />
        <span className="geoptix-text">GeoOptix</span>
      </div>
      <div className="file-list-container">
        <div className="file-grid mx-height">
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
          <div className="file-item">文件1</div>
        </div>
        <div className="file-list-scrollbar tp-45" />
      </div>
    </section>
  </main>
  {/* Footer Image Section */}
  <section className="footer-image-section">
    <div className="footer-image-container">
      <img src="/assets/images/ft_img.png" alt="Footer" className="footer-img" />
    </div>
  </section>
</>



  )
}
