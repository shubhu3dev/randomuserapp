import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import "./MyCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MyCard = ({ details }) => {
  let x = Math.floor(Math.random() * 60 + 1);

  return (
    <Card className="Mycard">
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h1>
            <span style={{ paddingRight: "0.5em" }}>{details.name?.title}</span>
            <span style={{ paddingRight: 6 }}>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <FaEnvelope style={{ marginRight: 6 }} />
          {details.email}
          <hr style={{ color: "#6A1B4D" }} />
        </CardText>
        <CardText>
          <FaMapMarkedAlt />
          {`${details.location?.state}${", "}${details.location?.city}
          ${" - "}${details.location?.postcode}`}
        </CardText>
        <CardText>
          <FaPhone />
          {details.phone}
        </CardText>
        <CardText className="updated">Last updated {x} mins ago</CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
