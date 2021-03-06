import { Col, Row } from "antd";
import * as React from "react";

import WorkContent from "../WorkContent";

import { WorkContentData } from "../../pages/index";

import styles from "./Work.module.scss";

interface Props {
  work: WorkContentData[];
}

export default ({ work }: Props) => (
  <article className={styles.container}>
    <h2>Work</h2>
    <Row type="flex" gutter={16}>
      {work.map(item => (
        <Col lg={{ span: 12 }} xs={{ span: 24 }}>
          <WorkContent {...item} />
        </Col>
      ))}
    </Row>
  </article>
);
