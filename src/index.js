import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';

ReactDOM.render(
<App />,
 document.getElementById('app-root'),

AP.request('/rest/api/2/user/bulk?accountId=5bffb0cfa1b46046f530c813', {
    success: function(responseText){
      var json = (JSON.parse(responseText));
	  var displayName = json.values[0].displayName;
	  var avatarUrl = json.values[0].avatarUrls["48x48"];
	  document.getElementById('username').innerHTML = "Username: " + displayName;
      document.getElementById('avatar').innerHTML = "Avatar url: " + avatarUrl;
    }
  })
 );
