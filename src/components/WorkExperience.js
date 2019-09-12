import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../profile";
import { Media } from "reactstrap";

class WorkExperience extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {profile.workExperience.map(function (experience, i) {
            return (
              <div key={i}>
                <Media>
                  <Media left top href={experience.url}>
                    <Media object src={experience.logo} alt={experience.companyName}/>
                  </Media>
                  <Media body>
                    <Media heading>
                      <a href={experience.url}>{experience.companyName}</a>
                    </Media>
                    <span className="companyDescription">{experience.companyDescription}</span>
                    {experience.roles.map(function (role, i) {
                      return <div key={i}>
                        <h5>{role.title}</h5>
                        <span className="month">{role.month}</span>
                        <br></br>
                        <span className="jobLocation">{role.location}</span>
                        <p className="jobDescription">{role.description}</p>
                        <p className="description">{role.additional}</p>
                      </div>
                    })}
                  </Media>
                </Media>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  }
}

export default WorkExperience;