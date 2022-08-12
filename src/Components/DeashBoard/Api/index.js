import axios from "axios";

const url = "https://hidden-crag-71902.herokuapp.com/item";
export const getItems = () => axios.get(url);
export const createItem = (item) => axios.post(url, item);
