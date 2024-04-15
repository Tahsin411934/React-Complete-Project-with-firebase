import { useLoaderData, useParams } from "react-router-dom";


const ViewProperty = () => {
    const estates = useLoaderData();

    const {id} = useParams()
    const targetEstate = estates.find(estate => estate.id== id)
    console.log(targetEstate)
   
    const {
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image,
      } = targetEstate;
   
    return (
        <div className="container mx-auto">
            <div className="">
                <div className="hero-content flex-col gap-10 items-center  lg:flex-row">
                    <div className="w-[60%] h-[573px] flex justify-center items-center p-14 rounded-lg" style={{ backgroundColor: 'rgba(19, 19, 19, 0.05)' }}>
                        <img src={image} className=" w-[70%] h-[450px] rounded-lg " />
                    </div>
                    <div className="w-[100%]">
                        <h1 className="text-5xl font-bold">{estate_title}</h1>
                        <h1 className="p-1 rounded-lg text-base font-medium text-[#424242] -mt-8" >By: {segment_name}</h1>
                        <hr className='-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                        <h1 className="p-1 rounded-lg text-base font-medium text-[#424242] -mt-2">{status}</h1>
                        <hr className='-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                        <p className="py-6"><span className="font-bold">Review: </span> {description}</p>
                        <div className='flex  gap-10'>
                            <p>Tags</p>
                            <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#23BE0A]'>{facilities[0]}</p>
                            <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#23BE0A]'>{facilities[1]}</p>
                        </div>
                        <hr className='-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                        <div>
                            <div className="flex gap-10">
                                <p>Number of Pages:</p>
                                <p>{price}</p>
                            </div>
                            <div className="flex gap-10 -mt-5">
                                <p>Publisher:</p>
                                <p>{area}</p>
                            </div>
                            <div className="flex gap-10 -mt-5">
                                <p>Year of Publishing:</p>
                                <p>{location}</p>
                            </div>
                            <div className="flex gap-10 -mt-5">
                                <p>Rating:</p>
                                <p>{}</p>
                            </div>

                        </div>
                        {/* <button onClick={handleReadBtn} className="btn  mr-5 ">Read</button>
                        <button onClick={handleWishListBtn} className="btn bg-[#50B1C9] text-[#fff]">WishList</button> */}
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default ViewProperty;