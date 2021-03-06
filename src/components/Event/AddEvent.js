import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, DatePicker } from "antd";
import { EventContext } from "../../context/EventContext";
import Select from "react-select";
import options from "../../api/options";

const initialState = {
  name: "",
  date: "",
  status: "",
};
const { useForm } = Form;
const AddEvent = () => {
  let history = useHistory();
  const { addEvent } = useContext(EventContext);
  const [event, setEvent] = useState(initialState);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(options.label);
  const [formHandler] = useForm();
  const { name } = event;

  const handleSelect = (e) => {
    setSelectedStatus(e.label);
    console.log(selectedStatus);
  };

  function onChange(date) {
    setSelectedDate(date);
  }
  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    addEvent(name, selectedDate, selectedStatus);
    history.push("/");
  };

  useEffect(() => {}, []);

  return (
    <>
      <p>Add</p>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={handleSubmit}
        form={formHandler}
      >
        <Form.Item label="Name">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            placeholder=""
            value={name}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Status">
          <Select options={options} onChange={handleSelect} />
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker
            // onChange={(date) => setSelectedDate(date)}
            onChange={onChange}
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
            ADD EVENT
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

export default AddEvent;
