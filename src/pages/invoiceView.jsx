import React from 'react';

function InvoiceView() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/Home">Trang Chủ</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Xem Hóa Đơn</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Xem Hóa Đơn</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      {/* Nội Dung Trang */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="invoice-content">
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-logo">
                        <img src="assets/img/logo.png" alt="logo" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="invoice-details">
                        <strong>Đơn Hàng:</strong> #00124 <br />
                        <strong>Ngày Phát Hành:</strong> 20/07/2019
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hóa Đơn Item */}
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-info">
                        <strong className="customer-text">Hóa Đơn Từ</strong>
                        <p className="invoice-details invoice-details-two">
                          Dr. Darren Elder <br />
                          806 Twin Willow Lane, Old Forge,<br />
                          Newyork, Hoa Kỳ <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="invoice-info invoice-info2">
                        <strong className="customer-text">Hóa Đơn Đến</strong>
                        <p className="invoice-details">
                          Walter Roberson <br />
                          299 Star Trek Drive, Panama City, <br />
                          Florida, 32405, Hoa Kỳ <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Hóa Đơn Item */}

                {/* Hóa Đơn Item */}
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="invoice-info">
                        <strong className="customer-text">Phương Thức Thanh Toán</strong>
                        <p className="invoice-details invoice-details-two">
                          Thẻ Ghi Nợ <br />
                          XXXXXXXXXXXX-2541 <br />
                          Ngân Hàng HDFC<br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Hóa Đơn Item */}

                {/* Hóa Đơn Item */}
                <div className="invoice-item invoice-table-wrap">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-responsive">
                        <table className="invoice-table table table-bordered">
                          <thead>
                            <tr>
                              <th>Mô Tả</th>
                              <th className="text-center">Số Lượng</th>
                              <th className="text-center">VAT</th>
                              <th className="text-right">Tổng Cộng</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Tư Vấn Chung</td>
                              <td className="text-center">1</td>
                              <td className="text-center">$0</td>
                              <td className="text-right">$100</td>
                            </tr>
                            <tr>
                              <td>Đặt Lịch Gọi Video</td>
                              <td className="text-center">1</td>
                              <td className="text-center">$0</td>
                              <td className="text-right">$250</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4 ml-auto">
                      <div className="table-responsive">
                        <table className="invoice-table-two table">
                          <tbody>
                            <tr>
                              <th>Tổng Tạm Tính:</th>
                              <td><span>$350</span></td>
                            </tr>
                            <tr>
                              <th>Giảm Giá:</th>
                              <td><span>-10%</span></td>
                            </tr>
                            <tr>
                              <th>Tổng Số Tiền:</th>
                              <td><span>$315</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Hóa Đơn Item */}

                {/* Thông Tin Hóa Đơn */}
                <div className="other-info">
                  <h4>Thông Tin Khác</h4>
                  <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero.</p>
                </div>
                {/* /Thông Tin Hóa Đơn */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Nội Dung Trang */}
    </div>
  )
}

export default InvoiceView;