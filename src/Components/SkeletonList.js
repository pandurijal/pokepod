import React from 'react';

const SkeletonList = props => {
  const { length } = props;
  return (
    <>
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
      <div className="grid-item__skeleton" />
    </>
  );
};

export { SkeletonList };
