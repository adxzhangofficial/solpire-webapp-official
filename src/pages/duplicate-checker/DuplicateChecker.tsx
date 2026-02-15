import { useEffect } from "react"
import { getAssetPath } from "../../lib/utils"

export function DuplicateChecker() {

    useEffect(() => {
      document.body.classList.add("duplicate-checker-body")
      return () => document.body.classList.remove("duplicate-checker-body")
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
      <div className="file-list-container">
        <div className="file-grid">
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
        <div className="file-list-scrollbar" />
        {/* Upload Section - Red Box 7 */}
        <div className="upload-section">
          <div className="upload-box">
            {/* Red Box 8 - GeoOptix Branding */}
            <div className="geoptix-brand">
              <img
                src={getAssetPath('/assets/images/small_img_logo.png')}
                alt="GeoOptix"
                className="geoptix-logo"
              />
              <span className="geoptix-text">GeoOptix</span>
            </div>
            {/* Upload Instructions */}
            <div className="upload-content">
              <p className="file-formats">支持的文件格式: .SLDPRT .CAD .STL</p>
              <p className="upload-hint">
                请选择模型文件或拖放模型文件推到这里
              </p>
              {/* Action Buttons */}
              <div className="upload-buttons">
                <button className="btn-select">选择3D文件</button>
                <button className="btn-process">处理3D文件</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Product Boxes - Red Box 11 */}
    <section className="product-section">
      <div className="product-container">
        <img
          src={getAssetPath('/assets/images/book.png')}
          alt="GeoOptix 个人基础版"
          className="product-img"
        />
      </div>
    </section>
    {/* Features Table */}
    <section className="table-section">
      <table className="features-table">
        <thead>
          <tr>
            <th>功能分类</th>
            <th>个人基础版</th>
            <th>企业专业版</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3D模型查重</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>搜索与语义查询</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>相似性推荐</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>模型库管理</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>统计数据查看</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>可视化查看</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>用户协作</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>审计日志</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>API/插件支持</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>SDK支持</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>数据同步</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>安全与支持</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>自定义开发</td>
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  {/* Footer Image Section */}
  <section className="footer-image-section">
    <div className="footer-image-container">
      <img src={getAssetPath('/assets/images/ft_img.png')} alt="Footer" className="footer-img" />
    </div>
  </section>
</>

  )
}
