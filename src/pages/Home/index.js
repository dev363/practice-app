import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import ContextApi from "../ContextApi";
import ContextApiPassData from "../ContextApi/ContextApiPassData";
import ContextWithMemo from "../ContextApi/ContextWithMemo";
import WithoutUseMemo from "../useMemoPage/without";
import WithUseMemo from "../useMemoPage/with";
import WithoutUseCallback from "../useCallbackPage/without";
import WithUseCallback from "../useCallbackPage/with";

const Home = () => {
  const [state, setState] = useState([
    {
      to: "/ContextApi",
      label: "Context Api",
    },
    {
      to: "/ContextApiPassData",
      label: "Context Api (Pass Data)",
    },
    {
      to: "/ContextWithMemo",
      label: "Context Api (useMemo)",
    },
    {
      to: "/WithoutUseMemo",
      label: "Without useMemo",
    },
    {
      to: "/WithUseMemo",
      label: "With useMemo",
    },
    {
      to: "/WithoutUseCallback",
      label: "Without useCallback",
    },
    {
      to: "/WithUseCallback",
      label: "With useCallback",
    },
  ]);

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Container fluid={true}>
      <Row>
        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Header>Links</Card.Header>
            <ListGroup variant="flush">
              {state?.map(({ to, label }, index) => (
                <ListGroup.Item key={index} active={pathname === to}>
                  <NavLink to={to}>{label}</NavLink>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col md={9}>
          <Routes>
            <Route path="/" element={<h2>Click Any Component</h2>} />
            <Route path="/ContextApi" element={<ContextApi />} />
            <Route
              path="/ContextApiPassData"
              element={<ContextApiPassData />}
            />
            <Route path="/ContextWithMemo" element={<ContextWithMemo />} />

            <Route path="/WithoutUseMemo" element={<WithoutUseMemo />} />
            <Route path="/WithUseMemo" element={<WithUseMemo />} />
            <Route
              path="/WithoutUseCallback"
              element={<WithoutUseCallback />}
            />
            <Route path="/WithUseCallback" element={<WithUseCallback />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
