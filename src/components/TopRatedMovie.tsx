"use client"
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Card } from "./Card";
import axios from "axios";
export const TopRatedMovie = () => {
  const[data,setData]=useState([])
  
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
        );
        setData(response.data.results); 
      } catch (error) {
        
      }
    };
    fetchTopRatedMovies();
  }, []);




  return (
    <div className="flex flex-col gap-[32px] px-[80px]">
      <div className="flex items-center justify-between ">
        <p className="text-[24px] leading-8 font-semibold">Top Rated</p>
        <Button className="bg-[#FFFFFF] text-[black] w-[120px] px-4 py-2 h-9">
          See more
          <MoveRight />
        </Button>
      </div>
      <div className="grid grid-cols-5 gap-[32px] w-full">
        {data?.slice(0,10).map((value:any, index:number) => {
          return (
            <Card
              key={index}
              image={`https://image.tmdb.org/t/p/w300/${value.backdrop_path}`}
              rate={value.vote_average}
              title={value.title}
            />
          );
        })}
      </div>
    </div>
  );
};
