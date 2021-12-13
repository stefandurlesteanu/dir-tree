import {TreeItem} from "../tree-item/TreeItem";
import React, {useState} from "react";
import './treeDir.css';

export const TreeDir = (props) => {
  const [show, setShow]  = useState(false);

  const toggle = () => {
    setShow(!show)
  }

  return (
    props.data.isDir ? (
    <>
      <h1 onClick={() => toggle()}>{props.data.name}</h1>
      <div className={`dir ${show ? "show" : "hide"}`}>
      {props.data.isDir ? props.data.childrenList.map((item)=> <TreeDir key={item.name} data={item}/>) : null }
      </div>
    </>) : <TreeItem data={props.data.name}/>
  )
}

