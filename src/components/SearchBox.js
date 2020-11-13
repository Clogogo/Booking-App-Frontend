import React, { Component } from "react";
import { DatePicker, Row, Col, Button, InputNumber, Select } from "antd";
import "antd/dist/antd.css";
import "./components.css";

const { RangePicker } = DatePicker;
const Option = Select.Option;

const placesList = [
  "Tallinn",
  "Kardla",
  "Johvi",
  "Jogeva",
  "Paide",
  "Haapsalu",
  "Rakvere",
  "Polva",
  "Parnu",
  "Rapla",
  "Kuressaare",
  "Tartu",
  "Valga",
  "Viljandi",
  "Voru",
];
export default class SearchBox extends Component {
  render() {
    return (
        <Row
          className="Search-Outter-Container"
          type="flex"
          justify="start"
          gutter={8}
        >
          <Col  className="Col-Container" id="Package-Container">
            Search for a Package
          </Col> 
          <Col>
            <Row type="flex" justify="center" gutter={8}>
              <Col className="Col-Container">Starting</Col>
              <Col className="Col-Container">
                <Select
                  showSearch
                  size="default"
                  allowClear
                  disabled={this.props.disableSearch}
                  placeholder="Local"
                  optionFilterProp="children"
                  onChange={this.props.handleChangeOrigin}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  defaultValue="Tallinn"
                  style={{ width: 120 }}
                >
                  {placesList.map((p) => {
                    if (this.props.destination === p)
                      return (
                        <Option key={p} disabled>
                          {p}
                        </Option>
                      );
                    else return <Option key={p}>{p}</Option>;
                  })}
                </Select>
              </Col>
              <Col className="Col-Container">Destination</Col>
              <Col className="Col-Container">
                <Select
                  showSearch
                  size="default"
                  disabled={this.props.disableSearch}
                  placeholder="Local"
                  optionFilterProp="children"
                  onChange={this.props.handleChangeDestination}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  defaultValue="Tartu"
                  style={{ width: 120 }}
                >
                  {placesList.map((p) => {
                    if (this.props.origin === p)
                      return (
                        <Option key={p} disabled>
                          {p}
                        </Option>
                      );
                    else return <Option key={p}>{p}</Option>;
                  })}
                </Select>
              </Col>
              <Col className="Col-Container">Period</Col>
              <Col className="Col-Container">
                <RangePicker
                  onChange={this.onChange}
                  disabled={this.props.disableSearch}
                />
              </Col>
              <Col className="Col-Container">Qty. Guests</Col>
              <Col className="Col-Container">
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={1}
                  disabled={this.props.disableSearch}
                  onChange={(value) => this.props.onNumberGuestsChange(value)}
                />
              </Col>
              <Col className="Col-Container">
                <Button
                  type="primary"
                  icon="search"
                  disabled={this.props.disableSearch}
                 
                >
                  To find
                </Button>
              </Col>

              <Col className="Col-Container" id="End">
                <Button
                  type="dashed"
                  icon="reload"
                >
                  Reset
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
    );
  }
}
