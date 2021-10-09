import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Button, DatePicker } from "antd";
import { EventContext } from "../../context/EventContext";
import options from "../../api/options";
import api from "../../api/index";
import Select from "react-select";
import moment from "moment";

const { useForm } = Form;

const EditEvent = (props) => {
  const [formHandler] = useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState();

  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    status: "",
  });

  let history = useHistory();
  const { id } = useParams();
  const { updateEvent } = useContext(EventContext);
  const { name, date, status } = newEvent;

  const loadEvents = async () => {
    const result = await api.get(`/events/${id}`);
    setNewEvent(result.data);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    if (Object.keys(newEvent).length === 0) return;

    const option = options.filter((option) => option.label === newEvent.status);
    if (option.length < 1) {
      console.warn("no matching options");
      return;
    }
    setInputValue(option[0]);
    setSelectedDate(newEvent.date);
  }, [newEvent]);

  useEffect(() => {}, [selectedDate]);

  const handleSubmit = () => {
    updateEvent(name, selectedDate, inputValue);
    history.push("/");
  };

  const onDateChange = (_, dateString) => {
    setSelectedDate(selectedDate);
  };

  const handleChange = (selectedOption) => {
    setInputValue(selectedOption.status);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
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
            onChange={handleChangeInput}
          />
        </Form.Item>
        <Form.Item label="Select">
          <Select
            options={options}
            onChange={handleChange}
            value={inputValue}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker
            onChange={onDateChange}
            selected={selectedDate}
            showYearDropdown
            scrollableMonthYearDropdown
            defaultValue={moment()}
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
