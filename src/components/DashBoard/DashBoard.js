import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, ComposedChart, Legend, Area } from 'recharts';
import { useChart } from '../../hooks/useChart';
import {Col, Container, Row} from 'react-bootstrap';

const DashBoard = () => {
    const [charts, setCharts] = useChart()
    return (
        <div>
            <Container>
                <h1 className='mt-5 mb-5'>Our Business Status</h1>
                <Row className='gy-5'>
                    <Col xs={12} md={6} lg={6}>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart width={150} height={40} data={charts}>
                        <Bar dataKey="investment" fill="#8884d8" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        </BarChart>
                    </ResponsiveContainer>
                    <h5 className='mt-3'>chart 1.1: Investments per month</h5>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                    <ResponsiveContainer height={300} width='100%'>
                    <LineChart width={600} height={300} data={charts} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                    </ResponsiveContainer>
                    <h5 className='mt-3'>chart 1.2: sell per month</h5>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                    <ResponsiveContainer  height={300} width='100%'>
                        <ComposedChart
                            width={500}
                            height={400}
                            data={charts}
                            margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="month" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="investment" stroke="#ff7300" />
                        </ComposedChart>
                        </ResponsiveContainer>
                        <h5 className='mt-3'>chart 1.3: investment, sell and revenue per month</h5>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <ResponsiveContainer  height={300} width='100%'>
                            <PieChart>
                                <Pie dataKey="revenue" data={charts} fill="#8884d8" label />
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                        <h5 className='mt-3'>chart 1.4: revenue per month</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashBoard;