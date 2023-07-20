import './index.css'
import {Component} from 'react'
import HistoryList from '../HistoryList'
// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class History extends Component {
  state = {historyList: initialHistoryList, searchInput: ' '}

  noHistory = () => (
    <div className="no-history-section">
      <h1 className="no-history">There is no history to show</h1>
    </div>
  )

  filterHistoryList = () => {
    const {searchInput, historyList} = this.state
    const updatedHistoryList = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updatedHistoryList
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    const {historyList} = this.state
    const newList = historyList.filter(each => each.id !== id)
    this.setState({historyList: newList})
  }

  render() {
    const {searchInput} = this.state
    const filteredHistoryList = this.filterHistoryList()
    return (
      <div className="history-page-container">
        <div className="history-nav-bar-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-logo"
            alt="history-logo"
          />
          <div className="his-search-bar-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search-logo"
              className="search-logo"
            />
            <input
              type="text"
              className="input-search"
              placeholder="Search History"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <ul className="history-list-section">
          {filteredHistoryList.length !== 0
            ? filteredHistoryList.map(eachList => (
                <HistoryList
                  key={eachList.id}
                  onDelete={this.onDelete}
                  details={eachList}
                />
              ))
            : this.noHistory()}
        </ul>
      </div>
    )
  }
}

export default History
