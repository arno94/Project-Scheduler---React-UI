import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal, {ModalFooter} from '@atlaskit/modal-dialog';
import Page from '@atlaskit/page';
import '@atlaskit/css-reset';
import AddNewEvent from '../components/AddNewEvent';
import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme';
import HomePage from '../pages/HomePage';

const MYDIV= styled.div`
  padding-top: ${gridSize() * 2}px;
  margin-right: 20px;
  margin-left: 20px;
`;

export default class App extends Component {
  state = {
    isModalOpen: false,
  };

  static childContextTypes = {
    showModal: PropTypes.func,
  }

  getChildContext() {
    return {
      showModal: this.showModal,
    };
  }

  showModal = () => {
    this.setState({ isModalOpen: true });
  }

  hideModal = () => {
    this.setState({ isModalOpen: false });
  }

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

  create = ({ target }) => console.log(target.innerText);

  render() {
    return (
      <div>
        <Page>
          <HomePage></HomePage>
        </Page>
        
        <div>
          {
            this.state.isModalOpen && (
              
              <Modal
                actions={[{ text: 'Create', onClick: this.create },{ text: 'Cancel', onClick: this.hideModal }]}
                onClose={this.hideModal}
                height="750px"
                width="large"
              >
                <MYDIV>
                <font size="4" color="#717a8a">Create Event</font>
                 <AddNewEvent></AddNewEvent>
                 </MYDIV>
              </Modal>
            )
          }
        </div>
     
      </div>
    );
  }
}
