import React from 'react';
import upload2Image from "../../assest/images/upload-2.png";

function ChatboatUserListItem() {
    return (
        <div className="chat-user-holder">
            <div>
                <div className="user-img">
                    <img src={upload2Image} alt="upload-2" />
                </div>
            </div>
            <div className="user-info">
                <div>
                    <h3>Mark Jecno</h3>
                    <p>6:40 PM</p>
                </div>
                <span>Hi, How are you?</span>
            </div>
        </div>
    )
}

export default ChatboatUserListItem;
