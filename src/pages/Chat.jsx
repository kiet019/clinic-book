import React, { useEffect, useState, useRef } from "react";
import {
  getDatabase,
  ref,
  onValue,
  push,
  onChildAdded,
  set,
} from "firebase/database";
import { useGetListDoctor } from "../hook/useGetListDoctor";
import { DoctorChat } from "../components/Card/DoctorChat";
import { db } from "../firebase";
import { useGetProfile } from "../hook/useGetProfile";
import { apiFetch } from "../lib/apiFetch";

function Chat() {
  const { data, isFetching } = useGetListDoctor();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const { data: user } = useGetProfile();

  useEffect(() => {
    let unsubscribe;
    setMessages([]);

    if (selectedDoctor && selectedDoctor.doctorName !== "AI") {
      const messagesRef = ref(
        db,
        `chatRooms/${selectedDoctor.doctorName}/messages`
      );
      unsubscribe = onChildAdded(messagesRef, (snapshot) => {
        const message = snapshot.val();
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [selectedDoctor]);

  const sendMessage = async () => {
    if (
      selectedDoctor &&
      newMessage.trim() !== "" &&
      selectedDoctor.doctorName !== "AI"
    ) {
      const messagesRef = ref(
        db,
        `chatRooms/${selectedDoctor.doctorName}/messages`
      );
      const newMessageRef = push(messagesRef);

      set(newMessageRef, {
        sender: "user",
        text: newMessage,
        timestamp: Date.now(),
      })
        .then(() => {
          setMessages([
            ...messages,
            { sender: "user", text: newMessage, timestamp: Date.now() },
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

    if (
      selectedDoctor &&
      newMessage.trim() !== "" &&
      selectedDoctor.doctorName === "AI"
    ) {
      try {
        const res = await apiFetch("/chatbot/ask", {
          method: "POST",
          body: JSON.stringify({
            audioFile: "",
            chatRequest: {
              userMessage: newMessage,
            },
          }),
        });
        const { data, status } = res;
        if (!status) {
          throw new Error(data);
        }
        setMessages([
          ...messages,
          { sender: "user", text: newMessage, timestamp: Date.now() },
        ]);
      } catch (error) {
        console.log(error);
      } finally {
        setNewMessage("");
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString(); // Format as time only
  };
  return (
    <div className="content" style={{ marginTop: 70 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="chat-window">
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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tìm kiếm"
                    />
                  </div>
                </form>
                <div className="chat-users-list">
                  <div className="chat-scroll">
                    <DoctorChat
                      doctor={{ doctorName: "AI", bio: "Chat AI" }}
                      onSelect={() => {
                        setSelectedDoctor({ doctorName: "AI", bio: "Chat AI" });
                      }}
                      isDoctor={false}
                    />
                    {!isFetching &&
                      data &&
                      data.map((e, index) => (
                        <DoctorChat
                          key={index}
                          doctor={e}
                          index={index}
                          onSelect={() => setSelectedDoctor(e)}
                        />
                      ))}
                  </div>
                </div>
              </div>

              <div className="chat-cont-right">
                <div className="chat-header">
                  <a
                    id="back_user_list"
                    href="javascript:void(0)"
                    className="back-user-list"
                  >
                    <i className="material-icons">chevron_left</i>
                  </a>
                  {selectedDoctor && (
                    <div className="media">
                      <div className="media-img-wrap">
                        <div className="avatar avatar-online">
                          <img
                            src={
                              selectedDoctor.imageUrl ||
                              "assets/img/doctors/doctor-thumb-02.jpg"
                            }
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="user-name">
                          {selectedDoctor.doctorName}
                        </div>
                        <div className="user-status"></div>
                      </div>
                    </div>
                  )}
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
                                </span>{" "}
                                {/* Added sender's name */}
                                <span className="chat-time">
                                  {formatTimestamp(message.timestamp)}
                                </span>{" "}
                                {/* Added timestamp */}
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
                      onKeyDown={handleKeyPress}
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

export default Chat;
