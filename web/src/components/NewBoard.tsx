import {

} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { BoardForm } from "./BoardForm";


export const NewBoard = () => {
  const navigate = useNavigate()
  let submit  = () => {
    console.log('new board added!!')
    navigate('/')
  }
  return <BoardForm onSubmit={submit}/>;
};
