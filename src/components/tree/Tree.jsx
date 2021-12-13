import {TreeDir} from "../tree-dir/TreeDir";
import {TreeItem} from "../tree-item/TreeItem";
import React from "react";
let data = require('../../data/tree-data.json');

export const Tree = () => {
  return (
    data.map((item)=> {
      return item.isDir ? <TreeDir key={item.name} data={item}/> : <TreeItem key={item.name} data={item.name}/>
    })
  )
}
