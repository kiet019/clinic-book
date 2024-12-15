import React, { useEffect, useState, useRef } from "react";
import { ref, onChildAdded, set, push } from "firebase/database";
import { useGetListDoctor } from "../hook/useGetListDoctor";
import { DoctorChat } from "../components/Card/DoctorChat";
import { db } from "../firebase";
import { useGetDoctorProfile } from "../hook/useGetDoctorProfile";

function ChatDoctor() {
  const { data: doctorList, isFetching: doctorListFetching } =
    useGetListDoctor();
  const { data: doctorData, isFetching: doctorDataFetching } =
    useGetDoctorProfile();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    let unsubscribe;
    setMessages([]);

    if (doctorData && doctorData.doctorName) {
      const messagesRef = ref(
        db,
        `chatRooms/${doctorData.doctorName}/messages`
      );
      unsubscribe = onChildAdded(messagesRef, (snapshot) => {
        const message = snapshot.val();
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
    return () => unsubscribe && unsubscribe();
  }, [doctorData]);

  const sendMessage = () => {
    if (doctorData && doctorData.doctorName && newMessage.trim() !== "") {
      const messagesRef = ref(
        db,
        `chatRooms/${doctorData.doctorName}/messages`
      );
      const newMessageRef = push(messagesRef);

      set(newMessageRef, {
        sender: doctorData.doctorName,
        text: newMessage,
        timestamp: Date.now(),
      })
        .then(() => {
          setMessages([
            ...messages,
            {
              sender: doctorData.doctorName,
              text: newMessage,
              timestamp: Date.now(),
            },
          ]);
          setNewMessage("");
        })
        .catch((error) => {
          console.error("Error sending message:", error);
          console.error("Error details:", error.code, error.message);
          alert(
            "Error sending message. Please try again. Check console for details."
          );
        });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  // Loading state
  if (
    doctorListFetching ||
    doctorDataFetching ||
    !doctorData ||
    !doctorData.doctorName
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content" style={{marginTop: 70}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="chat-window">
              {/* Keep the left side, but make DoctorChat non-functional */}
              <div className="chat-cont-left">
                <div className="chat-header">
                  <span>Lịch Sử Trò Chuyện</span>
                  <a href="javascript:void(0)" className="chat-compose">
                    <i className="material-icons">control_point</i>
                  </a>
                </div>
                <form className="chat-search">
                  {/* Search functionality (if needed) */}
                </form>
                <div className="chat-users-list">
                  <div className="chat-scroll">
                    <a href="javascript:void(0);" className="media">
                      <div className="media-img-wrap">
                        <div className="avatar avatar-away">
                          <img
                            src="assets/img/doctors/doctor-thumb-01.jpg"
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <div>
                          <div className="user-name">
                            Bác sĩ {doctorData.doctorName}
                          </div>
                          <div className="user-last-chat">{doctorData.bio}</div>
                        </div>
                        <div>
                          <div className="last-chat-time block">2 min</div>
                          <div className="badge badge-success badge-pill">
                            15
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* The right side (chat area) remains largely unchanged */}
              <div className="chat-cont-right">
                <div className="chat-header">
                  <div className="media">
                    <div className="media-img-wrap">
                      <div className="avatar avatar-online">
                        <img
                          src={
                            doctorData.imageUrl ||
                            "assets/img/doctors/doctor-thumb-02.jpg"
                          }
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div className="user-name">
                        Bác sĩ {doctorData.doctorName}
                      </div>
                      <div className="user-status"></div>
                    </div>
                  </div>
                </div>
                <div className="chat-body">
                  <div className="chat-scroll">
                    <ul className="list-unstyled">
                      {messages.map((message, index) => (
                        <li
                          key={index}
                          className={
                            message.sender === "user"
                              ? "media sent"
                              : "media received"
                          }
                        >
                          <div className="media-body">
                            <div className="msg-box">
                              <p>{message.text}</p>
                              <div className="chat-msg-info">
                                <span className="chat-sender">
                                  {message.sender}
                                </span>
                                <span className="chat-time">
                                  {formatTimestamp(message.timestamp)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                      <div ref={messagesEndRef} />
                    </ul>
                  </div>
                </div>
                <div className="chat-footer">
                  <div className="input-group">
                    <input
                      type="text"
                      className="input-msg-send form-control"
                      placeholder="Gửi tin nhắn..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="btn msg-send-btn"
                        onClick={sendMessage}
                      >
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatDoctor;
