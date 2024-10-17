import axios from "axios";

export const sendMessage = async (message) => {
  const endPoint = "http://44.194.247.50:8080/api/v1/prompt?message=" + message;
  const res = await fetch(endPoint, {
    method: "POST",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return res;
};
