import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Button, DatePicker } from "antd";
import { EventContext } from "../../context/EventContext";
import options from "../../api/options";
import api from "../../api/index";
import Select from "react-select";

const { useForm } = Form;
const EditEvent = ({ event, setEvents }) => {
  const { updateEvent } = useContext(EventContext);
  const [formHandler] = useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(options.label);

  useEffect(() => {
    loadEvents();
  }, []);

  let history = useHistory();
  const { id } = useParams();

  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    status: "",
  });

  const { name } = newEvent;

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {};

  const handleSubmit = (e) => {
    updateEvent(name, selectedDate, selectedStatus);
    history.push("/");
  };

  const loadEvents = async () => {
    const result = await api.get(`/events/${id}`);
    setNewEvent(result.data);
  };

  return (
    <>
      <p>Edit</p>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={handleSubmit}
        form={formHandler}
      >
        <Form.Item label="Input">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </Form.Item>
        <Form.Item label="Select">
          <Select options={options} onChange={handleSelect} />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker
            onChange={(date) => setSelectedDate(date)}
            selected={selectedDate}
            showYearDropdown
            scrollableMonthYearDropdown
          />
        </Form.Item>
        <Form.Item className="button-container">
          <Button
            type="primary"
            htmlType="submit"
            className="blue-button-bg f-manrope-bold l-blue-button-bg"
          >
            UPDATE EVENT
          </Button>
          <Button
            onClick={() => history.goBack()}
            className="blue-button-bg f-manrope-bold l-blue-button-bg"
          >
            Go Back
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditEvent;
