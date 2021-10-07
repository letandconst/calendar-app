import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Statistic, Tag, Row, Col, Button } from "antd";
import { EventContext } from "../../context/EventContext";
import moment from "moment";
const EventCard = ({ event }) => {
  const { deleteEvent } = useContext(EventContext);

  let color;
  if (event.status === "Done") color = "success";
  if (event.status === "Pending") color = "error";
  if (event.status === "On Going") color = "processing";

  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic value={event.name} />

          <Tag color={color}>{event.status}</Tag>
        </Col>
        <Col span={12}>
          <Statistic value={moment(event.date).format("LL")} />

          <Link to={`/edit-event/${event.id}`}>
            {/* <Link
            to={{
              pathname: `/edit-event/${event.id}`,
            }}
          > */}
            <Button type="default">Edit</Button>
          </Link>

          <Button onClick={() => deleteEvent(event.id)} type="danger">
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default EventCard;
