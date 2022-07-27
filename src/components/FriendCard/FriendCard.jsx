import './index.css';


const FriendCard = ({ friendData, deleteBtnFr }) => {
  const { photo, name } = friendData;
  

  return (
    <div className="FriendCard" onClick={deleteBtnFr}>

      <img className="FriendCard__photo" src={ photo } alt={ name } />
      <p className="FriendCard__name">{ name }</p>
    </div>
  )
}

export default FriendCard;