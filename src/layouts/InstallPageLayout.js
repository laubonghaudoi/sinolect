import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Container,
  Grid,
} from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

import '../css/install.css';

import InstallMenu from '../components/InstallMenu';
import PageLayout from '../layouts/PageLayout';

class InstallPageLayout extends Component {
  constructor(props){
    super(props);
    this.handleActiveChange = this.handleActiveChange.bind(this);
    this.state = { activeItem: this.props.activeItem};
  }

  handleActiveChange(name) {
    this.setState({activeItem: name})
  }

  render() {
    const { children } = this.props;

    return (
      <PageLayout>
          <Container fluid id='content'>
            <Grid columns='equal' padded stackable>
              <Grid.Column width={3}>
                <InstallMenu 
                  activeItem={this.state.activeItem}
                  onActiveChange={this.handleActiveChange}
                />
              </Grid.Column>
              <Grid.Column width={13}>
                {children}
              </Grid.Column>
            </Grid>
          </Container>
      </PageLayout>
    );
  }
}

InstallPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InstallPageLayout;