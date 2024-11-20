// import { useEffect, useState } from "react";

export const LoadingCard = ({isShowForm, animation}:
    {
        isShowForm: boolean,
        animation: string
    }
) => {

  return (
    <>
        {
            isShowForm ?
            (

                <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70
                                animate__animated animate__fadeIn ${animation}`}>
                    <div className="bg-indigo-950 rounded-xl p-6 
                                w-80 h-32 grid justify-items-center items-center shadow-2xl">

                        <h1 className="text-gray-200 text-2xl">Loading...</h1>
                
                    </div>
                </div>
            )
            :
            null
        }
    
    </>
)
}
