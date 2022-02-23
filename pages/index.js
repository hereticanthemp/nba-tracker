import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Standing from "./components/standing";
import Leaders from "./components/daily_lead_player";

import Link from "next/link";

import { Row, Col, Space } from "antd";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NBA Tracker</title>
        <meta name="description" content="show nba status and odds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Row>
          <Col span={24}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Standing></Standing>
            </Space>
          </Col>
        </Row>
        <Row>
          <Col>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Leaders></Leaders>
            </Space>
          </Col>
        </Row>
      </main>
    </div>
  );
}
