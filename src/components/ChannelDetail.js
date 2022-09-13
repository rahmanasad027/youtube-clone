import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = ({ channelDetail }) => {
  const { id } = useParams();
  const [ChannelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState();
  useEffect(() => {
    fetchFromApi("/channels?part=snippet&id=UCBVjMGOIkavEAhyqpxJ73Dw").then(
      (data) => {
        setChannelDetail(data?.items);
        console.log("data is: ", data);
      }
    );
    fetchFromApi(
      "/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet&order=date"
    ).then((data) => {
      setVideos(data);
      console.log("data: ", data);
    });
  }, [id]);
  console.log("=====videos", videos);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: "rgb(2,0,36)",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,45,121,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        {/* <Videos videos={videos} /> */}
      </Box>
    </Box>
  );
};

export default ChannelDetail;
