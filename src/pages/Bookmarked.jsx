import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/GlobalContext';
import { ToastContainer, toast } from 'react-toastify';
function Bookmerk() {
    const { state, setState } = useContext(MyContext);
    const [qidiruv, setQidiruv] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(state);
    }, [state]);

    const qidiruvFunksiyasi = () => {
        const qidiruvlar = state.filter((e) => 
            e.alternativeName.toLowerCase().includes(qidiruv.toLowerCase())
        );
        setData(qidiruvlar);
    };

    useEffect(() => {
        qidiruvFunksiyasi();
    }, [qidiruv]);

    const getFilmIcon = (type) => {
        if (type === "tv-series") {
            return "https://cdn-icons-png.flaticon.com/512/1023/1023521.png";
        } else {
            return "https://cdn-icons-png.flaticon.com/512/1179/1179069.png";
        }
    };

    const udalit = (id) => {
        const datas = state.filter(item => item.id !== id);
        setState(datas);
        toast.success('You have opened the card!');
    };

    return (
        <div className='pt-[40px] bg-[#10141e] w-[100%] pr-[20px] h-[100vh]'>
            <div className='flex w-[100%] gap-6 justify-center border-[#ffffff3c] pb-[20px] border-b-[1px]'>
                <label htmlFor="search">
                    <img className='w-[32px]' src="https://cdn-icons-png.flaticon.com/512/17148/17148531.png" alt="Search Icon" />
                </label>
                <input 
                    id="search"
                    value={qidiruv}  
                    onChange={(e) => setQidiruv(e.target.value)}
                    className='w-[100%] text-[25px] bg-[#0000] focus:border-none focus:outline-none text-white' 
                    type="text" 
                    placeholder='Search for Bookmerk or TV series'
                />
            </div>
           
            {data && (
                <div className='overflow-auto h-[85vh]'>
                    <h2 className='text-[32px] text-[#fff] mt-[30px] mb-4'>Bookmarked</h2>
                    <div className='flex flex-wrap justify-between gap-y-[20px]'>
                        {data.map((e) => (
                            <div key={e.id} className='div-2 text-[#f7f7f7c2] bg-[#10141e] drop-shadow-xl border-[#ffffff0e] border-solid border-[1px] rounded-[5px]'>
                                <img className='w-[200px] h-[250px] rounded-t-[5px] relative' 
                                     src={e.poster ? e.poster.previewUrl : "https://image.openmoviedb.com/kinopoisk-images/10592371/08982e09-7b03-42f5-8074-019920ca0e7c/orig"} 
                                     alt="" 
                                />
                                <button onClick={() => udalit(e.id)} className='button p-1 hover:bg-[#ffffff61] rounded-[50px]'>
                                    <img className='w-[30px] h-[30px] bg-white rounded-[50px]' src="https://cdn-icons-png.flaticon.com/512/1828/1828945.png" alt="Delete Icon" />
                                </button>
                                <div className='flex flex-col h-[22%] p-[5px] m-1'>
                                    <div className='flex'>
                                        <p className='font-[200] text-[13px] flex items-center'>
                                            {e.year} - {e.type} - 
                                            <img className='w-5 h-4' src={getFilmIcon(e.type)} alt="" />
                                        </p>
                                    </div>
                                    <h3 className='w-[150px] font-[700] text-[14px]'>{e.alternativeName}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <ToastContainer/>
        </div>
    );
}

export default Bookmerk;
