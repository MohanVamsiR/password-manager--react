import './index.css'

const GetPassword = props => {
  const {details, onDelItem, isChecked} = props
  const {id, website, username, password, initialClassName} = details

  const onDeluser = () => {
    onDelItem(id)
  }

  return (
    <li className="liEl">
      <div className="lielDetails">
        <p className={`dpic ${initialClassName}`}>
          {username[0].toUpperCase()}
        </p>
        <div className="name-pswd">
          <p className="list-para">{website}</p>
          <p className="list-para">{username}</p>
          {isChecked ? (
            <p className="list-para">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-img"
            />
          )}
        </div>
      </div>

      <button
        className="del"
        type="button"
        // testid="delete"
        onClick={onDeluser}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="del-icon"
        />
      </button>
    </li>
  )
}
export default GetPassword
