import './UserComment.css'
import UserComponent from '../user_item/UserItem'
import ChatBubble from '../chat_bubble/ChatBubble'

 
function UserCommentComponent(){
    return(
        <div className='user_comment_container'>
            <ChatBubble text='Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos. Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos. Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos.'/>
            <UserComponent src={'src/assets/images/user-mindy-monahan.png'} userName={"Mindy Monahan"}/>
        </div>
    )
}

export default UserCommentComponent