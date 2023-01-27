

import { getAllNews } from "@api/news/news";
import { useQuery } from "react-query";


export const News = () => {
  const { data, isLoading, error } = useQuery("comments", getAllNews);

  return (
    <div>
        <p className="font-bold ... text-2xl ...">News</p>
      {data?.data.map(({ id, name, body, email }) => {
        return (
          
         
          <div className="border-4 border-inherit rounded-lg ... border-[#ffffff]"
          
            key={id}
            style={{ marginBottom: "10px", backgroundColor: "bg-gray-50 " }}
            
          >
          
            <p className="font-bold ...">{name}</p>
            <p>{email}</p>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
};