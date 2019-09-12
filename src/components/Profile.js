import React from 'react';
import {Jumbotron, Container, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';
import Experience from "./Experience";
import Education from './Education'
import WorkExperience from './WorkExperience'
import Organization from './Organization'
import profile from '../profile.json'

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return <div>
      <Jumbotron>
        <Container>
          <h3 className="display-3">{profile.title}</h3>
          <p className="lead">{profile.summary}</p>
        </Container>
      </Jumbotron>

      <Container>
        <Nav tabs>
            <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}>
                Internship
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}>
                Work Experience
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}>
                Organization
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }}>
                Education
                </NavLink>
            </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
            <Experience/>
        </TabPane>
        <TabPane tabId="2">
            <WorkExperience/>
        </TabPane>
        <TabPane tabId="3">
            <Organization/>
        </TabPane>
        <TabPane tabId="4">
            <Education/>
        </TabPane>
        </TabContent>
    </Container>
    </div>;
  }
}

export default Profile;