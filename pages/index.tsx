import { Spin, Card, Select, Input, Button, Tabs, Alert } from 'antd'
import {ClockCircleOutlined} from "@ant-design/icons"
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from 'react'
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css";
const { Option } = Select;
const { TabPane } = Tabs;
const { TextArea } = Input;

export default function Home() {

  const [spinning, setSpinning] = useState<boolean>(false)

  //req
  const [method, setMethod] = useState<string>("GET")
  const [url, setUrl] = useState<string>("")
  const [json, setJson] = useState<JSON>(() => JSON)
  const [jsonText, setJsonText] = useState<string>("{}")
  const [headers, setHeaders] = useState<any[]>([])

  const [jsonFormatError, setJsonFormatError] = useState<boolean>(false)

  //res
  const [status, setStatus] = useState<any>("")
  const [time, setTime] = useState<string>("")
  const [response, setResponse] = useState<any>()
  const [responseJSON, setResponseJSON] = useState<any | null>()


  useEffect(() => {

  }, []);

  const send = async () => {
    setJsonFormatError(false)

    if (method != "GET") {
      try {
        JSON.parse(jsonText)
        setJson(JSON.parse(jsonText))
      } catch (error) {
        setJsonFormatError(true)
        return false
      }
    }

    setSpinning(true)

    setTime("")
    setStatus("")
    setResponse("")
    setResponseJSON(null)

    const data = {
      method,
      url,
      json,
      headers
    }

    const config: any = {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 3000,
      body: JSON.stringify(data)
    }

    const res = await fetch("/api/request", config)

    const { status, response, time } = await res.json()
    setStatus(status)
    setResponse(response)
    setTime(time + "ms")
    try {
      const j = JSON.stringify(JSON.parse(response), null, 4)
      setResponseJSON(j)
    } catch (error) {

    }

    setSpinning(false)
  }


  return (
    <Spin spinning={spinning}>
      <Card style={{ padding: "20px" }} bordered={false} bodyStyle={{ display: "flex", flexDirection: "column" }}>
        <Card bodyStyle={{ display: "flex" }}>
          <Select defaultValue="GET" style={{ width: 120 }} onChange={(x) => {
            setMethod(x)
          }}>
            <Option value="GET">GET</Option>
            <Option value="POST">POST</Option>
            <Option value="PUT">PUT</Option>
            <Option value="DELETE">DELETE</Option>
          </Select>
          <Input value={url} onChange={(x) => {
            setUrl(x.target.value)
          }} placeholder="URL" />
          <Button onClick={send} type="primary">Send</Button>
        </Card>
        <Card title="request">
          <Tabs defaultActiveKey="1" onChange={() => { }}>
            <TabPane tab="JSON" key="1">
              {jsonFormatError && <Alert
                message="Error"
                description="JSON Format Error"
                type="error"
                showIcon
              />}
              <TextArea value={jsonText} onChange={(x) => {
                setJsonText(x.target.value)
              }} rows={4} />
            </TabPane>
            <TabPane tab="Headers" key="2">
              {headers.map((item) => {
                return (<div className="flex" key={item.id}>
                  <Input value={item.key} onChange={(x) => {
                    setHeaders((prev: any[]) =>
                      prev.map((header: any) => {
                        if (header.id === item.id) {
                          header.key = x.target.value
                        }
                        return header;
                      }),
                    );
                  }} placeholder="key" />
                  <Input onChange={(x) => {
                    setHeaders((prev: any[]) =>
                      prev.map((header: any) => {
                        if (header.id === item.id) {
                          header.value = x.target.value
                        }
                        return header;
                      }),
                    );
                  }} value={item.value} placeholder="value" />
                </div>)
              })}
              <Button onClick={() => {
                console.log(headers)
                setHeaders((arr) => [...arr, { id: uuidv4(), key: "", value: "" }])
              }}>add</Button>
            </TabPane>
          </Tabs>
        </Card>
        <Card title={`response ${status}`} extra={<span><ClockCircleOutlined />{time}</span>} >
          <Tabs defaultActiveKey="1" onChange={(x) => {
            console.log(x)
            if (x === "2") {
              setTimeout(() => {
                Prism.highlightAll();
              }, 500);
            }
          }}>
            <TabPane tab="Response" key="1">
              {response}
            </TabPane>
            {
              responseJSON && <TabPane className="Code" tab="JSON" key="2">
                <pre className="line-numbers">
                  <code className="language-js">
                    {responseJSON}
                  </code>
                </pre>
              </TabPane>
            }
          </Tabs>
        </Card>
      </Card>
    </Spin>
  )
}
