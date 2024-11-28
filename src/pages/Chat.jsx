import React from 'react';

function Chat() {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="chat-window">
              
              {/* Chat Left */}
              <div className="chat-cont-left">
                <div className="chat-header">
                  <span>Lịch Sử Trò Chuyện</span>
                  <a href="javascript:void(0)" className="chat-compose">
                    <i className="material-icons">control_point</i>
                  </a>
                </div>
                <form className="chat-search">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <i className="fas fa-search"></i>
                    </div>
                    <input type="text" className="form-control" placeholder="Tìm kiếm" />
                  </div>
                </form>
                <div className="chat-users-list">
                  <div className="chat-scroll">
                    {/* Repeat this block for each user */}
                    <a href="javascript:void(0);" className="media">
                      <div className="media-img-wrap">
                        <div className="avatar avatar-away">
                          <img src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" className="avatar-img rounded-circle" />
                        </div>
                      </div>
                      <div className="media-body">
                        <div>
                          <div className="user-name">Đau Họng</div>
                          <div className="user-last-chat">Các loại thuốc đau họng tốt nhất</div>
                        </div>
                        <div>
                          <div className="last-chat-time block">2 min</div>
                          <div className="badge badge-success badge-pill">15</div>
                        </div>
                      </div>
                    </a>
                    {/* Add more user blocks as needed */}
                  </div>
                </div>
              </div>
              {/* /Chat Left */}
              
              {/* Chat Right */}
              <div className="chat-cont-right">
                <div className="chat-header">
                  <a id="back_user_list" href="javascript:void(0)" className="back-user-list">
                    <i className="material-icons">chevron_left</i>
                  </a>
                  <div className="media">
                    <div className="media-img-wrap">
                      <div className="avatar avatar-online">
                        <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" className="avatar-img rounded-circle" />
                      </div>
                    </div>
                    <div className="media-body">
                      <div className="user-name">Bệnh về tai</div>
                      <div className="user-status"></div>
                    </div>
                  </div>
                  <div className="chat-options">
                    <a href="javascript:void(0)" data-toggle="modal" data-target="#voice_call">
                      <i className="material-icons">local_phone</i>
                    </a>
                    <a href="javascript:void(0)" data-toggle="modal" data-target="#video_call">
                      <i className="material-icons">videocam</i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="material-icons">more_vert</i>
                    </a>
                  </div>
                </div>
                <div className="chat-body">
                  <div className="chat-scroll">
                    <ul className="list-unstyled">
                      {/* Repeat this block for each message */}
                      <li className="media sent">
                        <div className="media-body">
                          <div className="msg-box">
                            <div>
                              <p>Tôi bị đau tai trong một thời gian dài, có cách nào để điều trị không?</p>
                              <ul className="chat-msg-info">
                                <li>
                                  <div className="chat-time">
                                    <span>8:30 AM</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Add more message blocks as needed */}
                    </ul>
                  </div>
                </div>
                <div className="chat-footer">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="btn-file btn">
                        <i className="fa fa-paperclip"></i>
                        <input type="file" />
                      </div>
                    </div>
                    <input type="text" className="input-msg-send form-control" placeholder="Gửi tin nhắn..." />
                    <div className="input-group-append">
                      <button type="button" className="btn msg-send-btn"><i className="fab fa-telegram-plane"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Chat Right */}
              
            </div>
          </div>
        </div>
        {/* /Row */}
      </div>
    </div>
  );
}

export default Chat;