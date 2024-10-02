
const FriendsListItem = ({ photo, name, status }) => {
  return (
    <div>
      <img src={photo} alt="Avatar" width="48" />
          <p className="itemName">{name}</p>
      {status ? <p className="online">Online</p> : <p className="offline">Offline</p>}
    </div>
  )
}

export default FriendsListItem