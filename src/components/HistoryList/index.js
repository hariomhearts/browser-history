import './index.css'

const HistoryList = props => {
  const {details, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const deleteHistory = () => onDelete(id)

  return (
    <li className="list-card">
      <p className="time">{timeAccessed}</p>
      <div className="list-detail-card">
        <div className="icon-name-card">
          <img src={logoUrl} alt="app logo" className="logo" />
          <div className="url-name-card">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button className="delete-btn" type="button" onClick={deleteHistory}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryList
