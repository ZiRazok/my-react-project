export const Mailbox = ({ name, unreadMessages = [] }) => {
    return (
        <div class="mail-box">
            <p>Hello {name}</p>
            <p>
                {unreadMessages.length > 0
                    ? <div>
                        <p> You have {unreadMessages.length} unread messages: </p>
                        {unreadMessages.map((item, index) => {
                            return <p>{index + 1}: {item}</p>
                        })}
                    </div>
                    : <p>No unread messages</p>}
            </p>
        </div>
    );
};


export default Mailbox