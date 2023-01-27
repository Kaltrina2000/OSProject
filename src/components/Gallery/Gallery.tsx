import React from 'react'
import { useQuery } from 'react-query';
import { getAllPhotos } from '@api/gallery/Gallery';
import { Icon } from '@components/shared/Icon/Icon';

export const Gallery = () => {
    const { data, isLoading, error } = useQuery("photos", getAllPhotos);
    return(
    <div>
       <p className="font-bold ... text-2xl ...">Gallery</p>
      {data?.data.map(({ albumId,id,title,url,thumbnailUrl}) => {
        return (
          
          
          <div className="border-4 border-inherit rounded-lg ... border-[#fffefe]  "
            key={id}
            style={{ marginBottom: "10px", backgroundColor: "bg-gray-50 " }}
          >
             
            <p>{title}</p>
            <p>{albumId}</p>
            
          </div>
        );
      })}
    </div>

  )
}
