import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { addLocaleData, IntlProvider } from 'react-intl'
import svMessages from '../../l10n/sv-SE.json'
import sv from 'react-intl/locale-data/sv'

class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  render () {
    const { history, routes, store } = this.props

    addLocaleData(sv)

    return (
      <Provider store={store}>
        <IntlProvider locale={'sv-SE'} messages={svMessages}>
          <div style={{ height: '100%' }}>
            <Router history={history} children={routes} />
          </div>
        </IntlProvider>
      </Provider>
    )
  }
}

export default AppContainer
