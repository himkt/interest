import React from "react";
import PaperBadge from "../atoms/paperBadge";

type Props = {
  paper: any,
  idx: number
};

const Card = ({ paper, idx }: Props) => (
  <div className="card border-info mb-3" key={idx}>
    <div className="card-header text-muted">Added: {paper.date}</div>
    <div className="card-body">
      <h5 className="card-title">
        <a href={paper.link}>{paper.title}</a>
      </h5>
      <div className="headerComponent">
        <PaperBadge text={paper.conference} badgeClass="badge badge-info" />
        <PaperBadge text={paper.year} badgeClass="badge badge-success" />
      </div>
      <p className="card-text">{paper.note}</p>
    </div>
  </div>
);

export default Card;
