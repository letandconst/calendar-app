import React from "react";
import { Link } from "react-router-dom";
import { Statistic, Tag, Row, Col, Button } from "antd";
import moment from "moment";

const EventCard = (props) => {
  const { id, name, status, date } = props.event;

  let color;
  if (props.event.status === "Done") color = "success";
  if (props.event.status === "Pending") color = "error";
  if (props.event.status === "On Going") color = "processing";

  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic value={name} />

          <Tag color={color}>{status}</Tag>
        </Col>
        <Col span={12}>
          <Statistic value={moment(date).format("LL")} />
          <Link
            to={{
              pathname: `/edit-event/${id}`,
            }}
          >
            <Button type="default">Edit</Button>
          </Link>
          <Button onClick={() => props.onRemove(id)} type="danger">
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default EventCard;
