import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/redux/greetingSlice";

export default function Greeting() {
  const dispatch = useDispatch();
  const { isLoading, greeting: greetData } = useSelector(
    ({ greetings }) => greetings
  );

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (isLoading) return <p>Loading greeting please wait</p>;
  return <p>{greetData?.greeting}</p>;
}
